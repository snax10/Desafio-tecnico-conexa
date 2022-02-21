import { FC, useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../../contexts/authContext';
import api from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AppointmentsList } from '../../components/AppointmentsList';
import { SignOutModal } from '../../components/SignOutModal';
import { NewAppointmentModal } from '../../components/NewAppointmentModal';

import { ConsultationsContainer } from './styles';

interface Appointment {
  id: number;
  patientId: number;
  date: Date;
  patient: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}
interface CreateAppointmentData {
  patientId: string;
  date: string;
  time: string;
}

const Consultations: FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] = useState(
    false,
  );
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const storedAppointments = localStorage.getItem('@conexa:appointments');

    if (storedAppointments) {
      const parsedAppointments = JSON.parse(storedAppointments);

      setAppointments(parsedAppointments);
    } else {
      const fetchAppointments = async () => {
        const requestConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await api.get(
          '/consultations?_expand=patient',
          requestConfig,
        );

        localStorage.setItem(
          '@conexa:appointments',
          JSON.stringify(response.data),
        );

        setAppointments(response.data);
      };

      fetchAppointments();
    }
  }, [setAppointments, token]);

  const handleOpenNewAppointmentModal = useCallback(() => {
    setIsNewAppointmentModalOpen(true);
  }, []);

  const handleCloseNewAppointmentModal = useCallback(() => {
    setIsNewAppointmentModalOpen(false);
  }, []);

  const createNewAppointment = useCallback(
    async (data: CreateAppointmentData) => {
      const requestConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const requestData = {
        patientId: data.patientId,
        date: new Date(`${data.date} ${data.time}`).toString(),
      };

      const response = await api.post(
        '/consultations',
        requestData,
        requestConfig,
      );

      const createdAppointment = response.data;

      const patientResponse = await api.get(
        `/patients?id=${createdAppointment.patientId}`,
        requestConfig,
      );

      const appointment = {
        id: response.data.id,
        date: response.data.date,
        patientId: response.data.patientId,
        patient: patientResponse.data[0],
      };

      setAppointments([...appointments, appointment]);

      localStorage.setItem(
        '@conexa:appointments',
        JSON.stringify([...appointments, appointment]),
      );
    },
    [token, appointments],
  );

  const handleOpenSignOutModal = useCallback(() => {
    setIsSignOutModalOpen(true);
  }, []);

  const handleCloseSignOutModal = useCallback(() => {
    setIsSignOutModalOpen(false);
  }, []);

  return token ? (
    <>
      <Header onOpenSignOutModal={handleOpenSignOutModal} />

      <ConsultationsContainer>
        <h1>Consultas</h1>

        <AppointmentsList appointments={appointments} />
      </ConsultationsContainer>

      <Footer onOpenNewTransactionModal={handleOpenNewAppointmentModal} />

      <NewAppointmentModal
        isOpen={isNewAppointmentModalOpen}
        onRequestClose={handleCloseNewAppointmentModal}
        createNewAppointment={createNewAppointment}
      />
      <SignOutModal
        isOpen={isSignOutModalOpen}
        onRequestClose={handleCloseSignOutModal}
      />
    </>
  ) : (
    <Redirect to="/" />
  );
};

export type { Appointment };
export { Consultations };

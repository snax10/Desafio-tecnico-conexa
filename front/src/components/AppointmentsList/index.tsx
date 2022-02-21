import { FC } from 'react';

import { Button } from '../Button';

import type { Appointment } from '../../pages/Consultations';

import {
  AppointmentListContainer,
  AppointmentList,
  AppointmentListCounter,
} from './styles';

interface AppointmentsListProps {
  appointments: Appointment[];
}

const AppointmentsList: FC<AppointmentsListProps> = ({ appointments }) => {
  if (!appointments.length) {
    return <h1>Não há nenhuma consulta agendada</h1>;
  }

  return (
    <AppointmentListContainer>
      <AppointmentListCounter>
        {appointments.length} consultas agendadas
      </AppointmentListCounter>

      {appointments.map(({ id, date, patient }) => {
        const fullName = `${patient.first_name} ${patient.last_name}`;
        const formattedTime = new Date(date).toLocaleTimeString('pt-BR', {
          hour: 'numeric',
          minute: 'numeric',
        });
        const formattedDate = new Date(date).toLocaleDateString('pt-BR');

        return (
          <AppointmentList key={id}>
            <div>
              <p title={fullName}>{fullName}</p>
              <span>
                {formattedDate} às {formattedTime}
              </span>
            </div>

            <Button type="button">Atender</Button>
          </AppointmentList>
        );
      })}
    </AppointmentListContainer>
  );
};

export { AppointmentsList };

import { FC } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import { useAuth } from '../../contexts/authContext';

import { Button } from '../Button';

import { SignOutModalTitle, SignOutModalButtons } from './styles';

Modal.setAppElement('#root');

interface SignOutModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const SignOutModal: FC<SignOutModalProps> = ({ isOpen, onRequestClose }) => {
  const { signOut } = useAuth();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiX />
      </button>

      <SignOutModalTitle>Deseja sair?</SignOutModalTitle>

      <SignOutModalButtons>
        <Button type="button" onClick={onRequestClose}>
          Não
        </Button>
        <Button type="button" onClick={signOut}>
          Sim
        </Button>
      </SignOutModalButtons>
    </Modal>
  );
};

export { SignOutModal };

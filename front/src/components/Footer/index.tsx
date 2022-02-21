import { FC } from 'react';

import { ButtonTransparent } from '../ButtonTransparent';
import { Button } from '../Button';

import { FooterContainer } from './styles';

interface FooterProps {
  onOpenNewTransactionModal(): void;
}

const Footer: FC<FooterProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <>
      <FooterContainer>
        <div>
          <ButtonTransparent type="button">Ajuda</ButtonTransparent>
          <Button type="button" onClick={onOpenNewTransactionModal}>
            Agendar Consulta
          </Button>
        </div>
      </FooterContainer>
    </>
  );
};

export { Footer };

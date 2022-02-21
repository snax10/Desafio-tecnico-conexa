import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/authContext';

import { ButtonTransparent } from '../ButtonTransparent';

import logoImg from '../../assets/logo-conexa.svg';

import { HeaderContainer, HeaderContent, HeaderMessage } from './styles';

interface HeaderProps {
  onOpenSignOutModal?(): void;
}

const Header: FC<HeaderProps> = ({ onOpenSignOutModal }) => {
  const { user } = useAuth();
  const token = localStorage.getItem('@conexa:token');

  return (
    <HeaderContainer>
      <HeaderContent isLoggedIn={!!token}>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>

        {token ? (
          <HeaderMessage>
            <p>Olá, Dr.{user}</p>
            <ButtonTransparent onClick={onOpenSignOutModal}>
              Sair
            </ButtonTransparent>
          </HeaderMessage>
        ) : null}
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };

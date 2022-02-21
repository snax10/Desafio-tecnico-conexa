import { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { Header } from '../../components/Header';
import { FormSignIn } from '../../components/FormSignIn';

import signinBg from '../../assets/signin-bg.svg';

import { SignInContainer, SignInTitle, SignInForm } from './styles';

const SignIn: FC = () => {
  const token = localStorage.getItem('@conexa:token');

  return token ? (
    <Redirect to="/consultations" />
  ) : (
    <>
      <Header />

      <SignInContainer>
        <SignInTitle>
          <h1>Faça Login</h1>
          <img src={signinBg} alt="Faça login" />
        </SignInTitle>

        <SignInForm>
          <FormSignIn />
        </SignInForm>
      </SignInContainer>
    </>
  );
};

export { SignIn };

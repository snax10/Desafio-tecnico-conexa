import { FC, useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Input } from '../Input';
import { Button } from '../Button';

import type { SignInCredentials } from '../../contexts/authContext';
import { useAuth } from '../../contexts/authContext';

import getValidationErrors from '../../utils/getValidationErrors';

import { SignInFormContainer } from './styles';

const FormSignIn: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInCredentials) => {
      try {
        formRef.current?.setErrors({});

        const validationSchema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await validationSchema.validate(data, {
          abortEarly: false, // vai entenrroper a execução no primeiro erro encontrado
        });

        await signIn(data);

        history.push('/consultations');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Usuário ou senha inválido', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [signIn, history],
  );

  return (
    <>
      <SignInFormContainer ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          tooltip="Sua senha de acesso é recebida por e-mail."
        />
        <Button type="submit">Entrar</Button>
      </SignInFormContainer>

      <ToastContainer />
    </>
  );
};

export { FormSignIn };

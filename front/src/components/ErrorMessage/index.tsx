import { FC, ReactNode } from 'react';

import { ErrorMessageContainer } from './styles';

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
    <ErrorMessageContainer data-testid="error_message">
      {children}
    </ErrorMessageContainer>
  );
};

export { ErrorMessage };

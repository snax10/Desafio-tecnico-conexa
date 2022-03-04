import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props} data-testid="pure_button">
      {children}
    </ButtonContainer>
  );
};

export { Button };

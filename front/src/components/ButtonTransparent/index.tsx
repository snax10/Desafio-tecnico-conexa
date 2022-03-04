import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonOutlineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonTransparent: FC<ButtonOutlineProps> = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props} data-testid="button_transparent">
      {children}
    </ButtonContainer>
  );
};

export { ButtonTransparent };

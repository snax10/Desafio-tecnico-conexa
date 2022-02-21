import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonOutlineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonTransparent: FC<ButtonOutlineProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export { ButtonTransparent };

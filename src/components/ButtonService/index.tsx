import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
}

const ButtonService: React.FC<IButton> = ({
  children, value, isSelected, ...rest
}) => (
  <Container type="button" value={value} isSelected={isSelected} {...rest}>
    {children}
  </Container>
);

export default ButtonService;

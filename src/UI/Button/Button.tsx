import { FC, ReactElement } from 'react';
import { ButtonActive, ButtonDisabled, ButtonHover, ButtonPassive } from './Button.styled';
// import React from 'react';

interface ButtonMainProps {
  type?: "button" | "submit" | "reset" | undefined;
  buttonName: string;
  onClick?: () => void;
  disabled?: boolean;
  buttonStyle?: 'disabled' | 'active' | 'hover' | undefined;
  width?: number;
}

const ButtonMain: FC<ButtonMainProps> = ({ type, buttonName, onClick, disabled, buttonStyle }) => {
  let ButtonComponent: ReactElement;

  if (buttonStyle === 'disabled') {
    ButtonComponent = <ButtonDisabled type={type} onClick={onClick} disabled={disabled}>{buttonName}</ButtonDisabled>;
  } else if (buttonStyle === 'active') {
    ButtonComponent = <ButtonActive type={type} onClick={onClick} disabled={disabled}>{buttonName}</ButtonActive>;
  } else if (buttonStyle === 'hover') {
    ButtonComponent = <ButtonHover type={type} onClick={onClick} disabled={disabled}>{buttonName}</ButtonHover>;
  } else {
    ButtonComponent = <ButtonPassive type={type} onClick={onClick} disabled={disabled}>{buttonName}</ButtonPassive>;
  }

  return ButtonComponent;
};

export default ButtonMain;

import { ChangeEvent, FC, useState } from 'react';
import { InputStyles, AcceptedStyles, ErrorStyles } from './Input.styled';

interface InputProps {
  value?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  onChange: (data: { value: string, error: { isValid: boolean, message: string } }) => void;
  error: { isValid: boolean; message: string };
}

const InputMain: FC<InputProps> = ({
  value = '',
  name = '',
  label = '',
  placeholder = '',
  type = 'text',
  onChange,
  error
}) => {
  const inputId = label.replace(/\s+/g, '-').toLowerCase();

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{5,}$/;
    return passwordPattern.test(password);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { value } = event.target;
    let validationError = {
      isValid: true,
      message: ''
    };

   if (!value.trim()) {
    return onChange({ value, error: validationError });
  }

  if (type === 'email' && !validateEmail(value)) {
    validationError = {
      isValid: false,
      message: 'Invalid email format (example@mail.com).'
    };
  } else if (type === 'password' && !validatePassword(value)) {
    validationError = {
      isValid: false,
      message:
        'Invalid password format (The password must contain at least one uppercase alphabetical character, one figure and must be at least 5 characters in length).'
    };
  }

    onChange({ value, error: validationError });
  };

  return (
    <>
      {label && <label htmlFor={inputId}>{label}</label>}
      <InputStyles
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        error={error.isValid} 
      />
      {!error.isValid && <ErrorStyles>{error.message}</ErrorStyles>}
    </>
  );
};

export default InputMain;

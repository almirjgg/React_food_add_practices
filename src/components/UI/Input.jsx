import { InputComponent } from './Input.styled';
import { forwardRef } from 'react';

const Input = forwardRef(({ input, label }, ref) => {
  return (
    <>
      <InputComponent>
        <label htmlFor={input.id}>{label}</label>
        <input {...input} ref={ref} />
      </InputComponent>
    </>
  );
});

export default Input;

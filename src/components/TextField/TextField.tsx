import {
  ChangeEventHandler, InputHTMLAttributes, useRef,
} from 'react';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement>
  & {
    label?: string;
  }

export default function TextField({
  id = '',
  label = '',
  type = 'text',
  value,
  onChange,
  ...props
}: TextFieldProps) {
  const inputRef = useRef(id || `input-id-${Math.random()}`);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event);
  };

  return (
    <>
      <label htmlFor={inputRef.current}>{label}</label>
      <input
        id={inputRef.current}
        type={type}
        value={value}
        onChange={handleInputChange}
        {...props}
      />
    </>
  );
}

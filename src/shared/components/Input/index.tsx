import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  id?: string;
}

export default function Input({
  placeholder = '', value = '', onChange, type = 'text', id,
}: InputProps) {
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value);
    }
  }
  return (
    <input
      className={styles.Input}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      type={type}
      id={id}
    />
  );
}

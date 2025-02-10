'use client';

import { useFormContext } from 'react-hook-form';
import styles from './styles.module.css';

interface InputProps {
  label: string;
  type: string;
  name: string;
}

export const Input = ({ label, type, name }: InputProps) => {
  // const { register } = useFormContext();
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        // {...register(name)}
      />
    </div>
  );
};

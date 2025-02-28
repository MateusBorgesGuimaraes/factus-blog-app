import React from 'react';
import styles from './styles.module.css';

export interface SelectProps {
  name: string;
  options: string[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ name, options, value, onChange }: SelectProps) => {
  return (
    <div className={styles.selectContainer}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.selectElement}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

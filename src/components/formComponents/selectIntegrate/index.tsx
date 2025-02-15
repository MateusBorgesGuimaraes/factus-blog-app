import styles from '../select/styles.module.css';
import { useFormContext } from 'react-hook-form';

interface SelectIntegrateProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

export const SelectIntegrate = ({
  label,
  name,
  options,
  required = false,
}: SelectIntegrateProps) => {
  const { register } = useFormContext();

  return (
    <select
      className={styles.select}
      {...register(name, { required: required })}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option className={styles.decorated} key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

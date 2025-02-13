import styles from './styles.module.css';

interface SelectProps {
  label: string;
  name: string;
  options: string[];
}

export const Select = ({ label, name, options }: SelectProps) => {
  return (
    <select name={name} className={styles.select}>
      <option value="">{label}</option>
      {options.map((option) => (
        <option className={styles.decorated} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

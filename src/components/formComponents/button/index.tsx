import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  borderRadius?: string;
}

export const Button = ({ children, borderRadius }: ButtonProps) => {
  return (
    <button style={{ borderRadius }} type="submit" className={styles.button}>
      {children}
    </button>
  );
};

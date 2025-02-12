import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  borderRadius?: string;
}

export const Button = ({ children, borderRadius }: ButtonProps) => {
  return (
    <button style={{ borderRadius }} className={styles.button}>
      {children}
    </button>
  );
};

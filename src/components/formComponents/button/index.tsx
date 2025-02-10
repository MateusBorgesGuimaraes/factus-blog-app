import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};

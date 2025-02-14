import styles from './styles.module.css';

interface ErrorFormProsp {
  error: string | undefined;
}

export const ErrorForm = ({ error }: ErrorFormProsp) => {
  return <p className={styles.error}>{error}</p>;
};

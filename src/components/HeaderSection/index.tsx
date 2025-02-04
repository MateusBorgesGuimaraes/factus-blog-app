import styles from './styles.module.css';

type HeadeSectionProps = {
  title: string;
  description: string;
};

export const HeaderSection = ({ title, description }: HeadeSectionProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

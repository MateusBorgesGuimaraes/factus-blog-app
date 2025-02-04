import styles from './styles.module.css';

export const PostSubInfos = () => {
  return (
    <div className={styles.subInfos}>
      <p className={styles.date}>07 Jun 2024</p>
      <span className={styles.dec}></span>
      <p className={styles.readTime}>12 min read</p>
    </div>
  );
};

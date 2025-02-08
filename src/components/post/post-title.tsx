import Link from 'next/link';
import styles from './styles.module.css';

export const PostTile = () => {
  return (
    <h2 className={styles.title}>
      <Link href={'/post/2'}>
        Olhos no Infinito: O Telescópio que Vai Revelar os Segredos do Cosmos
      </Link>
    </h2>
  );
};

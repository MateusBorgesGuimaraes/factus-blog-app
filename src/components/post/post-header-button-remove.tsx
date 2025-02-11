import Image from 'next/image';
import styles from './styles.module.css';

export const PostHeaderButtonRemove = () => {
  return (
    <>
      <button className={styles.delete}>
        <Image
          src="/icons/exclude-post-icon.svg"
          alt=" Delete Post"
          width={12}
          height={12}
        />
      </button>
    </>
  );
};

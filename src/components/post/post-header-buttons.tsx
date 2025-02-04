import Image from 'next/image';
import styles from './styles.module.css';

export const PostHeaderButtons = () => {
  return (
    <>
      <button className={styles.edit}>
        <Image
          src="/icons/edit-post-icon.svg"
          alt="Edit Post"
          width={12}
          height={12}
        />
      </button>
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

import Image from 'next/image';
import styles from './styles.module.css';

export const PostHeaderButtonEdit = () => {
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
    </>
  );
};

import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

export const PostHeaderButtonEdit = () => {
  return (
    <>
      <Link className={styles.edit} href={'/perfil/editar-post/1'}>
        <Image
          src="/icons/edit-post-icon.svg"
          alt="Edit Post"
          width={12}
          height={12}
        />
      </Link>
    </>
  );
};

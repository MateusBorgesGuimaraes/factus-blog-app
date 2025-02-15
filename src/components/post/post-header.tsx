import Image from 'next/image';
import styles from './styles.module.css';
import { PostHeaderButtons } from './post-header-buttons';
import formatLink from '@/functions/formatLink';

type PostHeaderProps = {
  children?: React.ReactNode;
  category: string;
  image: string;
};

export const PostHeader = ({ children, category, image }: PostHeaderProps) => {
  return (
    <div className={styles.postHeader}>
      <span className={styles.tag}>{category}</span>
      {children}
      <div className={styles.postImage}>
        <Image
          src={formatLink('posts/cover', image)}
          alt=""
          width={460}
          height={230}
        />
      </div>
    </div>
  );
};

PostHeader.Buttons = PostHeaderButtons;

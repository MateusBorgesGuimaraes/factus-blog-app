import Image from 'next/image';
import styles from './styles.module.css';
import { PostHeaderButtons } from './post-header-buttons';

type PostHeaderProps = {
  children?: React.ReactNode;
};

export const PostHeader = ({ children }: PostHeaderProps) => {
  return (
    <div className={styles.postHeader}>
      <span className={styles.tag}>ciencia</span>
      {children}
      <div className={styles.postImage}>
        <Image src="/images/news-test1.jpg" alt="" width={460} height={230} />
      </div>
    </div>
  );
};

PostHeader.Buttons = PostHeaderButtons;

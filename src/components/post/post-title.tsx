import Link from 'next/link';
import styles from './styles.module.css';

interface PostTitleProps {
  title: string;
  postID: number;
}

export const PostTile = ({ title, postID }: PostTitleProps) => {
  return (
    <h2 className={styles.title}>
      <Link href={`/post/${postID}`}>{title}</Link>
    </h2>
  );
};

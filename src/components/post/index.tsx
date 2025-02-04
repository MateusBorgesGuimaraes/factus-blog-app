import Image from 'next/image';
import styles from './styles.module.css';
import { Profile } from '../Profile';
import { PostHeader } from './post-header';
import { PostSubInfos } from './post-subinfos';
import { PostTile } from './post-title';
import { PostDescription } from './post-description';
import { PostAuthor } from './post-author';

type PostProps = {
  children: React.ReactNode;
};

export const Post = ({ children }: PostProps) => {
  return <div className={styles.postContainer}>{children}</div>;
};

Post.Header = PostHeader;
Post.Subinfos = PostSubInfos;
Post.Title = PostTile;
Post.Description = PostDescription;
Post.Author = PostAuthor;

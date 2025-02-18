import { PostResponse } from '@/types/post';
import styles from './styles.module.css';
import Link from 'next/link';

interface SearchResultProps {
  posts: PostResponse[];
  onClick: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchResult = ({ posts, onClick }: SearchResultProps) => {
  return (
    <ul className={styles.resultContainer}>
      {posts.map((post) => (
        <li onClick={() => onClick('')} key={post.id}>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

import styles from './styles.module.css';
import { Profile } from '../Profile';

export type PostAuthorProps = {
  name: string;
  imageUrl: string;
};

export const PostAuthor = ({ name, imageUrl }: PostAuthorProps) => {
  return (
    <div className={styles.profileContainer}>
      <Profile name={name} imageUrl={imageUrl} />
    </div>
  );
};

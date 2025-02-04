import styles from './styles.module.css';
import { Profile } from '../Profile';

export const PostAuthor = () => {
  return (
    <div className={styles.profileContainer}>
      <Profile />
    </div>
  );
};

import cutText from '@/functions/cutText';
import styles from './styles.module.css';

interface PostDescriptionProps {
  text: string;
}

export const PostDescription = ({ text }: PostDescriptionProps) => {
  return <p className={styles.description}>{cutText(text, 170)}</p>;
};

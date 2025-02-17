import extractPlainText from '@/functions/extractPlainText';
import formatDate from '@/functions/formatDate';
import styles from './styles.module.css';
import calculateReadingTime from '@/functions/calculateReadingTime';

interface PostSubInfosProps {
  date: string | Date;
  text: string;
}

export const PostSubInfos = ({ date, text }: PostSubInfosProps) => {
  return (
    <div className={styles.subInfos}>
      <p className={styles.date}>{formatDate(date)}</p>
      <span className={styles.dec}></span>
      <p className={styles.readTime}>
        {calculateReadingTime(extractPlainText(text))} min read
      </p>
    </div>
  );
};

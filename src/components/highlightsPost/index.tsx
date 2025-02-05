import Image from 'next/image';
import styles from './styles.module.css';
import { Profile } from '../Profile';

export const HighlightsPost = () => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postImage}>
        <Image
          src="/images/news-test2.jpg"
          alt="news"
          width={460}
          height={230}
        />
      </div>

      <div className={styles.post}>
        <Profile />

        <div className={styles.postInfos}>
          <h3 className={styles.postTitle}>
            A Revolução da Inteligência Artificial: Tecnologia que Redefine o
            Futuro
          </h3>

          <p className={styles.postDescription}>
            A inteligência artificial está transformando o mundo como o
            conhecemos, impactando desde a forma como trabalhamos até co...
          </p>
        </div>
        <div className={styles.postSubInfos}>
          <p>09 Jun 2024</p>
          <span className={styles.dec}></span>
          <p>10 min read</p>
        </div>
      </div>
    </div>
  );
};

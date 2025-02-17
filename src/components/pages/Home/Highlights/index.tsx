import { HeaderSection } from '@/components/HeaderSection';
import styles from './styles.module.css';
import { HighlightsPost } from '@/components/highlightsPost';

export const Highlights = () => {
  return (
    <section>
      <HeaderSection
        title="Destaques"
        description="Não sabe por onde começar? aqui estão alguns dos posts que consideramos os mais relevantes dos últimos dias:"
      />

      <div className={styles.postsHighlights}>
        <HighlightsPost id="25" />
        <HighlightsPost id="20" />
      </div>
    </section>
  );
};

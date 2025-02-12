'use client';

import { Input } from '@/components/formComponents/input';
import styles from './styles.module.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/formComponents/button';

const Editor = dynamic(() => import('../../../Editor/Editor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export const CriarPost = () => {
  return (
    <section className={styles.criarPostsContainer}>
      <h1 className={styles.title}>Criar Post</h1>
      <form className={styles.formContainer} action="">
        <Input label="Titulo" name="titulo" type="text" />
        <Input label="Autor" name="autor" type="text" />
        <div className={styles.editorContainer}>
          <Editor />
        </div>
        <div className={styles.buttonContainer}>
          <Button borderRadius={'8px'}>Salvar</Button>
        </div>
      </form>
    </section>
  );
};

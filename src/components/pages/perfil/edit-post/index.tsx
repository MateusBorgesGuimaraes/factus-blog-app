'use client';

import { Input } from '@/components/formComponents/input';
import styles from '../criar-post/styles.module.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/formComponents/button';
import { Select } from '@/components/formComponents/select';

const Editor = dynamic(() => import('../../../Editor/Editor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

enum categories {
  LIVROS = 'livros',
  FICCAO = 'ficcao',
  HISTORIA = 'história',
  TECNOLOGIA = 'tecnologia',
  CIENCIA = 'ciencia',
  POLITICA = 'politica',
}

export const EditarPost = () => {
  return (
    <section className={styles.criarPostsContainer}>
      <h1 className={styles.title}>Editar Post</h1>
      <form className={styles.formContainer} action="">
        <Input label="Titulo" name="titulo" type="text" />
        <Input label="Autor" name="autor" type="text" />
        <Select
          label="Categoria"
          name="categoria"
          options={Object.values(categories)}
        />
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

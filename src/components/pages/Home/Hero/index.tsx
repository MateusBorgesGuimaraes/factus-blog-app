'use client';

import ramdomCuriosity from '@/functions/randomCuriosity';
import styles from './styles.module.css';
import React from 'react';

export const Hero = () => {
  const [curiosity, setCuriosity] = React.useState<string[]>([]);

  React.useEffect(() => {
    setCuriosity(ramdomCuriosity());
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={`${styles.content} subContainer`}>
        <div className={styles.titleContainer}>
          <h1>
            Equipe <br /> Factus <br /> Blog <br /> Website
          </h1>
        </div>
        <div className={styles.randomCuriosity}>
          {curiosity.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={styles.descriptionContainer}>
          <p>
            &ldquo;Bem-vindo ao nosso blog, um espaço dedicado a compartilhar
            ideias, explorar o universo da tecnologia, expandir horizontes com
            conhecimento e ciência, mergulhar no entretenimento, apreciar a
            leitura, refletir sobre filosofia e debater os caminhos da política.
            Aqui, cada post é um convite para descobrir, aprender e se inspirar.
            Prepare-se para uma jornada de pensamentos e histórias que conectam
            curiosidade e criatividade!&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { Post } from '@/components/post';
import { PostHeader } from '@/components/post/post-header';
import React from 'react';

export const PostContentPage = () => {
  const [content, setContent] = React.useState('');

  const handleContentChange = (value: string) => {
    setContent(value);
    console.log(value);
  };
  return (
    <section className={styles.postContainer}>
      <div className={styles.postImage}>
        <Image src="/images/news-test1.jpg" alt="" width={1904} height={640} />
      </div>

      <div className={styles.post}>
        <div className={styles.col1}>
          <div className={styles.guideContainer}>
            <div className={styles.guide}>
              <p>Inicio</p>
              <span>
                <Image
                  src="/icons/pages-arrow-icon.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </span>
              <p>Ciência</p>
            </div>
            <button className={styles.favorite2}>
              <Image
                src="/icons/favorite-post-icon.svg"
                alt=""
                width={32}
                height={32}
              />
            </button>
          </div>
          <div className={styles.postInfos}>
            <h1 className={styles.postTitle}>
              A Revolução da Inteligência Artificial: Tecnologia que Redefine o
              Futuro
            </h1>
            <p className={styles.postContent}>
              A inteligência artificial está transformando o mundo como o
              conhecemos, impactando desde a forma como trabalhamos até como
              vivemos. A revolução da inteligência artificial vem se tornando
              uma verdadeira revolução na era digital, permitindo a criação de
              sistemas inteligentes que podem entender e responder aos nossos
              desejos. Nesta postagem, vamos explorar a revolução da
              inteligência artificial e como ela pode transformar o nosso
              futuro.
            </p>
          </div>
        </div>

        <div className={styles.col2}>
          <button className={styles.favorite}>
            <Image
              src="/icons/favorite-post-icon.svg"
              alt=""
              width={32}
              height={32}
            />
          </button>
          <div className={styles.relatedPostsContainer}>
            <h2 className={styles.subTitle}>Parecidas com:</h2>
            <div className={styles.relatedPosts}>
              <Post>
                <PostHeader />
                <Post.Subinfos />
                <Post.Title />
              </Post>

              <Post>
                <PostHeader />
                <Post.Subinfos />
                <Post.Title />
              </Post>

              <Post>
                <PostHeader />
                <Post.Subinfos />
                <Post.Title />
              </Post>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

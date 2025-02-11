'use client';

import { Post } from '@/components/post';
import styles from '../posts-salvos/styles.module.css';
import { Pagination } from '@/components/Pagination';

export const MeusPost = () => {
  return (
    <section className={styles.postsSalvosContainer}>
      <h1 className={styles.title}>Meus Posts</h1>
      <div className={styles.posts}>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>
            <Post.Header.Buttons.ButtonRemove />
            <Post.Header.Buttons.ButttonEdit />
          </Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
      </div>
      <Pagination actualPage={1} totalPages={10} handlePageChange={() => {}} />
    </section>
  );
};

'use client';

import { Post } from '@/components/post';
import styles from '../posts-salvos/styles.module.css';
import extractPlainText from '@/functions/extractPlainText';
import { useUserStore } from '@/store/user-store';
import { useEffect } from 'react';
import { UserService } from '@/services/user-service';

export const MeusPost = () => {
  const { user, setBloggerPosts } = useUserStore();

  useEffect(() => {
    if (!user?.bloggerPosts?.data) {
      async function fetchPosts() {
        const posts = await UserService.getAuthorPosts();
        setBloggerPosts(posts);
      }
      fetchPosts();
    }
  }, [user]);

  function handleRemovePost(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section className={styles.postsSalvosContainer}>
      <h1 className={styles.title}>Meus Posts</h1>
      <div className={styles.posts}>
        {user?.bloggerPosts?.data.length !== undefined &&
          user?.bloggerPosts?.data.length > 0 &&
          user.bloggerPosts.data.map((post) => (
            <Post key={post.id}>
              <Post.Header category={post.category} image={post.coverImage}>
                <Post.Header.Buttons.ButtonRemove
                  onClick={() => handleRemovePost(String(post.id))}
                />
              </Post.Header>
              <Post.Subinfos date={post.createdAt} text={post.content} />
              <Post.Title postID={post.id} title={post.title} />
              <Post.Description text={extractPlainText(post.content)} />
              <Post.Author
                name={post.author.name}
                imageUrl={post.author.profilePicture}
              />
            </Post>
          ))}
      </div>
    </section>
  );
};

'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { Post } from '@/components/post';
import { PostHeader } from '@/components/post/post-header';
import React from 'react';
import { PostResponse } from '@/types/post';
import { PostService } from '@/services/post-service';
import formatLink from '@/functions/formatLink';
import { PostViewer } from '@/components/PostViewer';

interface PostProps {
  id: string;
}

export const PostContentPage = ({ id }: PostProps) => {
  const [content, setContent] = React.useState<PostResponse | null>(null);
  const [releatedPosts, setReleatedPosts] = React.useState<PostResponse[]>([]);

  React.useEffect(() => {
    async function fetchContent() {
      try {
        const response = await PostService.getPostById(id);
        setContent(response);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    }
    if (id) fetchContent();
  }, [id]);

  React.useEffect(() => {
    async function fetchReleatedPosts() {
      try {
        const response = await PostService.getPostsReleated(id);
        setReleatedPosts(response);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    }
    if (id) fetchReleatedPosts();
  }, [id]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.postContainer}>
      <div className={styles.postImage}>
        <Image
          src={formatLink('posts/cover', content?.coverImage)}
          alt=""
          width={1904}
          height={640}
        />
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
              <p>{content?.category}</p>
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
            <h1 className={styles.postTitle}>{content?.title}</h1>
            <div className={styles.postContent}>
              <PostViewer
                data={content?.content ? JSON.parse(content.content) : null}
              />
            </div>
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
              {releatedPosts.map((post) => (
                <Post key={post.id}>
                  <PostHeader
                    category={post.category}
                    image={post.coverImage}
                  />
                  <Post.Subinfos date={post.createdAt} text={post.content} />
                  <Post.Title postID={post.id} title={post.title} />
                </Post>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

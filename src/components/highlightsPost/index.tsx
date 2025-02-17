'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { Profile } from '../Profile';
import { PostResponse } from '@/types/post';
import { useEffect, useState } from 'react';
import { PostService } from '@/services/post-service';
import formatLink from '@/functions/formatLink';
import extractPlainText from '@/functions/extractPlainText';
import cutText from '@/functions/cutText';
import formatDate from '@/functions/formatDate';
import calculateReadingTime from '@/functions/calculateReadingTime';
import Link from 'next/link';

interface HighlightsPostProps {
  id: string;
}

export const HighlightsPost = ({ id }: HighlightsPostProps) => {
  const [post, setPost] = useState<PostResponse | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await PostService.getPostById(id);
        setPost(response);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    }
    if (id) fetchContent();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.postContainer}>
      <div className={styles.postImage}>
        <Image
          src={formatLink('posts/cover', post.coverImage)}
          alt="news"
          width={460}
          height={230}
        />
      </div>

      <div className={styles.post}>
        <Profile
          name={post.author.name}
          imageUrl={post.author.profilePicture}
        />

        <div className={styles.postInfos}>
          <Link href={`/post/${id}`} className={styles.postLink}>
            <h3 className={styles.postTitle}>{post.title}</h3>
          </Link>

          <p className={styles.postDescription}>
            {cutText(extractPlainText(post.content), 170)}
          </p>
        </div>
        <div className={styles.postSubInfos}>
          <p>{formatDate(post.createdAt)}</p>
          <span className={styles.dec}></span>
          <p>{calculateReadingTime(extractPlainText(post.content))} min read</p>
        </div>
      </div>
    </div>
  );
};

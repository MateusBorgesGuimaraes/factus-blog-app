'use client';

import { HeaderSection } from '@/components/HeaderSection';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { Filter } from '@/components/Filter';
import { Post } from '@/components/post';
import { Pagination } from '@/components/Pagination';

interface Post {
  id: number;
  title: string;
  category: string;
}

export const PostsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('ciencia');
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const samplePosts = [
        { id: 1, title: 'Post 1', category: 'tecnologia' },
        { id: 2, title: 'Post 2', category: 'ciencia' },
      ];
      setPosts(samplePosts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filterPosts = () => {
      if (selectedCategory === 'all') {
        setFilteredPosts(posts);
      } else {
        const filtered = posts.filter(
          (post) => post.category === selectedCategory,
        );
        setFilteredPosts(filtered);
      }
    };

    filterPosts();
  }, [selectedCategory, posts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className={styles.postsContainer}>
      <HeaderSection
        title="Posts"
        description="Aqui compartilharemos as nossas experiências e opiniões sobre os mais diversos assuntos."
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <div className={styles.posts}>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
          <Post.Subinfos />
          <Post.Title />
          <Post.Description />
          <Post.Author />
        </Post>
        <Post>
          <Post.Header>{/* <Post.Header.Buttons /> */}</Post.Header>
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

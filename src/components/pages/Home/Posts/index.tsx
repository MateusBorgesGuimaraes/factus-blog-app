'use client';

import { HeaderSection } from '@/components/HeaderSection';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { Filter } from '@/components/Filter';
import { Post } from '@/components/post';
import { Pagination } from '@/components/Pagination';
import { PostResponse, PostsFetchResponse } from '@/types/post';
import { PostService } from '@/services/post-service';

interface Post {
  id: number;
  title: string;
  category: string;
}

export const PostsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState<PostsFetchResponse | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<PostResponse[]>([]);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostService.getPostsWithPagination(1, 8);
        const validResponse = Array.isArray(response) ? response[0] : response;

        setPosts(validResponse);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [actualPage]);

  useEffect(() => {
    if (!posts) return;

    const filterPosts = () => {
      if (selectedCategory === 'all') {
        setFilteredPosts(posts.data);
      } else {
        const filtered = posts.data.filter(
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
        {filteredPosts.map((post) => (
          <Post key={post.id}>
            <Post.Header category={post.category} image={post.coverImage} />
            <Post.Subinfos />
            <Post.Title postID={post.id} title={post.title} />
            <Post.Description />
            <Post.Author
              name={post.author.name}
              imageUrl={post.author.profilePicture}
            />
          </Post>
        ))}
      </div>

      <Pagination actualPage={1} totalPages={10} handlePageChange={() => {}} />
    </section>
  );
};

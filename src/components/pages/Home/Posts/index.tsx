'use client';

import { HeaderSection } from '@/components/HeaderSection';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { Filter } from '@/components/Filter';
import { Post } from '@/components/post';
import { Pagination } from '@/components/Pagination';
import { PostsFetchResponse } from '@/types/post';
import { PostService } from '@/services/post-service';
import extractPlainText from '@/functions/extractPlainText';
import { usePostsStore } from '@/store/post-store';

export const PostsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [postsResponse, setPostsResponse] = useState<PostsFetchResponse | null>(
    null,
  );
  const [actualPage, setActualPage] = useState(1);

  const { postsCache, setPostsCache } = usePostsStore();
  const limit = 8;

  const cacheKey = `${selectedCategory}_${actualPage}_${sortOrder}`;

  useEffect(() => {
    const fetchPosts = async () => {
      if (postsCache[cacheKey]) {
        setPostsResponse(postsCache[cacheKey]);
        return;
      }
      try {
        const response = await PostService.getPostsWithPagination(
          actualPage,
          limit,
          selectedCategory,
          sortOrder,
        );
        const validResponse = Array.isArray(response) ? response[0] : response;
        setPostsResponse(validResponse);
        setPostsCache(cacheKey, validResponse);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [
    selectedCategory,
    actualPage,
    sortOrder,
    cacheKey,
    postsCache,
    setPostsCache,
  ]);

  const handleCategoryChange = (category: string) => {
    setActualPage(1); // reset to page 1 when category changes
    setSelectedCategory(category);
  };

  const handleSortChange = (order: 'desc' | 'asc') => {
    setActualPage(1); // reset to page 1 when sort order changes
    setSortOrder(order);
  };

  const handlePageChange = (page: number) => {
    setActualPage(page);
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
        onSortChange={handleSortChange}
        selectedSort={sortOrder}
      />
      <div className={styles.posts}>
        {postsResponse?.data.map((post) => (
          <Post key={post.id}>
            <Post.Header category={post.category} image={post.coverImage} />
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

      {postsResponse && (
        <Pagination
          actualPage={actualPage}
          totalPages={postsResponse.meta.lastPage}
          handlePageChange={handlePageChange}
        />
      )}
    </section>
  );
};

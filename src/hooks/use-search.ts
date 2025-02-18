'use client';

import { PostsFetchResponse } from '@/types/post';
import React from 'react';

interface SearchProps {
  category?: string;
  order?: 'desc' | 'asc';
  searchFunction: (
    page: number,
    limit: number,
    category?: string,
    order?: 'desc' | 'asc',
    search?: string,
  ) => Promise<PostsFetchResponse>;
  page?: number;
  limit?: number;
}

export const useSearch = ({
  searchFunction,
  category,
  page = 1,
  limit = 4,
  order = 'desc',
}: SearchProps) => {
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(
    category || '',
  );
  const [result, setResult] = React.useState<PostsFetchResponse | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const debounceTimer = React.useRef<NodeJS.Timeout | null>(null);

  const fetchPosts = React.useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (search.length >= 3 || selectedCategory) {
        const results = await searchFunction(
          page,
          limit,
          selectedCategory || undefined,
          order,
          search || undefined,
        );
        setResult(results);
      } else {
        setResult(null);
      }
    } catch (error) {
      setError('Ocorreu um erro ao buscar os posts');
    } finally {
      setLoading(false);
    }
  }, [search, selectedCategory, searchFunction, page, limit, order]);

  React.useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      fetchPosts();
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [fetchPosts]);

  return {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    result,
    loading,
    error,
  };
};

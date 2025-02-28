import { useState, useCallback } from 'react';

interface UseApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  execute: (...args: any[]) => Promise<T>;
}

export function useApi<T>(
  apiFunc: (...args: any[]) => Promise<T>,
): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (...args: any[]) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunc(...args);
        setData(result);
        return result;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'An error occurred';
        setError(message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [apiFunc],
  );

  return { data, error, loading, execute };
}

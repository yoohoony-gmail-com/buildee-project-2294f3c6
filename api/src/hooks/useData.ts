import { useState, useEffect } from 'react';
import apiFetch, { ApiError } from '../api/client';

interface UseDataReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export function useData<T>(endpoint: string | null): UseDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (endpoint === null) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await apiFetch<T>(endpoint);
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          if (err instanceof ApiError) {
            setError(`API Error: ${err.message} (status: ${err.status})`);
          } else if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, isLoading, error };
}
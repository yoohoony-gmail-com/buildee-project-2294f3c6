import { useData } from './useData';
import type { Portfolio } from '../types';

export function usePortfolio(slug: string | undefined) {
  // Only fetch if slug is available
  const endpoint = slug ? `/portfolio/${slug}` : null;
  return useData<Portfolio>(endpoint);
}
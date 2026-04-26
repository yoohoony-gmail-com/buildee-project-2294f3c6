import { useData } from './useData';
import type { PortfolioStats } from '../types';

export function usePortfolioStats() {
  return useData<PortfolioStats>('/stats');
}
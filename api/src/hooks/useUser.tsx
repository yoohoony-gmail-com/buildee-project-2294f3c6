import { useData } from './useData';
import type { User } from '../types';

export function useUser() {
  return useData<User>('/user');
}
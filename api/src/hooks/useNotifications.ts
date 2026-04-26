import { useData } from './useData';
import type { Notification } from '../types';

export function useNotifications() {
  return useData<Notification[]>('/notifications');
}
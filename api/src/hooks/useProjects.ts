import { useData } from './useData';
import type { Project } from '../types';

export function useProjects() {
  return useData<Project[]>('/projects');
}
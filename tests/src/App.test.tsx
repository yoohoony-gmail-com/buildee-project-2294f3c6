import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';
import useSeasons from './hooks/useSeasons';
import { type Season } from './types';

// Mock the useSeasons hook to control its output in tests without making real API calls.
vi.mock('./hooks/useSeasons');

const mockSeasons: Season[] = [
  {
    id: 'spring',
    name: '봄',
    photos: [
      { id: '1', url: '/photos/spring-1.jpg', description: '벚꽃' },
      { id: '2', url: '/photos/spring-2.jpg', description: '개나리' },
    ],
  },
  {
    id: 'summer',
    name: '여름',
    photos: [
      { id: '3', url: '/photos/summer-1.jpg', description: '해변' },
    ],
  },
];

describe('App component integration test', () => {
  it('renders all main sections of the page on successful data load', async () => {
    // Configure the mock to return a successful state with data.
    (useSeasons as vi.Mock).mockReturnValue({
      seasons: mockSeasons,
      isLoading: false,
      error: null,
    });

    render(<App />);

    // Check for Header content
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Site')).toBeInTheDocument();

    // Check for Hero content
    expect(screen.getByRole('heading', { level: 1, name: /안녕하세요/i })).toBeInTheDocument();

    // Check for Portfolio section content
    expect(screen.getByRole('heading', { level: 2, name: '포트폴리오' })).toBeInTheDocument();
    
    // Check that season titles are rendered
    expect(screen.getByRole('heading', { level: 3, name: '봄' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: '여름' })).toBeInTheDocument();

    // Check that photos are rendered (by their descriptions, which are used as alt text)
    expect(await screen.findByAltText('벚꽃')).toBeInTheDocument();
    expect(await screen.findByAltText('해변')).toBeInTheDocument();

    // Check for Footer content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/© 2024 Site. All rights reserved./i)).toBeInTheDocument();
  });

  it('displays loading state initially', () => {
    // Configure the mock to return a loading state.
    (useSeasons as vi.Mock).mockReturnValue({
      seasons: [],
      isLoading: true,
      error: null,
    });

    render(<App />);

    expect(screen.getByText('포트폴리오를 불러오는 중...')).toBeInTheDocument();
  });

  it('displays error state if data fetching fails', () => {
    // Configure the mock to return an error state.
    (useSeasons as vi.Mock).mockReturnValue({
      seasons: [],
      isLoading: false,
      error: new Error('Failed to fetch'),
    });

    render(<App />);

    expect(screen.getByText('데이터를 불러오는 데 실패했습니다.')).toBeInTheDocument();
  });
});
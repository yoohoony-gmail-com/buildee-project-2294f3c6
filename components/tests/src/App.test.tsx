import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('renders all main sections', () => {
    render(<App />);
    // Check for Header
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: /Site/i })).toBeInTheDocument();

    // Check for Main content
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /About Me/i })).toBeInTheDocument();

    // Check for Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/© 2024 Site. All rights reserved./i)).toBeInTheDocument();
  });

  it('renders the main heading and subheading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Site/i })).toBeInTheDocument();
    expect(screen.getByText('개인 포트폴리오 홈페이지')).toBeInTheDocument();
  });

  it('initializes likes count to 0', () => {
    render(<App />);
    const likesCount = screen.getByTestId('likes-count');
    expect(likesCount).toHaveTextContent('0');
  });

  it('increments likes count when the button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /추천하기/i });
    const likesCount = screen.getByTestId('likes-count');

    fireEvent.click(button);
    expect(likesCount).toHaveTextContent('1');

    fireEvent.click(button);
    expect(likesCount).toHaveTextContent('2');
  });
});
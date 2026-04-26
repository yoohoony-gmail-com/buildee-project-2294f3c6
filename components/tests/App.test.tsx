import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('App Component Routing', () => {
  it('renders HomePage on the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /창의적인 포트폴리오로/i })).toBeInTheDocument();
  });

  it('renders DashboardPage on the /dashboard path', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByRole('heading', { name: /내 포트폴리오 대시보드/i })).toBeInTheDocument();
  });

  it('renders SettingsPage on the /settings path', async () => {
    render(
      <MemoryRouter initialEntries={['/settings']}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByRole('heading', { name: /계정 설정/i })).toBeInTheDocument();
  });
});
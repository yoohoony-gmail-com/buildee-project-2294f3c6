import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  // Helper function to render components that use react-router features.
  const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    return render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      ),
    });
  };

  it('should render the site name', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Site')).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Dashboard' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Settings' })).toBeInTheDocument();
  });

  it('should have the site name link to the homepage', () => {
    renderWithRouter(<Header />);
    const siteNameLink = screen.getByText('Site');
    // The text is inside the NavLink (which renders an <a> tag).
    expect(siteNameLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('should have the "Home" link to the homepage', () => {
    renderWithRouter(<Header />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should have the "Dashboard" link to the dashboard page', () => {
    renderWithRouter(<Header />);
    const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');
  });

  it('should have the "Settings" link to the settings page', () => {
    renderWithRouter(<Header />);
    const settingsLink = screen.getByRole('link', { name: 'Settings' });
    expect(settingsLink).toHaveAttribute('href', '/settings');
  });

  it('should apply active styles to the active NavLink', () => {
    renderWithRouter(<Header />, { route: '/' });
    const homeLink = screen.getByRole('link', { name: 'Home' });
    // The active class is `text-cyan-400` as defined in Header.tsx
    expect(homeLink).toHaveClass('text-cyan-400');
    expect(homeLink).not.toHaveClass('text-gray-300');
  });

  it('should not apply active styles to inactive NavLink', () => {
    renderWithRouter(<Header />, { route: '/some-other-page' });
    const homeLink = screen.getByRole('link', { name: 'Home' });
    // The inactive class is `text-gray-300`
    expect(homeLink).not.toHaveClass('text-cyan-400');
    expect(homeLink).toHaveClass('text-gray-300');
  });
});

import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/dashboard', text: 'Dashboard' },
  { to: '/settings', text: 'Settings' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <NavLink to="/" className="gradient-text font-bold text-lg">Site</NavLink>
        <div className="flex items-center gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? 'text-white font-semibold border-b-2 border-accent-blue'
                    : 'text-warm-400 hover:text-white'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-warm-800/50 py-16 px-6 bg-warm-950">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="col-span-2 md:col-span-2">
          <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
          <p className="text-warm-500 text-sm leading-relaxed mt-3 max-w-sm">Building the future, one pixel at a time.</p>
        </div>
        <div>
          <h4 className="font-semibold text-warm-300 mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-warm-500">
            <li><Link to="/" className="hover:text-accent-blue transition-colors">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-accent-blue transition-colors">Dashboard</Link></li>
            <li><Link to="/settings" className="hover:text-accent-blue transition-colors">Settings</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-warm-800/50 text-center text-warm-600 text-sm">
        © 2026 Site. All rights reserved.
      </div>
    </footer>
  );
}

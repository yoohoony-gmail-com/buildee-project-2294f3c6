import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/">Site</NavLink>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-cyan-400' : 'text-gray-300'
          }
        >
          홈
        </NavLink>
        <NavLink
          to="/#portfolio"
          className={({ isActive }) =>
            isActive ? 'text-cyan-400' : 'text-gray-300'
          }
        >
          포트폴리오
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
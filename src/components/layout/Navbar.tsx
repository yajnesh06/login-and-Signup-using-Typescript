import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
        <h1>Better</h1>
      </Link>
      <div className="nav-buttons">
        <Link to="/login" className="nav-button secondary">
          Login
        </Link>
        <Link to="/signup" className="nav-button primary">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
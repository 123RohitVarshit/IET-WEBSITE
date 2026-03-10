import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo-container">
        <img src="/iet-logo.png" alt="IET Logo" className="iet-logo-img" />
      </div>
      <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
        <li><a href="#events" onClick={closeMenu}>Events</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
      {menuOpen && <div className="nav-overlay overlay-visible" onClick={closeMenu}></div>}
      <div className="nav-right">
        <a href="#contact" className="nav-cta">Join Now</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleNavToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        id="nav-trigger"
        className={`nav-trigger ${isMenuOpen ? 'close' : 'open'}`}
        onClick={handleNavToggle}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <nav id="nav" className={`${isMenuOpen ? 'in' : 'out'}`}>
        <ul>
          <li>
            <span className="nav-label">Home</span>
          </li>
          <li>
            <span className="nav-label">About</span>
          </li>
          <li>
            <span className="nav-label">Work</span>
          </li>
          <li>
            <span className="nav-label">Blog</span>
          </li>
          <li>
            <span className="nav-label">Contact</span>
          </li>
        </ul>
      </nav>
        <section id="header" className="header">
          <h1 id="heading">Full Screen Nav</h1>
        </section>
    </>
  );
}

export default Header;

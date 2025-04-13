import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo-wrapper">
        <div className="logo"></div>
        <div className="text">
          <p>Postolache</p>
          <p>David's</p>
          <p>Portfolio</p>
        </div>
      </div>

      {/* HAMBURGER ICON (MOBILE ONLY) */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

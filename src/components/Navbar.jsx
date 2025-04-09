const Navbar = () => {
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
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import "./header.scss";
function Header() {
  return (
    <header className="header">
      <ul className="header__menu">
        <li className="header__menu-item s">
          <a href="/" className="header__menu-link">
            Home
          </a>
        </li>
        <li className="header__menu-item">
          <a href="/" className="header__menu-link">
            About
          </a>
        </li>

        <li className="header__menu-item">
          <a href="/" className="header__menu-link">
            Projects
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

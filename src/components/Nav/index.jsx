import React from 'react';

const NavBar = () => {

  const navItems = ['Home', 'About', 'Projects', 'Contact'];
  return (
    <nav className="menu">
      <h3 className="menu__logo">
        <a href="#Home">Vlady.dev</a>
        </h3>
      <ul className="menu__list">
        {navItems.map((item, i) => (
          <li key={i} className="menu__link">
            <a key={i} href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
import React, { useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navItems = ['Home', 'About', 'Projects', 'Contact'];
  const toogleOpen = () =>{
    setOpen(!open)
  }
  return (
    <>
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
          <li onClick={toogleOpen} className='mobile-link'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-menu"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg></li>
        </ul>
      </nav>

      <div className={`mobile-nav ${open ? "open-menu" : "closed-menu"}`}>
        <span onClick={toogleOpen} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x">
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <ul>
          {navItems.map((item, i) => (
            <li key={i} onClick={toogleOpen} >
              <a key={i} href={`#${item}`}>{item} </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default NavBar;

import React, { useEffect, useRef } from 'react';
import '../../App.css';




const Header = () => {

  return (
    <header id='Home' className="header">
      <div className="title">
        <div className="container">
          <div className="title__main">
            <div className="title__text">
              <h1 className="title__text-title"></h1>
              <p className="title__text-subtitle">
                
              </p>
              <span className="title__text-links">
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/vlad0need/">
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="" />
                </a>
                <a target='_blank' rel="noreferrer" href="https://github.com/vlad0need">
                    <img src="https://skillicons.dev/icons?i=github" alt="" />
                </a>
              </span>
            </div>
            <div className="title__image"> </div>
          </div>
          <div className="title__skills">
            <p>Tech Stack:</p>
            <div className="title__skills-icons">
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=html " alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=css" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=scss" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=tailwind" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=materialui" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=js" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=ts" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=react" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=next" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=redux" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=nodejs" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=webpack" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=postman" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=figma" alt="" />
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=git " alt="" />
                {/* <img className='mobile-stack' src="https://skillicons.dev/icons?i=html,css,scss,tailwind,materialui,js,ts,react,next,redux,nodejs,webpack,postman,figma,git&perline=5 " alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

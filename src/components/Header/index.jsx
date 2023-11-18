import React, { useEffect, useRef } from 'react';
import '../../App.css';


const Header = () => {
  let text = "Hi, I'm Vlad Ovcharov. A passionate Front-end React Developer based in Kyiv, Ukraine."
  let text1 = ""
  const contentText = useRef('')
  const animatedText = (i) => {
    setTimeout(() => {
      text1 += text[i]
      contentText.current.textContent = text1
    },50*i)
  }
  useEffect(() => {
    for (let i = 0; i < text.length; i++ ){
      animatedText(i)
    }
  })


  return (
    <header id='Home' className="header">
      <div className="title">
        <div className="container">
          <div className="title__main">
            <div className="title__text">
              <h1 className="title__text-title">Front-end React Developer 🇺🇦</h1>
              <p ref={contentText} className="title__text-subtitle">
                
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
            <img  alt='' className="title__image" />
          </div>
          <div className="title__skills">
            <p>Tech Stack:</p>
            <div className="title__skills-icons">
                <img className='desktop-stack' src="https://skillicons.dev/icons?i=html,css,scss,tailwind,materialui,js,ts,react,next,redux,nodejs,webpack,postman,figma,git " alt="" />
                <img className='mobile-stack' src="https://skillicons.dev/icons?i=html,css,scss,tailwind,materialui,js,ts,react,next,redux,nodejs,webpack,postman,figma,git&perline=5 " alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

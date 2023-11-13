import React from 'react';

const About = () => {
  return (
    <section id='About' className="about">
      <div className="container">
        <div className="about__main">
          <div className="about__img">
            <img src="img/cris.webp" alt="" />
          </div>
          <div className="about__description">
            <div className="heading">About me</div>
            <div className="heading__description">A dedicated Front-end Developer</div>
            <p>As a Junior Front-End Developer with 1.5 years commercial experience, i possess an impressive arsenal of skills in HTML, CSS,
            JavaScript, Typescript, React, and SCSS. I excel in designing and maintaining responsive
            websites that offer a smooth user experience. My expertise lies in crafting dynamic,
            engaging interfaces through writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who thrives in collaborating
            with cross-functional teams to produce outstanding web applications </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

import React from 'react';
import '../../App.css';
import Project from './Project';

const Portfolio = () => {

  const projects = [
    {name: "Air Pods",
     description: "Still don't want new air pods s max? visit the presentation site, what does Apple know about presentations",
     stack: ["HTML", "CSS", "JS"],
     img: "/img/vlad0need.github.io_air-pods_.webp",
     github: "https://github.com/vlad0need/air-pods",
     liveDemo: "https://vlad0need.github.io/air-pods/",
     transLate: "-79%"
    },
    {name: "Prime One",
     description: "Prime One is a site where you can order catering services for any event and make an order in advance online",
     stack: ["HTML", "CSS", "JS"],
     img: "/img/vlad0need.github.io_primeone_-_1_.webp",
     github: "https://github.com/vlad0need/primeone",
     liveDemo: "https://vlad0need.github.io/primeone/",
     transLate: "-58%"
    },
    {name: "React Pizza",
     description: "React pizza is a site where you can order pizza to your taste, this application uses the full potential of react with redax regardless of the size",
     stack: ["React", "SCSS", "TS"],
     img: "/img/pizza-typescript.webp",
     github: "https://github.com/vlad0need/pizza-typescript",
     liveDemo: "https://vlad0need.github.io/pizza-typescript/",
     transLate: "-44%"
    },
    {name: "Shopily",
     description: "Shopily is like having your favorite store in your pocket and on the internet, just like Amazon. It brings the world of online shopping right to your fingertips, making it easier than ever to find and purchase the things you love.",
     stack: ["React", "CSS",],
     img: "/img/localhost_5173_-_1_.webp",
     github: "https://github.com/vlad0need/shopily",
     liveDemo: "https://shopily-vlad0need.netlify.app/",
     transLate: "-48%"
    },
  ]
  return (
    <section id='Projects' className="portfolio">
      <div className="container">
        <div className="heading">Projects</div>
        <div className="heading__description">Each project is a unique piece of development 🧩</div>
        <div className="portfolio__list">
          {projects.map((item, i) => <Project key={i} {...item} /> )}
        </div>
        
      </div>
    </section>
  );
};
export default Portfolio;

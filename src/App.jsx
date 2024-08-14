import React, {useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {TextPlugin} from "gsap/TextPlugin"
import {Draggable} from "gsap/Draggable"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import './App.css';
import About from './components/About/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/Nav';

function App() {
  gsap.registerPlugin(useGSAP, TextPlugin, Draggable, ScrollTrigger, ScrollToPlugin)
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline()
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container__scroll",
        start: "top top",
        end: "bottom top",
        // markers: 1,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        ease: "none",

      },
    })
    tl.to('.title__text-title', {text: "Front-end React Developer 🇺🇦", delay: 0.5, duration: 1.5})
    tl.from(".title__image", { scale: 0})
    tl.to('.title__text-subtitle', {text: "Hi, I'm Vlad Ovcharov. A passionate Front-end React Developer based in Kyiv, Ukraine.", duration: 2, })
    tl.from(".desktop-stack", {
      scale: 0,
      stagger: 0.2
    })
    // Draggable.create(".title__image", {bounds: ".header", type: 'rotation', })
    scrollTl.to(".header", {
      xPercent: -100,
    }, 0)
    scrollTl.to(".about", {
      xPercent: -100,
    }, 0)
    
    // const projectsTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".portfolio",
    //     start: "top bottom",
    //     end: "bottom top",
    //     markers: 1,
    //     scrub: 1,
    //     // ease: "none",
    //   }
    // })
      
    //     projectsTl.from(".project", {
    //       xPercent: -100,
    //       stagger: 0,
    //     })
      

    }, {scope: container})
    React.useEffect(() => {
      const onLoad = () => {
        window.history.pushState(null, "", '/')
        window.scrollTo(0, 0);
      }
      if(window.location.reload){
        onLoad()
      }
    }, [])
  return (
    <div ref={container} className="App">
      <NavBar />
      <div className='container__scroll'>
      <Header />
      <About />
      </div>
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

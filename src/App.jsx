import React from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/Nav';

function App() {
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
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

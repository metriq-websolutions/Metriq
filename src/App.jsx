import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();

    const smoothScroll = () => {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 0,
      });
    };

    window.addEventListener('load', smoothScroll);

    return () => {
      window.removeEventListener('load', smoothScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

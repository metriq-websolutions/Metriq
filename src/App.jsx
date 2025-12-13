import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Packages from './components/Packages';
import './App.css';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import NotFound from './components/NotFound';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 1. Helper to scroll to top when switching pages (crucial for UX)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 2. Group your "Single Page" sections here
const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Works />
    <Contact />
  </>
);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger when routes change
    ScrollTrigger.refresh();
  }, []);

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          {/* Main Website Route (site.com/) */}
          <Route path="/" element={<Home />} />
          
          {/* Packages Page Route (site.com/packages) */}
          <Route path="/packages" element={<Packages />} />
          <Route path="/TermsAndConditions" element={<Terms />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
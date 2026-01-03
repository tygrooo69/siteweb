
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Process from './components/Process';
import SafetyFirst from './components/SafetyFirst';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Sustainability />
        <Projects />
        <SafetyFirst />
        <Testimonials />
        <Careers />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;

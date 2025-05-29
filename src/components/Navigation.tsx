
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism' : 'bg-black/80'
    } rounded-full px-6 py-3`}>
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-cyan-accent transition-colors duration-200 text-sm font-medium"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-white hover:text-cyan-accent transition-colors duration-200 text-sm font-medium"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-white hover:text-cyan-accent transition-colors duration-200 text-sm font-medium"
        >
          Contact
        </button>
        <Button 
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="bg-cyan-accent hover:bg-cyan-600 text-black font-medium px-4 py-2 rounded-full transition-all duration-200"
        >
          Resume
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;

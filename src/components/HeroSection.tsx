
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 animated-bg opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-gray-400 text-lg mb-4">Hello I'm a</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Building intelligent systems with a love
            <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-accent to-purple-accent bg-clip-text">
              for embedded tech, clean code, and
            </span>
            <br />
            good design.
          </h1>
          
          <Button 
            onClick={scrollToContact}
            className="bg-black hover:bg-gray-900 text-white border border-gray-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Let's get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

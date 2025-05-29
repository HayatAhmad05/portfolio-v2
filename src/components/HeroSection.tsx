import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useTypewriter } from '@/hooks/useTypewriter';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const typewriterWords = [
    'Hayat',
    'a Computer Engineer',
    'Hardware Enthusiast',
    'a Developer',
  ];

  const currentWord = useTypewriter({
    words: typewriterWords,
    typeSpeed: 80,
    deleteSpeed: 50,
    delayBetweenWords: 2000
  });

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
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <div className="flex items-center justify-center text-gray-400 text-lg mb-4">
              <span>Hello I'm&nbsp;</span>
              <span className="inline-block min-w-[180px] text-left text-white">
                {currentWord}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <span className="text-white">Building intelligent systems with a love for </span>
            <span className="text-transparent bg-gradient-to-r from-cyan-accent to-purple-accent bg-clip-text">embedded tech</span>
            <span className="text-white">, clean code, and good design.</span>
          </div>
          
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

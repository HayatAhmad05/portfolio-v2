
import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const interests = [
    {
      title: "Embedded Systems & IoT",
      description: "I'm fascinated by the intersection of hardware and software. Working with microcontrollers, sensors, and embedded C programming allows me to create tangible solutions that interact with the physical world. From Arduino projects to ESP32 development, I love bringing ideas to life through embedded technology.",
      animation: "slide-in-left"
    },
    {
      title: "PCB Design & Hardware",
      description: "Designing printed circuit boards is like solving a complex puzzle. I enjoy using tools like KiCad and Altium Designer to create efficient, compact designs. There's something satisfying about taking a schematic and transforming it into a physical board that actually works in the real world.",
      animation: "slide-in-right"
    },
    {
      title: "Clean Code & Architecture",
      description: "I believe that code should be readable, maintainable, and elegant. Whether it's implementing design patterns, writing comprehensive tests, or refactoring legacy code, I'm passionate about creating software that not only works but is a pleasure to work with for other developers.",
      animation: "slide-in-left"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-bg opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-dark-secondary rounded-3xl p-8 md:p-12 glass-morphism">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">ABOUT ME :</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <h3 className="text-2xl font-semibold text-cyan-accent mb-6">A brief intro, Who am I ?</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm Hayat, a first year student currently at the University of Waterloo studying Computer Engineering.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not studying, I enjoy tinkering around with microcontrollers and spending time working on projects that involve PCB design and hardware.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-6">
                  You can find my past experiences and some of my personal projects from the past year below as well as their github repositories.
                </p>
              </div>
              
              <div className={`flex justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="bg-dark-accent p-8 rounded-2xl animate-float">
                  <div className="text-6xl mb-4">💻</div>
                  <div className="text-cyan-accent text-sm font-mono">{'<Developer />'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-white mb-8">My Interests & Passions</h3>
            
            {interests.map((interest, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                } ${isVisible ? `animate-${interest.animation}` : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h4 className="text-xl font-semibold text-purple-accent mb-4">{interest.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{interest.description}</p>
                </div>
                
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-accent/20 to-purple-accent/20 p-8 rounded-2xl border border-cyan-accent/30 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-accent to-purple-accent rounded-lg flex items-center justify-center text-2xl font-bold text-black">
                      {index === 0 ? '⚡' : index === 1 ? '🔧' : '📱'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

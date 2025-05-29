
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const interests = [
    {
      title: "Embedded Systems",
      description: "Passionate about low-level programming and hardware-software integration. I love working with microcontrollers, sensors, and real-time systems.",
      icon: "🔧"
    },
    {
      title: "Machine Learning",
      description: "Exploring the intersection of AI and embedded systems. Currently working on edge AI implementations and neural network optimization.",
      icon: "🧠"
    },
    {
      title: "IoT Development",
      description: "Building connected devices that bridge the physical and digital worlds. From smart sensors to automated systems.",
      icon: "🌐"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto"></div>
        </div>

        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate computer engineer with a deep love for embedded systems and clean, efficient code. 
            My journey in technology started with a curiosity about how things work at the hardware level, 
            and has evolved into a comprehensive understanding of both software and hardware integration.
          </p>
        </div>

        <div 
          ref={interestsRef}
          className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-1000 delay-500 ${
            interestsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">My Interests</h3>
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className={`bg-dark-primary p-6 rounded-lg border border-gray-700 hover:border-cyan-accent transition-all duration-300 hover:transform hover:scale-105 ${
                  interestsVisible ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{interest.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{interest.title}</h4>
                    <p className="text-gray-300">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`flex items-center justify-center ${interestsVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-accent/20 to-purple-accent/20 rounded-full animate-float"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-white font-semibold">Always Learning</p>
                  <p className="text-gray-400">Always Building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

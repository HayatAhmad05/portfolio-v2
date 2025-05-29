
import React, { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Company",
      period: "Summer 2024",
      description: "Developed web applications using React and Node.js, collaborated with cross-functional teams, and contributed to improving user experience.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
    },
    {
      title: "Hardware Engineering Assistant",
      company: "Electronics Lab",
      period: "Fall 2023",
      description: "Assisted in PCB design and testing, worked with embedded systems, and helped develop IoT solutions for smart devices.",
      technologies: ["KiCad", "Arduino", "C++", "ESP32"]
    },
    {
      title: "Teaching Assistant",
      company: "University of Waterloo",
      period: "Winter 2024",
      description: "Helped students with programming concepts, conducted tutorial sessions, and provided feedback on coding assignments.",
      technologies: ["Python", "C", "MATLAB", "Git"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-bg opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-dark-secondary rounded-3xl p-8 md:p-12 glass-morphism">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">EXPERIENCE :</h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className={`bg-dark-accent rounded-2xl p-6 border border-gray-600 hover:border-cyan-accent/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-accent mb-2">{experience.title}</h3>
                    <p className="text-purple-accent font-medium">{experience.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{experience.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-cyan-accent/20 to-purple-accent/20 text-cyan-accent px-3 py-1 rounded-full text-sm border border-cyan-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

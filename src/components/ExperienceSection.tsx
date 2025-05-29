
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ExperienceSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Developing embedded systems and IoT solutions. Working with C/C++, Python, and various microcontroller platforms.",
      technologies: ["C/C++", "Python", "ARM Cortex", "RTOS", "IoT"]
    },
    {
      title: "Junior Developer",
      company: "Innovation Labs",
      period: "2021 - 2022",
      description: "Contributed to web applications and learned the fundamentals of software development in a collaborative environment.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB"]
    },
    {
      title: "Computer Engineering Student",
      company: "University",
      period: "2018 - 2022",
      description: "Studied computer engineering with focus on embedded systems, digital design, and software engineering principles.",
      technologies: ["Verilog", "Assembly", "MATLAB", "C", "Java"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-primary">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto"></div>
        </div>

        <div 
          ref={experienceRef}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-accent to-purple-accent"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative pl-20 pb-12 transition-all duration-1000 ${
                  experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-accent rounded-full border-4 border-dark-primary"></div>
                
                <div className="bg-dark-secondary p-6 rounded-lg border border-gray-700 hover:border-cyan-accent transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-cyan-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-dark-primary border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyan-accent transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
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

export default ExperienceSection;

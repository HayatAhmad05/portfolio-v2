
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "Smart IoT Weather Station",
      description: "An intelligent weather monitoring system using ESP32 that collects environmental data and sends it to a cloud dashboard. Features real-time monitoring and predictive analytics.",
      technologies: ["ESP32", "C++", "React", "Firebase", "Sensors"],
      image: "🌤️"
    },
    {
      title: "Embedded Motion Control System", 
      description: "A precision motor control system for robotics applications. Implements PID control algorithms and real-time feedback for accurate positioning.",
      technologies: ["ARM Cortex-M", "C", "RTOS", "PWM", "Encoders"],
      image: "🤖"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark theme, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "💻"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto"></div>
        </div>

        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-dark-primary rounded-lg border border-gray-700 overflow-hidden hover:border-cyan-accent transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-accent/20 ${
                projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-dark-secondary border border-gray-600 rounded-full text-sm text-gray-300 group-hover:border-cyan-accent group-hover:text-cyan-accent transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-cyan-accent to-purple-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

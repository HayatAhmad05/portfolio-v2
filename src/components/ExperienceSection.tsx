
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ExperienceSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "NETSOL Technologies Ltd.",
      period: "May 2025 - Present",
      description: "Led the creation of an intelligent, agentic reimbursement system that automates receipt scanning, data extraction, and form submission, cutting manual processing time by over 65%. Developed an LLM-powered financial data pipeline to streamline ratio extraction and reporting, boosting analytics speed and accuracy. Built an AI Caller Assistant using speech recognition and LLMs to automate client interactions, reducing manual call handling by 50% and enabling real-time call analytics.",
      technologies: ["Python", "LLM's", "Fast API", "OCR", "LangChain", "MongoDB", "Docker"]
    },
    {
      title: "Full-Stack Developer",
      company: "National University of Science and Technology",
      period: "May 2024 - Aug 2024",
      description: "Designed and implemented dynamic React frontend features, including research filters and notification panels, improving student-professor connections by 20%. Integrated RESTful APIs with real-time polling to provide up-to-date research postings, enhancing navigation speed and accuracy. Increased user engagement by 30% through responsive profile pages optimized for cross-device compatibility.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "RESTful APIs", "WebSockets"]
    },
    {
      title: "Technical Team Intern",
      company: "Tetra Pak Ltd.",
      period: "May 2023 - Aug 2023",
      description: "Diagnosed and resolved sensor, motor, and control system issues on 50+ packaging machines, achieving incident resolutions in under 30 minutes and reducing repair times. Implemented preventive maintenance and calibration programs that cut unscheduled downtime by 15%, improving production efficiency. Collaborated with cross-functional teams to implement efficiency upgrades, increasing overall throughput by 10%.",
      technologies: ["Cross Functional Teams", "Preventive Maintenance", "Sensors", "PLC's"]
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

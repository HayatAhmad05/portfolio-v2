
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "Spotify Desktop Asisstant",
      description: "Developed an ESP32-based IoT device in C++ that visualizes real-time Spotify metadata on a TFT screen using RESTful APIs and SPI/I2C communication. Enabled direct music controls (play/pause) via rotary encoder inputs without opening the Spotify app. Designed a secure OAuth 2.0 authentication flow with automated token refresh and encrypted local storage for seamless API access.",
      technologies: ["ESP32", "C++", "RESTful API", "OAuth 2.0", "SPI", "I2C"],
      image: "🌤️"
    },
    {
      title: "ReClaim AI",
      description: "Developed an agentic reimbursement automation system that streamlines receipt scanning, intelligent data extraction, and automated PDF form submission. This system significantly reduces manual processing time and enhances accuracy by leveraging AI-driven workflows, enabling faster and more reliable reimbursement handling.",
      technologies: [ "Python", "LangChain", "FastAPI", "Docker", "OCR", "PDF Autofilling", "Cloud Deployment", "Automation"],
      image: "🤖"
    },
    {
      title: "DialMind — AI-Powered Intelligent Caller Assistant",
      description: "Developed DialMind, an agentic AI caller assistant that automates dynamic, multi-turn client conversations using advanced speech recognition and large language models. DialMind handles real-time speech-to-text transcription, context-aware dialogue management, and generates responsive, human-like interactions. This innovation reduced manual call handling hours by 50% and enabled real-time analytics on call data, significantly improving operational efficiency.",
      technologies: [ "Whisper","LangChain", "FastAPI", "Python", "LLM's", "Agentic Chatbot", "NLP"],
      image: "🤖"
    },
    {
      title: "Macropad PCB Design", 
      description: "Designed a 3x3 matrix PCB using Altium Designer and KiCad with optimized trace routing and ground plane isolation to minimize EMI and maintain signal integrity. Validated the macropad design through SPICE simulations to ensure reliable circuit performance. Enhanced productivity by 40% by scripting customizable key macros in CircuitPython, enabling efficient task automation and rapid command execution.",
      technologies: [ "Altium Designer", "KiCad", "SPICE Simulation", "CircuitPython", "PCB Design", "EMI Mitigation"],
      image: "🤖"
    },
  
    {
      title: "The Heart That Fed",
      description: "The Heart That Fed is a real-time civilization management game built in Godot 4 within 9 days for BIGMODE Jam 2025. Players allocate workers across industry, farming, and construction while managing dynamic events like famine and revolts. The game features procedural resource management, state-driven AI, and real-time event handling, leveraging Godot’s scene system and GDScript. Input is via mouse and keyboard (A + D keys).",
      technologies: [ "Godot 4", "GDScript", "C", "Game Design", "Real-time Systems"],
      image: "💻"
    },
    {
      title: "Portfolio Website",
      description: "Built a modern, responsive portfolio website using React and Tailwind CSS, featuring a modular component-based architecture for easy updates. Integrated a custom chatbot enabling real-time, interactive user engagement, enhancing the site’s functionality and user experience. The chatbot leverages dynamic data rendering and smooth UI interactions within the React framework",
      technologies: [ "React", "Tailwind CSS", "JavaScript","HTML", "CSS", "LangChain", "LLM's", "FastAPI", "Responsive Design", "Component Architecture"],
      image: "💻"
    },

 
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

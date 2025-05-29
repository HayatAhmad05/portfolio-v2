
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, ArrowUp } from "lucide-react";

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "Smart Home IoT System",
      description: "A comprehensive home automation system built with ESP32 microcontrollers, featuring real-time sensor monitoring, mobile app control, and cloud integration for remote access.",
      techStack: ["ESP32", "React Native", "Firebase", "C++", "Node.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "PCB Signal Analyzer",
      description: "Custom PCB design for signal analysis with high-speed ADC, designed in KiCad with accompanying firmware for real-time data visualization and processing.",
      techStack: ["KiCad", "STM32", "Python", "Qt", "C"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Autonomous Robot Navigation",
      description: "Mobile robot with computer vision capabilities for autonomous navigation using ROS, implementing SLAM algorithms and path planning for indoor environments.",
      techStack: ["ROS", "Python", "OpenCV", "Arduino", "TensorFlow"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Web-based Code Editor",
      description: "A collaborative code editor with real-time syntax highlighting, multi-language support, and live collaboration features built with modern web technologies.",
      techStack: ["React", "TypeScript", "Socket.io", "Monaco Editor", "Express"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Monitoring Station",
      description: "Wireless weather station network using LoRa communication, collecting environmental data from multiple sensors and displaying analytics through a web dashboard.",
      techStack: ["LoRa", "ESP32", "React", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "LED Matrix Display",
      description: "Custom LED matrix controller with Wi-Fi connectivity for displaying animations, text, and real-time data. Features web interface for easy content management.",
      techStack: ["ESP8266", "FastLED", "Vue.js", "WebSockets", "C++"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 checkerboard-bg opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in embedded systems, web development, and hardware design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-dark-secondary border-dark-accent hover:border-cyan-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-accent/20 group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-white group-hover:text-cyan-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-dark-accent text-cyan-accent border border-cyan-accent/30 hover:bg-cyan-accent hover:text-black transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-accent text-cyan-accent hover:bg-cyan-accent hover:text-black transition-all duration-200"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Link className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-purple-accent hover:bg-purple-600 text-white transition-all duration-200"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ArrowUp className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

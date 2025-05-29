
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing systems...');

  const loadingTexts = [
    'Initializing systems...',
    'Loading hardware drivers...',
    'Configuring embedded systems...',
    'Establishing connections...',
    'Ready to launch!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setCurrentText(loadingTexts[1]);
        } else if (newProgress >= 40 && newProgress < 60) {
          setCurrentText(loadingTexts[2]);
        } else if (newProgress >= 60 && newProgress < 80) {
          setCurrentText(loadingTexts[3]);
        } else if (newProgress >= 80) {
          setCurrentText(loadingTexts[4]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-dark-primary z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Circuit Board Animation */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-2 border-cyan-accent rounded-lg animate-pulse">
            <div className="absolute top-2 left-2 w-4 h-4 bg-cyan-accent rounded-full animate-ping"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-purple-accent rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-accent rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-purple-accent rounded-full animate-ping delay-1000"></div>
            
            {/* Circuit lines */}
            <div className="absolute top-4 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-accent to-purple-accent opacity-60"></div>
            <div className="absolute bottom-4 left-6 right-6 h-0.5 bg-gradient-to-r from-purple-accent to-cyan-accent opacity-60"></div>
            <div className="absolute top-6 bottom-6 left-4 w-0.5 bg-gradient-to-b from-cyan-accent to-purple-accent opacity-60"></div>
            <div className="absolute top-6 bottom-6 right-4 w-0.5 bg-gradient-to-b from-purple-accent to-cyan-accent opacity-60"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <p className="text-white text-lg font-medium">{currentText}</p>
          
          {/* Progress Bar */}
          <div className="w-64 mx-auto bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-accent to-purple-accent h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-gray-400 text-sm">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;


import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypewriter = (options: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = options.words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % options.words.length);
        }
      } else {
        setCurrentText(word.slice(0, currentText.length + 1));
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), options.delayBetweenWords || 2000);
        }
      }
    }, isDeleting ? (options.deleteSpeed || 50) : (options.typeSpeed || 100));

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, options]);

  return currentText;
};

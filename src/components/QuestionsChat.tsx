
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QuestionsChatProps {
  onChatSend: (message: string) => void;
}

const QuestionsChat: React.FC<QuestionsChatProps> = ({ onChatSend }) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const { ref: chatRef, isVisible: chatVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const suggestionQuestions = [
    "Tell me about your experience at your current company",
    "What projects have you worked on?", 
    "How did you build your OCR system?",
    "What technologies do you specialize in?",
    "Tell me about your embedded systems projects"
  ];

  const handleSuggestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      onChatSend(message);
      
      // Simulate a bot response (you can replace this with actual logic)
      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: "Thanks for your question! This is a placeholder response. In a real implementation, this would connect to your chat system.",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <!-- Chat widget mount point -->
    <section className="py-20 bg-dark-primary">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Questions & Chat</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto"></div>
        </div>

        <div 
          ref={chatRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            chatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Suggestion Buttons */}
          <header className="mb-6">
            <ul className="flex flex-wrap gap-3 justify-center">
              {suggestionQuestions.map((question, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSuggestionClick(question)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors duration-200"
                  >
                    {question}
                  </button>
                </li>
              ))}
            </ul>
          </header>

          {/* Chat Window */}
          <div className="bg-gray-900 rounded-lg border border-gray-700 mb-4">
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-20">
                  <p>Ask me anything about my experience and projects!</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isUser
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-800 text-gray-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Input Bar */}
          <form onSubmit={handleInputSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything…"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-accent transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Send
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuestionsChat;

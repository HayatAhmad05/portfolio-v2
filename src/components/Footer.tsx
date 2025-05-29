
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 checkerboard-bg opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-dark-secondary rounded-2xl p-8 glass-morphism">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-dark-accent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-accent focus:outline-none transition-colors duration-200"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-dark-accent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-accent focus:outline-none transition-colors duration-200"
              />
              <textarea 
                placeholder="Your Message"
                rows={4}
                className="w-full bg-dark-accent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-accent focus:outline-none transition-colors duration-200 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-cyan-accent hover:bg-cyan-600 text-black font-medium py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-dark-secondary rounded-2xl p-8 glass-morphism">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Details</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-cyan-accent">📞</div>
                <span className="text-gray-300">+1 647 938 5883</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-cyan-accent">✉️</div>
                <span className="text-gray-300">sayed.hayat05@hotmail.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Digital Spaces</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-dark-accent border border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-accent hover:bg-cyan-accent/10 transition-all duration-200 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">🐙</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-dark-accent border border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-accent hover:bg-cyan-accent/10 transition-all duration-200 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">💼</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-dark-accent border border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-accent hover:bg-cyan-accent/10 transition-all duration-200 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">🎨</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NICHOLAS CHEN ↑ BY <span className="text-cyan-accent">NICHOLAS®</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

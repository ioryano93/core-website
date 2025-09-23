import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { heroContent } from '@/data/portfolio';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = heroContent.title;
    let index = 0;

    const typeWriter = () => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setIsTyping(false);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">
                  {isTyping ? typedText : heroContent.title}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mt-2">
                  {heroContent.highlight}
                </span>
              </h1>
            </div>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="code-title">{heroContent.codeExample.filename}</span>
              </div>
              <div className="code-content">
                <pre>
                  <code>
                    {heroContent.codeExample.code}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

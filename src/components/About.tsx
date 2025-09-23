import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutContent } from '@/data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            {aboutContent.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Passionate about building robust, scalable solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">
              Principal Software Engineer
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutContent.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about creating clean, maintainable code and architecting systems that 
              can handle millions of requests while maintaining optimal performance and reliability. 
              My approach combines deep technical knowledge with practical business understanding.
            </p>

            {/* Stats - Only render if stats exist */}
            {aboutContent.stats && aboutContent.stats.length > 0 && (
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
              >
                {aboutContent.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-48 h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
            >
              <i className="fas fa-user-tie text-6xl text-white"></i>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

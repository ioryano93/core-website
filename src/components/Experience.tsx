import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Experience & Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Recent work and achievements
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative mb-12 pl-20"
            >
              {/* Timeline Marker */}
              <div className="timeline-marker"></div>

              {/* Content */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {experience.title}
                  </h3>
                  <span className="text-sm text-gray-600 font-medium mt-1 sm:mt-0">
                    {experience.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-600">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

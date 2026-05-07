import React from 'react';
import { Heart, Users, Accessibility, Award, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empathy-First Design',
      description: 'Every healthcare experience should be designed with deep understanding of patient needs and emotions.'
    },
    {
      icon: Accessibility,
      title: 'Universal Accessibility',
      description: 'Healthcare must be accessible to everyone, regardless of ability, age, or technical proficiency.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Working closely with healthcare professionals, patients, and stakeholders to create meaningful solutions.'
    }
  ];

  const expertise = [
    { icon: Target, text: 'User Research & Testing' },
    { icon: BookOpen, text: 'Healthcare Workflow Analysis' },
    { icon: Award, text: 'WCAG 2.1 Compliance' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About My Design Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I believe that good healthcare design starts with understanding people. 
            My approach combines empathy, research, and technical expertise to create 
            experiences that truly serve patients and providers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <value.icon className="h-6 w-6 text-health-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Expertise in Healthcare UX
            </h3>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">
                With specialized focus on healthcare UX, I bring deep understanding of:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-health-green" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Specialization:</strong> Patient portals, telemedicine platforms, 
                  clinical workflows, and medical device interfaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-health-blue text-white p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Let's Improve Healthcare Together
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            I'm always interested in collaborating on projects that make healthcare more 
            accessible, efficient, and human-centered. If you're working on something 
            that could benefit from thoughtful UX design, I'd love to hear from you.
          </p>
          <a href="#contact" className="btn-secondary bg-white text-health-blue hover:bg-gray-100">
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

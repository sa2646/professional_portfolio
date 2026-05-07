import React from 'react';
import { ArrowRight, Users, Accessibility, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24 bg-health-light">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Designing Better
              <span className="text-health-blue"> Healthcare</span> Experiences
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm a UX designer passionate about making healthcare more accessible, 
              intuitive, and human-centered. Through thoughtful design, I transform 
              complex medical workflows into seamless experiences that put patients first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="btn-primary inline-flex items-center justify-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="h-8 w-8 text-health-blue mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Patient-Centered</h3>
                <p className="text-gray-600 text-sm">
                  Every design decision starts with the patient's needs and comfort
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Accessibility className="h-8 w-8 text-health-green mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Accessibility First</h3>
                <p className="text-gray-600 text-sm">
                  Inclusive design that works for users of all abilities
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2">
                <Heart className="h-8 w-8 text-health-blue mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Healthcare Focus</h3>
                <p className="text-gray-600 text-sm">
                  Specialized in medical workflows, patient portals, and clinical interfaces
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

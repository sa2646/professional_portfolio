import React from 'react';
import { ExternalLink, Clock, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Patient Portal Redesign',
      description: 'Complete redesign of a hospital patient portal focusing on accessibility and ease of use for elderly patients.',
      image: '/api/placeholder/600/400',
      tags: ['UX Design', 'Accessibility', 'Healthcare'],
      features: ['WCAG 2.1 AA compliant', '508 accessibility', 'User testing with 50+ patients'],
      link: '#',
      duration: '3 months',
      teamSize: '4 designers',
      impact: '40% reduction in support calls'
    },
    {
      id: 2,
      title: 'Telemedicine App Interface',
      description: 'Mobile-first design for virtual consultations, making healthcare accessible from anywhere.',
      image: '/api/placeholder/600/400',
      tags: ['Mobile Design', 'Telehealth', 'UX Research'],
      features: ['iOS & Android apps', 'Video consultation flow', 'Prescription management'],
      link: '#',
      duration: '2 months',
      teamSize: '3 designers',
      impact: '25% increase in patient engagement'
    },
    {
      id: 3,
      title: 'Clinical Dashboard Optimization',
      description: 'Streamlined workflow design for healthcare providers to reduce administrative burden.',
      image: '/api/placeholder/600/400',
      tags: ['B2B Design', 'Workflow', 'Data Visualization'],
      features: ['Real-time data display', 'Alert system', 'Mobile responsive'],
      link: '#',
      duration: '4 months',
      teamSize: '5 designers',
      impact: '30% faster documentation'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Healthcare UX Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world projects that demonstrate my commitment to improving healthcare experiences 
            through thoughtful, user-centered design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-health-light flex items-center justify-center">
                <div className="text-health-blue">
                  <Users className="h-16 w-16" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-health-light text-health-blue text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-health-blue" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-health-blue" />
                    {project.teamSize}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Target className="h-4 w-4 mr-2 text-health-green" />
                    {project.impact}
                  </div>
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center text-health-blue hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

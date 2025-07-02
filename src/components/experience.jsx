import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaChalkboardTeacher, FaPenNib } from 'react-icons/fa';

const experience = [
  {
    role: 'Event Management & Graphic Design Intern',
    company: 'Dawat Pakistan',
    period: 'Jul 24 – Aug 24',
    description: "Launched Dawat's own corporate retreat program.",
    icon: <FaPaintBrush size={20} className="text-cyan-400" />,
  },
  {
    role: 'Tutor',
    company: 'Freelance',
    period: '2024 – Present',
    description: 'Prepared students for O/A level exams.',
    icon: <FaChalkboardTeacher size={20} className="text-cyan-400" />,
  },
  {
    role: 'Script Writer',
    company: 'Freelance',
    period: 'June 25 – Present',
    description: 'Wrote scripts for YouTube videos, focusing on sports and technology topics.',
    icon: <FaPenNib size={20} className="text-cyan-400" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-cyan-400 mb-10 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative border-l-4 border-cyan-500 pl-6 pb-4 group"
            >
              <div className="absolute -left-3 top-1.5 bg-zinc-950 border border-cyan-400 p-2 rounded-full">
                {job.icon}
              </div>
              <div className="flex justify-between items-start flex-wrap md:flex-nowrap md:items-center mb-1">
                <h3 className="text-1xl text-cyan-400 mb-5" style={{ fontFamily: '"Press Start 2P", cursive' }}>{job.role}</h3>
                <span className="mt-2 inline-block bg-cyan-900/20 border border-cyan-500 text-gray-400 font-orbitron text-base text-xs px-3 py-1 rounded-full backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-cyan-500/40 shadow-sm">
                  {job.period}
                </span>
              </div>
              <p className="text-gray-400 font-orbitron text-base" style={{ fontFamily: 'Orbitron, sans-serif' }}>{job.company}</p>
              <p className="text-gray-400 font-orbitron text-base" style={{ fontFamily: 'Orbitron, sans-serif' }}>{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

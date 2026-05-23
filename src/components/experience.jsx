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
    period: 'Jan 2024 – Present',
    description: 'Prepared students for O/A level exams.',
    icon: <FaChalkboardTeacher size={20} className="text-cyan-400" />,
  },
  {
    role: 'Script Writer',
    company: 'Freelance',
    period: 'June 25 – March 26',
    description: 'Wrote scripts for YouTube videos, focusing on sports and technology topics.',
    icon: <FaPenNib size={20} className="text-cyan-400" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="text-white py-20 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-cyan-400 mb-16 text-center drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          <span className="text-pink-500 mr-2 blink">&gt;</span>Experience_Log
        </h2>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/50 before:to-transparent">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline Icon Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-400 bg-zinc-950 text-cyan-400 shadow-[0_0_10px_theme(colors.cyan.400)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 hover:bg-cyan-400 hover:text-black transition-colors duration-300">
                {job.icon}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/80 p-5 rounded border border-cyan-900 shadow-lg hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-colors duration-300 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 border-b border-cyan-900/50 pb-2">
                  <h3 className="text-xs md:text-sm text-pink-400 font-bold mb-2 md:mb-0" style={{ fontFamily: '"Press Start 2P", cursive' }}>{job.role}</h3>
                  <span className="inline-block font-mono text-[10px] text-cyan-300 bg-cyan-950 px-2 py-1 rounded shadow-inner border border-cyan-800">
                    {job.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500 font-mono text-xs">@</span>
                  <p className="text-gray-300 font-orbitron text-sm uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>{job.company}</p>
                </div>
                <div className="mt-3 bg-black/50 p-3 rounded text-xs font-mono text-gray-400 border-l-2 border-cyan-500/50">
                  <span className="text-cyan-500 mr-2">$</span>
                  {job.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

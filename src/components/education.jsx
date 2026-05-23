import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationList = [
  {
    title: 'Institute of Business Administration, Karachi',
    subtitle: 'BS Computer Science',
    years: '2023 – 2027',
    grade: 'Current CGPA: 3.1',
    achievements: ['2nd Position in ITC GameFest', '2x Best Defender Award at IBA Sports Fest', 'Led CS Football team to first ever Olympiad'],
  },
  {
    title: 'Lyceum School',
    subtitle: 'A Levels – Pre-Engineering',
    years: '2021 – 2023',
    grade: 'Grades: A A A',
    achievements: ['Football Team Captain', 'Corinthe House Captain', 'Sportsman of the Year'],
  },
  {
    title: 'City School',
    subtitle: 'O Levels – Pre-Medical',
    years: '2018 – 2021',
    grade: 'Grades: 7 A*s, 1 A',
    achievements: ['Football Team Captain', 'House Captain', 'High Achiever Award'],
  },
];

export default function Education() {
  return (
    <section id="education" className="text-white py-20 px-6 md:px-12 relative">
      {/* Background Decorative Line */}
      <h2
        className="text-2xl md:text-3xl text-cyan-400 mb-16 text-center drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
        style={{ fontFamily: '"Press Start 2P", cursive' }}
      >
        <span className="text-pink-500 mr-2 blink">&gt;</span>Education_Log
      </h2>
      
      <div className="max-w-4xl w-full mx-auto relative">
        {/* Neon Line background for timeline */}
        <div className="absolute left-[17px] md:left-[27px] top-0 bottom-0 w-[2px] bg-cyan-900 shadow-[0_0_8px_theme(colors.cyan.900)]"></div>
        <div className="absolute left-[17px] md:left-[27px] top-0 h-1/3 w-[2px] bg-cyan-400 shadow-[0_0_10px_theme(colors.cyan.400)] animate-pulse"></div>

        <ul className="space-y-12">
          {educationList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative flex items-start gap-6 md:gap-10 pl-12 md:pl-16 group"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 top-1 w-10 h-10 md:w-14 md:h-14 bg-zinc-950 border-2 border-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.4)] group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 z-10 rotate-45">
                <div className="-rotate-45 text-cyan-400 group-hover:text-black transition-colors">
                  <FaGraduationCap size={20} />
                </div>
              </div>

              {/* Data Card */}
              <div className="w-full bg-zinc-950/80 border border-cyan-800/50 p-6 rounded backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-colors duration-300">
                {/* File Header */}
                <div className="flex justify-between items-center mb-4 border-b border-cyan-900/50 pb-2">
                  <h3
                    className="text-[10px] md:text-sm text-pink-400"
                    style={{ fontFamily: '"Press Start 2P", cursive' }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono text-gray-500 hidden sm:inline-block">SYS.LOG.{index + 1}</span>
                </div>
                
                <p
                  className="text-cyan-200 font-orbitron text-sm md:text-base mb-1"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {item.subtitle}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-gray-500 font-mono text-xs">{item.years}</p>
                  <span className="bg-cyan-950 text-cyan-400 font-mono text-[10px] px-2 py-0.5 border border-cyan-700 rounded shadow-inner">
                    {item.grade}
                  </span>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-500 text-xs font-mono mb-2">++ ACHIEVEMENTS_</p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements?.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-black/50 border-l-2 border-pink-500 text-gray-300 text-xs font-mono px-2 py-1 shadow-sm group-hover:text-cyan-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

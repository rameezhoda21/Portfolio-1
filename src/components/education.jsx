import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationList = [
  {
    title: 'Institute of Business Administration, Karachi',
    subtitle: 'BS Computer Science',
    years: '2023 – 2027',
    grade: 'Current CGPA: 3.1',
    achievements: ['2nd Position in ITC GameFest', 'Best Defeder Award in ISF', 'Led CS Football team to firste ever Olympiad'],
  },
  {
    title: 'Lyceum School',
    subtitle: 'A Levels – Pre-Engineering',
    years: '2021 – 2023',
    grade: 'Grades: A A A',
    achievements: ['Football Team Captain', 'Corinthe House Captain'],
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
    <section id="education" className="text-white py-20 px-6 md:px-12">
      <h2
        className="text-3xl text-cyan-400 mb-10 text-center"
        style={{ fontFamily: '"Press Start 2P", cursive' }}
      >
        Education
      </h2>
      <div className="max-w-4xl w-full mx-auto md:mr-auto md:ml-12 lg:ml-20">
        <ul className="space-y-8 border-l-2 border-cyan-600 pl-6">
          {educationList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 text-cyan-400">
                <FaGraduationCap size={22} />
              </div>
              <div>
                <h3
                  className="text-1xl text-cyan-400 mb-5"
                  style={{ fontFamily: '"Press Start 2P", cursive' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-400 font-orbitron text-base"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {item.subtitle}
                </p>
                <p
                  className="text-gray-400 font-orbitron text-base"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {item.years}
                </p>
                <p className="mt-2 inline-block bg-cyan-900/20 border border-cyan-500 text-gray-400 font-orbitron text-base text-xs px-3 py-1 rounded-full backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-cyan-500/40 shadow-sm">
                  {item.grade}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.achievements?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-cyan-800/20 border border-cyan-600 text-cyan-300 text-xs font-orbitron px-3 py-1 rounded-full backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-md"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaCode, FaGitAlt, FaGithub,
  FaReact, FaUsers, FaLightbulb, FaComments, FaCuttlefish
} from 'react-icons/fa';
import { SiTailwindcss, SiCanva } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbCircuitCapacitor } from 'react-icons/tb'; // for EDA Playground

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'C/C++', icon: <FaCuttlefish /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Python', icon: <FaPython /> },
    ],
  },
  {
    category: 'Tools & Frameworks',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <VscCode /> },
      { name: 'Canva', icon: <SiCanva /> },
      { name: 'EDA Playground', icon: <TbCircuitCapacitor /> },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Communication', icon: <FaComments /> },
      { name: 'Problem Solving', icon: <FaLightbulb /> },
      { name: 'Teamwork', icon: <FaUsers /> },
      { name: 'Leadership', icon: <FaCode /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="text-white py-20 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl text-cyan-400 mb-16 text-center drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          <span className="text-pink-500 mr-2 blink">&gt;</span>System_Capabilities
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative bg-zinc-950/80 border border-cyan-900 rounded-lg p-6 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 backdrop-blur-md group overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400 opacity-50 group-hover:opacity-100"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400 opacity-50 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400 opacity-50 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400 opacity-50 group-hover:opacity-100"></div>

              <div className="flex items-center justify-between mb-6 border-b border-cyan-900/50 pb-2">
                <h3 className="text-xs md:text-sm text-pink-400 tracking-wider" style={{ fontFamily: '"Press Start 2P", cursive' }}>{group.category}</h3>
                <span className="text-[10px] font-mono text-gray-500">[{index + 1}/3]</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 rounded bg-black/40 border border-transparent hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all group/skill"
                  >
                    <div className="text-2xl mb-2 text-cyan-500 group-hover/skill:text-cyan-300 group-hover/skill:drop-shadow-[0_0_8px_rgba(6,182,212,1)] transition-all transform group-hover/skill:scale-110">
                      {skill.icon}
                    </div>
                    <p className="text-[10px] font-mono text-gray-400 group-hover/skill:text-white text-center break-words w-full">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

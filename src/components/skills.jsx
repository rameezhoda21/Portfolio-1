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
    <section id="skills" className="text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl text-cyan-400 mb-12 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>Skills</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-cyan-500 rounded-xl p-6 shadow hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-1xl text-cyan-400 mb-5" style={{ fontFamily: '"Press Start 2P", cursive' }}>{group.category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-cyan-300 hover:text-white transition-transform hover:scale-110"
                  >
                    <div className="text-3xl mb-1">{skill.icon}</div>
                    <p className="text-sm">{skill.name}</p>
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

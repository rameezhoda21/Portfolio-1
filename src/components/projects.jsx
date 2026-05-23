'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project data
const projects = [
  {
    title: 'IBA RAG Chatbot',
    description:
      'A RAG-based chatbot for IBA students and faculty. Built with Streamlit for a seamless interactive experience.',
    url: 'https://github.com/rameezhoda21/iba-rag',
    website: 'https://iba-rag-n6ypurakcqkhcvkbjvhd8j.streamlit.app/',
    image: '/iba rag.jfif',
    tags: ['Python', 'Streamlit', 'PineconeDB'],
  },
  {
    title: 'University Management System',
    description:
      'A comprehensive web-based University Management System to streamline academic and administrative tasks.',
    url: 'https://github.com/aghamohsinh/Software-Project',
    website: 'https://software-project-ashy.vercel.app/login',
    image: '/ums.jfif',
    tags: ['React', 'Web Development', 'Gemini API'],
  },
  {
    title: 'Football Quiz',
    description:
      '5 categories of football quizzes. Includes a timer and score tracking with leaderboard functionality.',
    url: 'https://github.com/rameezhoda21/football-quiz',
    website: 'https://football-quiz-psi.vercel.app/',
    image: '/football quiz.png',
    tags: ['React', 'TailwindCSS', 'Framer-motion'],
  },
  {
    title: 'Library Management System',
    description:
      'A comprehensive web-based Library Management System connected to a database.',
    url: 'https://github.com/rameezhoda21/db-project',
    website: 'https://db-project-ktjc-git-main-rameez-hodas-projects.vercel.app/login',
    image: '/library.png',
    tags: ['React', 'MySQL', 'Web Development'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-cyan-400 mb-5 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>Featured Projects</h2>
        <p className="text-gray-400 font-orbitron text-base text-center mb-10" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Here are some of my recent projects.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="group relative bg-zinc-950/80 border border-cyan-900 rounded-lg p-6 shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-md overflow-hidden"
            >
              {/* Scanline overlay for the card */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Top glowing edge */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Project Image */}
              <div className="mb-5 overflow-hidden rounded border border-cyan-900 relative">
                <img 
                  src={proj.image} 
                  alt={`${proj.title} preview`} 
                  className="w-full h-48 object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-color"></div>
              </div>

              <h3 className="text-sm md:text-base text-cyan-400 mb-4 group-hover:text-pink-400 transition-colors flex items-center gap-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>
                <span className="text-pink-500 text-xs hidden group-hover:inline-block animate-pulse">&gt;</span> {proj.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase tracking-wider font-mono bg-cyan-950/50 text-cyan-300 border border-cyan-700/50 px-2 py-1 rounded shadow-inner"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mb-6 font-mono text-xs md:text-sm leading-relaxed relative z-10">{proj.description}</p>

              <div className="flex justify-end gap-4 relative z-10">
                {proj.website && (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] transition-all"
                    aria-label={`Visit ${proj.title} website`}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] transition-all"
                  aria-label={`View ${proj.title} on GitHub`}
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

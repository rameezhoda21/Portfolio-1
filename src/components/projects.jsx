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
    tags: ['Python', 'Streamlit', 'RAG'],
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
    tags: ['React', 'Oracle'],
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
              className="relative bg-zinc-900 border border-cyan-500 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition-transform duration-300 transform hover:-translate-y-2 backdrop-blur-md"
            >
              {/* Project Image */}
              <div className="mb-5 overflow-hidden rounded-lg border border-cyan-900">
                <img 
                  src={proj.image} 
                  alt={`${proj.title} preview`} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-1xl text-cyan-400 mb-5" style={{ fontFamily: '"Press Start 2P", cursive' }}>{proj.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-cyan-800/20 text-cyan-300 border border-cyan-500 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mb-6">{proj.description}</p>

              <div className="flex justify-end gap-3">
                {proj.website && (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 transition"
                    aria-label={`Visit ${proj.title} website`}
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 transition"
                  aria-label={`View ${proj.title} on GitHub`}
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

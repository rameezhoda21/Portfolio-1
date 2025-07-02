'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Project data
const projects = [
  {
    title: 'Kalman Filter',
    description:
      'Kalman Filter implemented using RISC-V vector ISA (RV32I). Simulated on VEER.',
    url: 'https://github.com/RamisKamlani/Group-CAALMAN-FILTER',
    tags: ['RISC-V', 'C', 'HDL'],
  },
  {
    title: 'Fake News Detector',
    description:
      'A terminal-based tool that classifies news headlines or articles as REAL or FAKE using TF-IDF and a tuned Naive Bayes model.',
    url: 'https://github.com/rameezhoda21/Fake-News-Detector',
    tags: ['Python', 'NLP', 'Scikit-learn'],
  },
  {
    title: 'TicTacToe',
    description:
      'A simple TicTacToe game implemented using HTML, CSS, and JavaScript. Play against your friend.',
    url: 'https://github.com/rameezhoda21/tictactoe',
    tags: ['JavaScript', 'HTML', 'CSS'],
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

              <div className="flex justify-end">
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

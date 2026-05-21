import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="text-white py-20 px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl text-cyan-400 mb-5 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>Contact</h2>
        <p className="text-gray-400 font-orbitron text-base text-center mb-10" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Ready to collaborate or just say hello? Reach out through any of these channels.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 mb-8">
          <a
            href="mailto:rameezhoda21@gmail.com"
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-cyan-400 transition-transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={40} />
            <span className="font-orbitron" style={{ fontFamily: 'Orbitron, sans-serif' }}>Email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/syed-rameez-ul-hoda-9a4794276"
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-cyan-400 transition-transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
            <span className="font-orbitron" style={{ fontFamily: 'Orbitron, sans-serif' }}>LinkedIn</span>
          </a>

          <a
            href="https://github.com/rameezhoda21"
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-cyan-400 transition-transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
            <span className="font-orbitron" style={{ fontFamily: 'Orbitron, sans-serif' }}>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
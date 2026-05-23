import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="text-white py-32 px-8 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center bg-zinc-950/80 border border-cyan-500/50 p-10 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md relative overflow-hidden group"
      >
        {/* Animated border lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        
        <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          <span className="text-pink-500 mr-2 blink">&gt;</span>INIT_CONTACT
        </h2>
        
        <div className="font-mono text-xs md:text-sm text-gray-400 mb-10 bg-black/60 p-4 border-l-2 border-pink-500 inline-block text-left">
          <p className="text-cyan-500 mb-1">$ sys.transmit_message()</p>
          <p>Ready to collaborate or interact?</p>
          <p>Select a secure transmission channel below.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
          <a
            href="mailto:rameezhoda21@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-cyan-950/40 border border-cyan-800 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-900/50 transition-all px-6 py-4 rounded shadow-inner hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group/btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} className="group-hover/btn:drop-shadow-[0_0_8px_rgba(6,182,212,1)]" />
            <span className="font-mono text-sm tracking-widest font-bold">EMAIL</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/syed-rameez-ul-hoda-9a4794276"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-cyan-950/40 border border-cyan-800 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-900/50 transition-all px-6 py-4 rounded shadow-inner hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group/btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="group-hover/btn:drop-shadow-[0_0_8px_rgba(6,182,212,1)]" />
            <span className="font-mono text-sm tracking-widest font-bold">LINKEDIN</span>
          </a>

          <a
            href="https://github.com/rameezhoda21"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-cyan-950/40 border border-cyan-800 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-900/50 transition-all px-6 py-4 rounded shadow-inner hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group/btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="group-hover/btn:drop-shadow-[0_0_8px_rgba(6,182,212,1)]" />
            <span className="font-mono text-sm tracking-widest font-bold">GITHUB</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
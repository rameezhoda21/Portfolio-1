import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen text-white flex flex-col items-center justify-center text-center relative px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        {/* Terminal Text Intro */}
        <div className="mb-4 text-sm md:text-lg text-left w-full max-w-3xl font-mono text-gray-400">
          <span className="text-pink-500 hover:text-pink-400 transition-colors">guest@portfolio</span>
          <span className="text-gray-300">:</span>
          <span className="text-cyan-400">~</span>$ whoami
        </div>
        
        {/* Glitching / Glowing Name */}
        <h1 
          className="text-4xl md:text-6xl text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] select-none" 
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          Rameez Hoda
        </h1>
        
        {/* Typewriter Effect Container */}
        <div className="mt-4 text-lg md:text-2xl text-gray-300 h-16 font-orbitron flex items-center justify-center gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <span className="text-pink-500 blink">&gt;</span>
          <Typewriter
            words={['Crafting web experiences', 'Exploring data patterns', 'Building innovative solutions']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a href="#projects" className="group relative px-6 py-4 font-bold text-black bg-cyan-400 rounded-sm overflow-hidden hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:-translate-y-1" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.6rem' }}>
            <span className="relative z-10">[ VIEW PROJECTS ]</span>
          </a>
          <a href="#contact" className="group relative px-6 py-4 font-bold text-cyan-400 bg-transparent border-2 border-cyan-400 rounded-sm overflow-hidden hover:bg-cyan-900/30 transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-1" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.6rem' }}>
            <span className="relative z-10">[ INIT CONTACT ]</span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}

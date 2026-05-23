
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen text-white p-10 flex items-center justify-center relative"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl w-full"
      >
        <div className="flex flex-col md:flex-row gap-0 items-stretch bg-zinc-900/80 backdrop-blur-md border border-cyan-500/50 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-shadow duration-500">
          
          {/* Terminal Header for the entire card */}
          <div className="w-full bg-zinc-950 border-b border-cyan-500/50 p-3 flex items-center gap-2 absolute top-0 left-0">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_theme(colors.red.500)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_theme(colors.yellow.500)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_theme(colors.green.500)]"></div>
            <span className="ml-4 text-xs font-mono text-cyan-400/70 select-none">dossier.exe - bash</span>
          </div>

          {/* Left Side: Avatar Holder / Scan */}
          <div className="w-full md:w-1/3 flex flex-col items-center bg-black/40 p-8 pt-20 border-b md:border-b-0 md:border-r border-cyan-800/50">
            <div className="relative w-48 h-48 border-2 border-cyan-400 rounded-md overflow-hidden p-1 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-cyan-950 flex items-center justify-center relative overflow-hidden group">
                <span className="text-cyan-500 font-mono text-xs text-center px-2 animate-pulse">[ IMAGE DATA<br/>CORRUPTED ]</span>
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_theme(colors.cyan.400)] animate-scan"></div>
              </div>
            </div>
            
            <div className="mt-8 w-full bg-black/80 border border-cyan-700/50 p-3 rounded text-center text-xs font-mono text-cyan-300 shadow-inner">
              <p className="mb-1 text-gray-500">USER_ID: <span className="text-cyan-400">#8086-INIT</span></p>
              <p className="mb-1 text-gray-500">STATUS: <span className="text-green-400">ONLINE</span></p>
              <p className="text-gray-500">CLASS: <span className="text-pink-400">DEVELOPER</span></p>
            </div>
          </div>

          {/* Right Side: Text & Stats */}
          <div className="w-full md:w-2/3 flex flex-col justify-center p-8 pt-20">
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-8 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] flex items-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
              <span className="text-pink-500 mr-3 animate-pulse">&gt;</span>ABOUT_ME
            </h2>
            
            <div className="font-orbitron tracking-wide text-gray-300 text-sm md:text-base leading-relaxed mb-10 border-l-2 border-cyan-500/50 pl-4 py-2 bg-gradient-to-r from-cyan-900/10 to-transparent">
              <p className="mb-4">
                I&apos;m a 3rd-year <span className="text-cyan-400 font-bold">Computer Science student</span> at the Institute of Business Administration.
              </p>
              <p className="mb-4">
                I have a strong interest in <span className="text-pink-400 font-bold">AI/ML</span> and <span className="text-cyan-400 font-bold">web development</span>. I enjoy exploring how technology can be used to solve real-world problems and create useful, user-friendly digital solutions. I&apos;m always looking to improve my skills through projects, learning, and hands-on experience.
              </p>
              <p>
                Outside of academics and tech, I&apos;m a <span className="text-cyan-400 font-bold">football enthusiast</span> who enjoys the teamwork, strategy, and passion the game brings.
              </p>
            </div>

            {/* Terminal Style Skill Output */}
            <div className="space-y-4 font-mono text-xs md:text-sm bg-black/50 p-4 rounded border border-gray-800">
              <div className="flex items-center text-gray-400 mb-2">
                <span className="text-pink-500 mr-2">~</span>$ ./load_core_skills.sh
              </div>
              
              <div>
                <div className="flex justify-between text-cyan-300 mb-1">
                  <span>[SYS.SKILL] WEB_DEV</span>
                  <span>[||||||||  ]</span>
                </div>
                <div className="w-full bg-gray-800 h-1.5 rounded overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '80%' }} 
                    transition={{ duration: 1.5, delay: 0.5 }} 
                    viewport={{ once: true }}
                    className="bg-cyan-400 h-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  ></motion.div>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="flex justify-between text-pink-400 mb-1">
                  <span>[SYS.SKILL] AI_ML</span>
                  <span>[|||||||   ]</span>
                </div>
                <div className="w-full bg-gray-800 h-1.5 rounded overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '75%' }} 
                    transition={{ duration: 1.5, delay: 0.8 }} 
                    viewport={{ once: true }}
                    className="bg-pink-500 h-full shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                  ></motion.div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';

const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for glassmorphism and neon border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-md border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
          : 'bg-transparent border-cyan-600/20 shadow-none'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Terminal Style Logo */}
        <a 
          href="#home" 
          className="text-cyan-400 tracking-wide hover:text-cyan-200 transition-colors" 
          style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.8rem' }}
        >
          <span className="text-pink-500">~/</span>Rameez<span className="animate-pulse">_</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm tracking-wider uppercase">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <li key={item} className="relative">
                <a
                  href={`#${sectionId}`}
                  className={`transition duration-300 ${
                    isActive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </a>
                {/* Active indicator underline */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)] rounded"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)} 
            className="text-cyan-400 hover:text-cyan-300 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-cyan-500 text-white px-6 py-6 space-y-6 text-center shadow-[0_5px_15px_rgba(6,182,212,0.2)]">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <li key={item}>
                <a
                  href={`#${sectionId}`}
                  onClick={() => setOpen(false)}
                  className={`block text-lg tracking-widest uppercase transition-colors ${
                    isActive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-gray-300 hover:text-cyan-200'
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

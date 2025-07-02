import React, { useState } from 'react';

const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-cyan-600/20 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Logo or Title */}
        <h1 className="text-cyan-400 text-0.5xl tracking-wide" style={{ fontFamily: '"Press Start 2P", cursive' }}>RAMEEZ HODA</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm tracking-wider uppercase">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition"
              >
                <span className="hover-underline">{item}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-cyan-400 text-xl">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black/90 text-white px-6 pb-4 space-y-4 text-center">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-gray-300 hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

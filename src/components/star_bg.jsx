// src/components/StarBackground.jsx
import React from "react";

export function StarBackground() {
  const stars = Array.from({ length: 80 });
  const meteors = Array.from({ length: 6 });

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
      {/* Faint nebula-like glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 via-black to-black" />

      {/* Stars */}
      {stars.map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((_, i) => (
        <div
          key={`m-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-meteor"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        />
      ))}
    </div>
  );
}

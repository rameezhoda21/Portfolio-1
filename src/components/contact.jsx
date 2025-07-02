import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="text-white py-20 px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl text-cyan-400 mb-5 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>Contact</h2>
        <p  className="text-gray-400 font-orbitron text-base text-center mb-10" style={{ fontFamily: 'Orbitron, sans-serif' }}>Ready to collaborate or just say hello? Send a transmission below.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-zinc-800 border border-cyan-500 rounded" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-zinc-800 border border-cyan-500 rounded" />
          <textarea placeholder="Message" className="w-full px-4 py-2 bg-zinc-800 border border-cyan-500 rounded h-32"></textarea>
          <button className="w-full bg-cyan-500 text-black py-2 rounded hover:bg-cyan-400">Send Transmission</button>
        </form>
      </div>
    </section>
  );
}
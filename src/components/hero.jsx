import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen text-white flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-4xl text-cyan-400" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        Hi, I'm Rameez Hoda</h1>
      <p className="mt-4 text-xl text-gray-300">
        <Typewriter
          words={['Building futuristic UIs', 'Designing interactive systems', 'Crafting sci-fi inspired websites']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </section>
  );
}

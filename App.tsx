import { NeuralNetwork } from '@/components/NeuralNetwork';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Solution } from '@/sections/Solution';
import { Directions } from '@/sections/Directions';
import { WhatsInside } from '@/sections/WhatsInside';
import { Result } from '@/sections/Result';
import { Comparison } from '@/sections/Comparison';
import { Price } from '@/sections/Price';
import { Guarantee } from '@/sections/Guarantee';
import { FAQ } from '@/sections/FAQ';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0E17] text-white overflow-x-hidden">
      {/* Neural network background */}
      <NeuralNetwork />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <Directions />
        <WhatsInside />
        <Result />
        <Comparison />
        <Price />
        <Guarantee />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;

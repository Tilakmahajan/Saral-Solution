import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TriplePillar from './components/TriplePillar';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-dark text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TriplePillar />
        <About />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

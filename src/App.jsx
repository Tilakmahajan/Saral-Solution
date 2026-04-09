import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TriplePillar from './components/TriplePillar';
import About from './components/About';
import SaralProcess from './components/SaralProcess';
import ResourceHub from './components/ResourceHub';
import SocialProof from './components/SocialProof';
import LeadMagnet from './components/LeadMagnet';
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
        <SaralProcess />
        <ResourceHub />
        <SocialProof />
        <LeadMagnet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

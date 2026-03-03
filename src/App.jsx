import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <About />      
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Courses', to: 'courses' },
    { name: 'Features', to: 'features' },
    { name: 'About Us', to: 'about' },
    { name: 'Batches', to: 'batches' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4 border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex items-center justify-center cursor-pointer bg-gradient-to-br from-slate-900 to-slate-800 p-2 md:p-2.5 rounded-xl shadow-lg border border-slate-700/50 transition-transform hover:scale-105">
            <img src="/logo.png" alt="Saral Solutions" className="h-6 md:h-7 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className={`text-[15px] font-semibold tracking-wide cursor-pointer transition-colors border-b-2 border-transparent hover:border-primary pb-1 ${scrolled ? 'text-slate-700 hover:text-primary' : 'text-slate-800 hover:text-primary'} uppercase`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:shadow-primary/20 font-bold transition-all duration-300 cursor-pointer text-[14px] uppercase tracking-wider transform hover:-translate-y-0.5 border-2 border-transparent hover:border-blue-400"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}></div>
      
      {/* Mobile Nav Content */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-2 rounded-lg shadow-md border border-slate-700/50">
              <img src="/logo.png" alt="Saral Solutions" className="h-6 w-auto object-contain" />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col gap-1 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-slate-700 hover:text-primary hover:bg-slate-50 font-bold tracking-wide py-3 px-4 rounded transition-colors cursor-pointer border-b border-slate-50 last:border-0 uppercase text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full bg-primary hover:bg-blue-700 text-white text-center rounded-xl py-4 font-bold tracking-widest uppercase shadow-md hover:shadow-lg block cursor-pointer transition-all border border-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Agency', to: 'agency' },
    { name: 'Software', to: 'software' },
    { name: 'Education', to: 'education' },
    { name: 'Resources', to: 'resources' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3 shadow-2xl shadow-black/50' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img src="/logo.png" alt="Saral Solutions" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="relative px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white cursor-pointer transition-colors duration-200 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-all duration-200" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={800}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </Link>
            <Link
              to="lead-magnet"
              smooth={true}
              offset={-80}
              duration={800}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold shimmer-btn hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
            >
              <Zap size={15} className="text-yellow-300" />
              Free Audit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-50 lg:hidden"
              style={{ background: '#0D1426', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                  <img src="/logo.png" alt="Saral Solutions" className="h-9 w-auto object-contain" />
                  <button className="p-2 text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>
                    <X size={22} />
                  </button>
                </div>

                <div className="flex flex-col gap-1 flex-grow">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="flex items-center py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-[15px] cursor-pointer transition-all border-b border-white/5 last:border-0"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <Link
                    to="lead-magnet"
                    smooth={true}
                    duration={500}
                    className="w-full shimmer-btn text-white text-center rounded-xl py-3.5 font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap size={16} className="text-yellow-300" /> Get Free Audit
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

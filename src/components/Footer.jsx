import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-12 lg:col-span-4 lg:pr-12">
            <div className="flex items-center gap-2 mb-8">
              <img src="/logo.png" alt="Saral Solutions" className="h-[72px] w-auto object-contain drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]" />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              Empowering Jalgaon's Digital Future through Code and Creativity. Creating job-ready professionals for the modern IT landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-slate-300 hover:text-white transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 text-slate-300 hover:text-white transform hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 text-slate-300 hover:text-white transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 text-slate-300 hover:text-white transform hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="home" smooth={true} duration={800} className="text-slate-400 font-medium hover:text-primary-light cursor-pointer transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Home</Link></li>
              <li><Link to="about" smooth={true} duration={800} className="text-slate-400 font-medium hover:text-primary-light cursor-pointer transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> About Us</Link></li>
              <li><Link to="courses" smooth={true} duration={800} className="text-slate-400 font-medium hover:text-primary-light cursor-pointer transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Courses</Link></li>
              <li><Link to="features" smooth={true} duration={800} className="text-slate-400 font-medium hover:text-primary-light cursor-pointer transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Advantages</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Premium Courses</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Java Full Stack</li>
              <li className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Python Full Stack</li>
              <li className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> .NET Full Stack</li>
              <li className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Core Programming</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Reach Out</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary-light mt-1" size={20} />
                <span className="text-slate-400 font-medium leading-relaxed">M.J. College Road, Jalgaon,<br/> Maharashtra 425001, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-secondary" size={20} />
                <span className="text-slate-400 font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-accent" size={20} />
                <span className="text-slate-400 font-medium">info@saralsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-sm">
            &copy; {new Date().getFullYear()} Saral Solutions. Crafted with absolute precision.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm font-semibold transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm font-semibold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

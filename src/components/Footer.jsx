import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const footerLinks = {
  Education: [
    { label: 'Full Stack Dev', to: 'education' },
    { label: 'Digital Marketing', to: 'education' },
    { label: 'AI & Automation', to: 'education' },
    { label: 'Live Webinars', to: 'education' },
    { label: 'Enroll Now', to: 'contact' },
  ],
  Agency: [
    { label: 'Brand Strategy', to: 'agency' },
    { label: 'Performance Ads', to: 'agency' },
    { label: 'SEO & Content', to: 'agency' },
    { label: 'Social Media', to: 'agency' },
  ],
  Software: [
    { label: 'SaralCRM', to: 'software' },
    { label: 'SaralFlow', to: 'software' },
    { label: 'SaralInsights', to: 'software' },
    { label: 'Custom SaaS', to: 'contact' },
    { label: 'Book Demo', to: 'contact' },
  ],
};

const socials = [
  { icon: <Facebook size={18} />, href: '#', color: 'hover:bg-blue-600 hover:border-blue-600' },
  { icon: <Twitter size={18} />, href: '#', color: 'hover:bg-sky-500 hover:border-sky-500' },
  { icon: <Instagram size={18} />, href: '#', color: 'hover:bg-pink-600 hover:border-pink-600' },
  { icon: <Linkedin size={18} />, href: '#', color: 'hover:bg-blue-700 hover:border-blue-700' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#060C18' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary via-accent to-gold opacity-60" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <img src="/logo.png" alt="Saral Solutions" className="h-12 w-auto object-contain mb-6" />

            <p className="text-slate-400 leading-relaxed mb-6 max-w-xs font-medium">
              Saral Solution is Jalgaon's premier hybrid firm — combining a <span className="text-white font-semibold">Marketing Agency</span>, <span className="text-white font-semibold">SaaS Platform</span>, and <span className="text-white font-semibold">Education Center</span> under one roof.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 ${s.color} hover:text-white transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Division pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: '🎓 Education', color: 'text-gold bg-gold/10 border-gold/20' },
                { label: '📈 Agency', color: 'text-primary bg-primary/10 border-primary/20' },
                { label: '⚙️ SaaS', color: 'text-accent bg-accent/10 border-accent/20' },
              ].map((d) => (
                <span key={d.label} className={`text-xs font-bold px-3 py-1 rounded-full border ${d.color}`}>
                  {d.label}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([division, links]) => {
            const colorMap = {
              Agency: 'text-primary',
              Software: 'text-accent',
              Education: 'text-gold',
            };
            return (
              <div key={division} className="lg:col-span-2">
                <h4 className={`text-sm font-black uppercase tracking-widest mb-5 ${colorMap[division]}`}>
                  {division}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        smooth={true}
                        offset={-80}
                        duration={800}
                        className="text-slate-500 hover:text-white text-sm font-medium cursor-pointer transition-colors flex items-center gap-1.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-current transition-colors flex-shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest mb-5 text-slate-300">
              Reach Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-500 text-sm leading-relaxed">DSP Chouk, Jalgaon, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-400 flex-shrink-0" />
                <span className="text-slate-500 text-sm">+91 8080068554</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span className="text-slate-500 text-sm break-all">1234klapeshmj@gmail.com</span>
              </li>
            </ul>

            {/* Quick Contact */}
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={800}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl shimmer-btn text-white text-xs font-bold cursor-pointer hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Get In Touch <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} <span className="text-slate-400 font-semibold">Saral Solution</span>. All rights reserved. Built with precision in Jalgaon.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-600 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

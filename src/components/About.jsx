import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, MapPin } from 'lucide-react';

const partners = [
  { name: 'Balwishwa Vidyalay', logo: '/partners/Balwishwa vidyalay.jfif.jpeg', category: 'Education' },
  { name: "Banjo's", logo: '/partners/banjos.png', category: 'F&B' },
  { name: 'Browletto', logo: '/partners/browletto.jfif.jpeg', category: 'Beauty' },
  { name: 'Finlegia', logo: '/partners/finlegia.jfif.jpeg', category: 'Finance' },
  { name: 'Hotel Khandesh Wada', logo: '/partners/hotelkhandeshwada.jfif.jpeg', category: 'Food' },
  { name: 'Lapinozz Jalgaon', logo: '/partners/lapinozz jalgaon.png', category: 'F&B' },
  { name: 'Poshakh', logo: '/partners/poshakh.jfif.jpeg', category: 'Fashion' },
  { name: 'Thick Shake Therapy', logo: '/partners/thichshaketherapy.jfif.jpeg', category: 'F&B' },
];

const stats = [
  { value: '5+', label: 'Years of Excellence', icon: <Award size={18} />, color: 'text-gold' },
  { value: '120+', label: 'Clients Served', icon: <Users size={18} />, color: 'text-primary' },
  { value: '3', label: 'Service Divisions', icon: <CheckCircle size={18} />, color: 'text-accent' },
  { value: 'Jalgaon', label: 'Headquarters, MH', icon: <MapPin size={18} />, color: 'text-emerald-400' },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: '#08101D' }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/25 text-gold text-sm font-semibold mb-5"
            >
              <Award size={14} /> Who We Are
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
            >
              Jalgaon's Premier <br />
              <span className="text-gradient-gold">Growth Partner</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              Saral Solution was founded with a simple belief — businesses deserve world-class marketing, software, and talent development without leaving Jalgaon. We are the only firm in the region combining all three under one roof.
            </motion.p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl border border-white/8 p-5 text-center min-w-[130px]"
              >
                <div className={`flex justify-center mb-2 ${s.color}`}>{s.icon}</div>
                <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-slate-500 text-xs font-medium leading-tight mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Logos Grid — Static, always visible */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Trusted By</p>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Our <span className="text-gradient">Partner Brands</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative glass-card rounded-2xl border border-white/8 p-5 flex flex-col items-center gap-3 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                {/* Category pill */}
                <span className="absolute top-3 right-3 text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
                  {partner.category}
                </span>

                {/* Logo container */}
                <div className="w-full h-20 flex items-center justify-center overflow-hidden rounded-xl bg-white/5 p-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="text-slate-300 text-sm font-bold text-center">${partner.name}</span>`;
                    }}
                  />
                </div>

                <p className="text-slate-400 text-xs font-semibold text-center group-hover:text-white transition-colors leading-tight">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-slate-600 text-xs font-medium mt-8"
          >
            Proudly serving local businesses across Jalgaon, Maharashtra
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

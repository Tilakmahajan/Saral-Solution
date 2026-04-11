import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Play, TrendingUp, Users, Cpu } from 'lucide-react';
import { Link } from 'react-scroll';

const metrics = [
  { value: '120+', label: 'Clients Served', icon: <Users size={16} />, color: 'text-primary' },
  { value: '35+', label: 'SaaS Tools Built', icon: <Cpu size={16} />, color: 'text-accent' },
  { value: '500+', label: 'Learners Enrolled', icon: <BookOpen size={16} />, color: 'text-gold' },
  { value: '3x', label: 'Avg. ROI Delivered', icon: <TrendingUp size={16} />, color: 'text-emerald-400' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark">

      {/* --- Animated Background --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-100" />

        {/* Orb 1 — Blue */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-20 w-[700px] h-[700px] rounded-full animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
        />
        {/* Orb 2 — Gold */}
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 70%)' }}
        />
        {/* Orb 3 — Purple */}
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)' }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

          {/* --- Left: Content --- */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-primary text-sm font-semibold mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Education · Agency · Software
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] mb-6 tracking-tight">
              <span className="text-white">Simplifying Growth</span>{' '}
              <br className="hidden lg:block" />
              <span className="text-white">Through </span>
              <span className="text-gradient">Knowledge,</span>
              <br className="hidden sm:block" />
              <span className="text-white">Strategy</span>
              <span className="text-slate-400">, and </span>
              <span className="text-gradient-gold">Software.</span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              One hybrid firm that upskills your team, markets your brand, and builds your software — everything you need to scale, under one roof.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="triple-pillar"
                smooth={true}
                offset={-80}
                duration={800}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full shimmer-btn text-white font-bold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="education"
                smooth={true}
                offset={-80}
                duration={800}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full glass border border-white/10 text-white font-bold text-base hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Play size={16} className="fill-white" />
                Start Learning
              </Link>
            </div>

            {/* Metric Pills */}
            <div className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/8"
                >
                  <span className={m.color}>{m.icon}</span>
                  <span className={`font-black text-sm ${m.color}`}>{m.value}</span>
                  <span className="text-slate-400 text-xs font-medium">{m.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Right: Floating Visual --- */}
          <motion.div
            className="w-full lg:w-1/2 relative lg:-mt-[350px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-gold/10 rounded-3xl blur-3xl scale-110" />

              {/* Main card */}
              <div className="relative glass-card rounded-3xl p-8 border border-white/8">
                {/* Three pillar mini-cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Education Hub', color: 'from-gold/20 to-gold/5', border: 'border-gold/30', dot: 'bg-gold', icon: '🎓' },
                    { label: 'Marketing Agency', color: 'from-primary/20 to-primary/5', border: 'border-primary/30', dot: 'bg-primary', icon: '📈' },
                    { label: 'SaaS Platform', color: 'from-accent/20 to-accent/5', border: 'border-accent/30', dot: 'bg-accent', icon: '⚙️' },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform duration-300`}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                    >
                      <span className="text-2xl">{card.icon}</span>
                      <p className="text-[10px] font-bold text-slate-300 leading-tight">{card.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Banner injected here */}
                <div className="bg-white/5 rounded-2xl p-2 border border-white/10 shadow-lg overflow-hidden scale-105 my-4 backdrop-blur-md">
                  <img 
                    src="/Banner.png" 
                    alt="Saral Solutions Banner" 
                    className="w-full h-auto rounded-xl object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  />
                </div>

                {/* Bottom row */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['💼','🚀','🎯'].map((e, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-dark-lighter border-2 border-dark flex items-center justify-center text-sm">{e}</div>
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs"><span className="text-white font-semibold">120+ businesses</span> already scaling with Saral</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">Scroll</p>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

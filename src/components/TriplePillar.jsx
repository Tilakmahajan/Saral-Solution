import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, BarChart3, Megaphone, ArrowRight,
  Server, Cpu, Layers, Bot,
  GraduationCap, BookOpen, Users, Video,
  Zap, Shield, Star
} from 'lucide-react';
import { Link } from 'react-scroll';

const pillars = [
  {
    id: 'agency',
    tag: 'Division 01',
    title: 'Marketing Agency',
    headline: 'ROI-Driven Brand Strategy',
    description: 'We don\'t just run ads. We architect full-funnel growth systems — SEO, paid media, content, and brand positioning that converts.',
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
    emoji: '📈',
    color: 'blue',
    gradient: 'from-primary/20 via-blue-500/10 to-transparent',
    border: 'border-primary/25',
    hoverBorder: 'hover:border-primary/60',
    glowClass: 'glow-blue',
    borderGlow: 'border-glow-blue',
    accentColor: '#3B82F6',
    metrics: [
      { label: 'Avg. ROI', value: '340%', icon: <TrendingUp size={14} /> },
      { label: 'Clients', value: '80+', icon: <Users size={14} /> },
      { label: 'Campaigns', value: '200+', icon: <BarChart3 size={14} /> },
    ],
    services: ['Brand Identity', 'Performance Ads', 'SEO & Content', 'Social Media'],
    cta: { label: 'Free Marketing Audit', to: 'lead-magnet' },
    ctaSecondary: { label: 'View Agency Work', to: 'contact' },
    icons: [<BarChart3 size={18} />, <Megaphone size={18} />, <TrendingUp size={18} />],
  },
  {
    id: 'software',
    tag: 'Division 02',
    title: 'SaaS & Software',
    headline: 'Automation & Infrastructure',
    description: 'Custom SaaS platforms, automation workflows, and tech infrastructure built to eliminate bottlenecks and scale your operations.',
    icon: <Server size={32} strokeWidth={1.5} />,
    emoji: '⚙️',
    color: 'purple',
    gradient: 'from-accent/20 via-purple-500/10 to-transparent',
    border: 'border-accent/25',
    hoverBorder: 'hover:border-accent/60',
    glowClass: 'glow-purple',
    borderGlow: 'border-glow-purple',
    accentColor: '#8B5CF6',
    metrics: [
      { label: 'Tools Built', value: '35+', icon: <Cpu size={14} /> },
      { label: 'Uptime', value: '99.9%', icon: <Shield size={14} /> },
      { label: 'Integrations', value: '50+', icon: <Layers size={14} /> },
    ],
    services: ['SaaS Development', 'API Integrations', 'AI Automation', 'Cloud Architecture'],
    cta: { label: 'Request SaaS Demo', to: 'lead-magnet' },
    ctaSecondary: { label: 'View Products', to: 'resources' },
    icons: [<Cpu size={18} />, <Bot size={18} />, <Server size={18} />],
  },
  {
    id: 'education',
    tag: 'Division 03',
    title: 'Education Center',
    headline: 'Workshops & Upskilling',
    description: 'Hands-on workshops, live cohorts, and certification programs designed to close the skills gap for professionals and freshers alike.',
    icon: <GraduationCap size={32} strokeWidth={1.5} />,
    emoji: '🎓',
    color: 'gold',
    gradient: 'from-gold/20 via-yellow-500/10 to-transparent',
    border: 'border-gold/25',
    hoverBorder: 'hover:border-gold/60',
    glowClass: 'glow-gold',
    borderGlow: 'border-glow-gold',
    accentColor: '#F59E0B',
    metrics: [
      { label: 'Learners', value: '500+', icon: <Users size={14} /> },
      { label: 'Courses', value: '15+', icon: <BookOpen size={14} /> },
      { label: 'Live Sessions', value: '200+', icon: <Video size={14} /> },
    ],
    services: ['Full Stack Dev', 'Digital Marketing', 'AI & ML Basics', 'Business Workshops'],
    cta: { label: 'Browse Courses', to: 'resources' },
    ctaSecondary: { label: 'Upcoming Webinars', to: 'resources' },
    icons: [<GraduationCap size={18} />, <Video size={18} />, <BookOpen size={18} />],
  },
];

const colorMap = {
  blue: { text: 'text-primary', bg: 'bg-primary/10', pill: 'bg-primary/15 border-primary/30 text-primary' },
  purple: { text: 'text-accent', bg: 'bg-accent/10', pill: 'bg-accent/15 border-accent/30 text-accent' },
  gold: { text: 'text-gold', bg: 'bg-gold/10', pill: 'bg-gold/15 border-gold/30 text-gold' },
};

const PillarCard = ({ pillar, index }) => {
  const [hovered, setHovered] = useState(false);
  const c = colorMap[pillar.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`group relative flex flex-col h-full rounded-3xl border ${pillar.border} ${pillar.hoverBorder} transition-all duration-500 overflow-hidden cursor-default`}
      style={{ background: 'rgba(15, 23, 42, 0.7)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={hovered ? { boxShadow: `0 0 40px ${pillar.accentColor}33` } : { boxShadow: 'none' }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 p-7 flex flex-col h-full">
        {/* Tag */}
        <div className="flex items-center justify-between mb-6">
          <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${c.pill}`}>
            {pillar.tag}
          </span>
          <div className={`flex gap-1.5`}>
            {pillar.icons.map((ic, i) => (
              <div key={i} className={`w-7 h-7 rounded-lg ${c.bg} flex items-center justify-center ${c.text} opacity-60 group-hover:opacity-100 transition-opacity delay-${i * 75}`}>
                {ic}
              </div>
            ))}
          </div>
        </div>

        {/* Icon + Title */}
        <div className={`w-16 h-16 rounded-2xl ${c.bg} border border-white/8 flex items-center justify-center mb-5 ${c.text} group-hover:scale-110 transition-transform duration-400`}>
          {pillar.icon}
        </div>

        <h3 className="text-2xl font-black text-white mb-1">{pillar.title}</h3>
        <p className={`text-sm font-bold mb-4 ${c.text}`}>{pillar.headline}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{pillar.description}</p>

        {/* Services tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pillar.services.map((s) => (
            <span key={s} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-slate-300 text-xs font-semibold">{s}</span>
          ))}
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-2xl bg-black/20 border border-white/5">
          {pillar.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className={`text-lg font-black ${c.text}`}>{m.value}</p>
              <p className="text-slate-500 text-[10px] font-medium leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2">
          <Link
            to={pillar.cta.to}
            smooth={true}
            offset={-80}
            duration={800}
            className={`w-full py-3 rounded-xl font-bold text-sm text-center cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
            style={{ background: `${pillar.accentColor}22`, border: `1px solid ${pillar.accentColor}44`, color: pillar.accentColor }}
            onMouseEnter={e => { e.currentTarget.style.background = `${pillar.accentColor}33`; }}
            onMouseLeave={e => { e.currentTarget.style.background = `${pillar.accentColor}22`; }}
          >
            {pillar.cta.label}
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const TriplePillar = () => {
  return (
    <section id="triple-pillar" className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-slate-300 text-sm font-semibold mb-6"
          >
            <Star size={14} className="text-gold" /> Three Pillars, One Vision
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Everything You Need{' '}
            <span className="text-gradient">to Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Saral Solution operates three synergistic divisions that work together to grow your business end-to-end — from awareness to automation to education.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div id="agency" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              id={pillar.id === 'software' ? 'software' : pillar.id === 'education' ? 'education' : undefined}
            >
              <PillarCard pillar={pillar} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="saral-process"
            smooth={true}
            offset={-80}
            duration={800}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all duration-300 cursor-pointer group"
          >
            See How It All Connects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TriplePillar;

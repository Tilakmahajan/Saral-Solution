import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Server, GraduationCap, ChevronLeft, ChevronRight, ArrowRight, Target, Cpu, BookOpen } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We deep-dive into your brand, market position, and competitors. Our agency team runs a comprehensive audit — SEO health, funnel leaks, brand perception.',
    divisions: ['Agency'],
    divisionColors: [{ bg: 'bg-primary/15 border-primary/30', text: 'text-primary' }],
    icon: <Target size={28} strokeWidth={1.5} />,
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    borderColor: 'border-primary/30',
    gradient: 'from-primary/10 to-transparent',
    accentColor: '#3B82F6',
    outcome: 'Full Audit Report',
    outcomeIcon: '📋',
  },
  {
    number: '02',
    title: 'Strategy Blueprint',
    description: 'Combining agency insights and education frameworks, we craft a 90-day growth blueprint — marketing strategy, tech roadmap, and team training plan.',
    divisions: ['Agency', 'Education'],
    divisionColors: [
      { bg: 'bg-primary/15 border-primary/30', text: 'text-primary' },
      { bg: 'bg-gold/15 border-gold/30', text: 'text-gold' },
    ],
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    iconBg: 'bg-gradient-to-br from-primary/20 to-gold/20',
    iconColor: 'text-white',
    borderColor: 'border-primary/20',
    gradient: 'from-primary/8 via-gold/5 to-transparent',
    accentColor: '#60A5FA',
    outcome: 'Growth Blueprint',
    outcomeIcon: '🗺️',
  },
  {
    number: '03',
    title: 'Build & Automate',
    description: 'Our SaaS team builds the tools you need — CRM, automation pipelines, custom software — so your team can execute the strategy without manual overhead.',
    divisions: ['SaaS'],
    divisionColors: [{ bg: 'bg-accent/15 border-accent/30', text: 'text-accent' }],
    icon: <Cpu size={28} strokeWidth={1.5} />,
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    borderColor: 'border-accent/30',
    gradient: 'from-accent/10 to-transparent',
    accentColor: '#8B5CF6',
    outcome: 'Live Software Stack',
    outcomeIcon: '⚙️',
  },
  {
    number: '04',
    title: 'Launch & Upskill',
    description: 'We launch campaigns and simultaneously train your team via workshops. Your people become your biggest competitive asset — equipped with digital skills.',
    divisions: ['Agency', 'SaaS', 'Education'],
    divisionColors: [
      { bg: 'bg-primary/15 border-primary/30', text: 'text-primary' },
      { bg: 'bg-accent/15 border-accent/30', text: 'text-accent' },
      { bg: 'bg-gold/15 border-gold/30', text: 'text-gold' },
    ],
    icon: <Server size={28} strokeWidth={1.5} />,
    iconBg: 'bg-gradient-to-br from-primary/15 via-accent/15 to-gold/15',
    iconColor: 'text-white',
    borderColor: 'border-white/15',
    gradient: 'from-primary/8 via-accent/5 to-gold/5',
    accentColor: '#A78BFA',
    outcome: 'Live + Trained',
    outcomeIcon: '🚀',
  },
  {
    number: '05',
    title: 'Scale & Optimise',
    description: 'Continuous optimisation — A/B testing, automation refinement, advanced skill workshops. We stay with you as a long-term growth partner, not a one-time vendor.',
    divisions: ['Agency', 'SaaS'],
    divisionColors: [
      { bg: 'bg-primary/15 border-primary/30', text: 'text-primary' },
      { bg: 'bg-accent/15 border-accent/30', text: 'text-accent' },
    ],
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/25',
    gradient: 'from-emerald-500/8 to-transparent',
    accentColor: '#34D399',
    outcome: '3x Growth Target',
    outcomeIcon: '📈',
  },
];

const divisionLabels = { Agency: 'Agency', SaaS: 'SaaS', Education: 'Education' };

const SaralProcess = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="saral-process" className="py-28 relative overflow-hidden" style={{ background: '#08101D' }}>
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-slate-300 text-sm font-semibold mb-5"
            >
              <ArrowRight size={14} className="text-primary" /> The Saral Method
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              How We <span className="text-gradient">Integrate</span> All Three Pillars
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              A seamless 5-phase process that connects marketing, software, and education to compound your business growth.
            </motion.p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-container pb-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[320px] max-w-[340px] flex-shrink-0"
            >
              <div
                className={`relative h-full rounded-3xl border ${step.borderColor} p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2`}
                style={{ background: 'rgba(15,23,42,0.8)' }}
              >
                {/* Number + gradient bg */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${step.gradient} rounded-3xl blur-2xl -z-0`} />

                {/* Step number */}
                <div className="flex items-center justify-between relative z-10">
                  <span
                    className="text-5xl font-black opacity-15 leading-none"
                    style={{ color: step.accentColor }}
                  >
                    {step.number}
                  </span>
                  <div className="flex gap-1.5">
                    {step.divisionColors.map((dc, j) => (
                      <span key={j} className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${dc.bg} ${dc.text}`}>
                        {step.divisions[j]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${step.iconBg} border border-white/8 flex items-center justify-center ${step.iconColor} relative z-10`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Outcome */}
                <div className="mt-auto pt-4 border-t border-white/8 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{step.outcomeIcon}</span>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Deliverable</p>
                      <p className="text-sm text-white font-bold">{step.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full glass border border-white/15 flex items-center justify-center z-20">
                    <ChevronRight size={12} className="text-slate-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom progress bar */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex-1 h-1 rounded-full bg-white/5">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-primary via-accent to-gold" />
          </div>
          <span className="text-slate-500 text-xs font-medium whitespace-nowrap">5 Phases → 1 Goal: Your Growth</span>
        </div>
      </div>
    </section>
  );
};

export default SaralProcess;

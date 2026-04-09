import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, ArrowRight, CheckCircle, Send, Server } from 'lucide-react';

const cards = [
  {
    id: 'audit',
    tag: 'Marketing Agency',
    tagColor: 'text-primary bg-primary/10 border-primary/25',
    headline: 'Get Your Free Marketing Audit',
    subline: 'Uncover exactly where you\'re losing leads and money.',
    description: 'Our agency team will audit your SEO, social presence, ad campaigns, and brand positioning — completely free. Walk away with a prioritised action plan.',
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    gradient: 'from-primary/15 via-blue-500/5 to-transparent',
    border: 'border-primary/25',
    accentColor: '#3B82F6',
    points: ['Full SEO & Content Audit', 'Ad Spend Analysis', 'Competitor Benchmark', 'Personalised Action Plan'],
    inputPlaceholder: 'your@business.com',
    ctaLabel: 'Request Free Audit',
    ctaNote: '✅ No credit card. No commitment. Just clarity.',
  },
  {
    id: 'demo',
    tag: 'SaaS Platform',
    tagColor: 'text-accent bg-accent/10 border-accent/25',
    headline: 'Book a Live SaaS Demo',
    subline: 'See our automation tools in action — live, for your use case.',
    description: 'Get a personalised 30-minute demo of SaralCRM or SaralFlow, tailored to your industry. Our team will show you exactly how to automate your biggest bottlenecks.',
    icon: <Server size={28} strokeWidth={1.5} />,
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    gradient: 'from-accent/15 via-purple-500/5 to-transparent',
    border: 'border-accent/25',
    accentColor: '#8B5CF6',
    points: ['Live Product Walkthrough', 'Your Use-Case Focus', 'Q&A with Saral Dev Team', 'Free 14-day Trial Access'],
    inputPlaceholder: 'your@company.com',
    ctaLabel: 'Book Demo Now',
    ctaNote: '✅ 30 minutes. No pressure. Just value.',
  },
];

const LeadMagnet = () => {
  const [emails, setEmails] = useState({ audit: '', demo: '' });
  const [submitted, setSubmitted] = useState({ audit: false, demo: false });

  const handleSubmit = (id, e) => {
    e.preventDefault();
    if (emails[id]) {
      setSubmitted((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section id="lead-magnet" className="py-28 relative overflow-hidden" style={{ background: '#08101D' }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Large background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/25 text-gold text-sm font-semibold mb-5"
          >
            <Zap size={14} className="fill-gold" /> Free Resources — No Strings Attached
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Start Scaling <span className="text-gradient-gold">Today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Pick the right starting point for your business growth journey.
          </motion.p>
        </div>

        {/* Two CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-3xl border ${card.border} p-8 overflow-hidden`}
              style={{ background: 'rgba(15,23,42,0.85)' }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: card.accentColor }} />

              <div className="relative z-10">
                {/* Tag + Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${card.tagColor}`}>
                    {card.tag}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl ${card.iconBg} border border-white/8 flex items-center justify-center ${card.iconColor}`}>
                    {card.icon}
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{card.headline}</h3>
                <p className="font-semibold mb-4" style={{ color: card.accentColor }}>{card.subline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{card.description}</p>

                {/* Points */}
                <ul className="space-y-2.5 mb-8">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle size={15} style={{ color: card.accentColor }} className="flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Form */}
                {!submitted[card.id] ? (
                  <form onSubmit={(e) => handleSubmit(card.id, e)} className="flex flex-col gap-3">
                    <input
                      type="email"
                      placeholder={card.inputPlaceholder}
                      value={emails[card.id]}
                      onChange={(e) => setEmails((prev) => ({ ...prev, [card.id]: e.target.value }))}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-opacity-80 transition-all"
                      style={{ '--tw-ring-color': card.accentColor }}
                      onFocus={(e) => e.target.style.borderColor = `${card.accentColor}60`}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${card.accentColor}, ${card.accentColor}cc)`,
                        boxShadow: `0 8px 25px ${card.accentColor}30`,
                      }}
                    >
                      <Send size={15} /> {card.ctaLabel}
                    </button>
                    <p className="text-slate-500 text-xs text-center">{card.ctaNote}</p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 py-6 rounded-2xl bg-emerald-500/8 border border-emerald-500/25"
                  >
                    <CheckCircle size={32} className="text-emerald-400" />
                    <p className="text-white font-bold text-lg">You're on the list!</p>
                    <p className="text-slate-400 text-sm text-center">Our team will reach out to {emails[card.id]} within 24 hours.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

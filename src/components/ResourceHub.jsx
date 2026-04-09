import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-scroll';

const saasTools = [
  {
    name: 'SaralCRM',
    tagline: 'Client Management, Simplified',
    description: 'A lightweight, powerful CRM built for agencies and SMBs. Track leads, automate follow-ups, and close deals faster.',
    category: 'CRM & Sales',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    features: ['Lead Pipeline', 'Auto Follow-ups', 'Analytics Dashboard'],
    color: 'primary',
    gradient: 'from-primary/15 to-primary/5',
    border: 'border-primary/20',
    accentColor: '#3B82F6',
    icon: '🎯',
  },
  {
    name: 'SaralFlow',
    tagline: 'Automate Everything',
    description: 'Workflow automation engine that connects your tools — WhatsApp, email, Google Sheets — and runs your business on autopilot.',
    category: 'Automation',
    status: 'Beta',
    statusColor: 'text-gold bg-gold/10 border-gold/25',
    features: ['No-code Workflows', 'API Connectors', 'Real-time Triggers'],
    color: 'gold',
    gradient: 'from-gold/15 to-gold/5',
    border: 'border-gold/20',
    accentColor: '#F59E0B',
    icon: '⚡',
  },
  {
    name: 'SaralInsights',
    tagline: 'Data That Speaks',
    description: 'Custom analytics and reporting platform. Unify your marketing, sales, and ops data into one clear, actionable dashboard.',
    category: 'Analytics',
    status: 'Coming Soon',
    statusColor: 'text-accent bg-accent/10 border-accent/25',
    features: ['Unified Dashboard', 'Custom Reports', 'AI Predictions'],
    color: 'purple',
    gradient: 'from-accent/15 to-accent/5',
    border: 'border-accent/20',
    accentColor: '#8B5CF6',
    icon: '📊',
  },
];



const ResourceHub = () => {
  return (
    <section id="resources" className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-slate-300 text-sm font-semibold mb-5"
          >
            <Zap size={14} className="text-gold" /> Resource Hub
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            Tools & <span className="text-gradient-gold">Learning</span> in One Place
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Access our growing SaaS product suite — built to automate, simplify, and scale your operations.
          </motion.p>
        </div>

        {/* SaaS Tools */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black text-white">
              Our <span className="text-gradient">SaaS Products</span>
            </h3>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={800}
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold cursor-pointer transition-colors group"
            >
              Request Demo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {saasTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group relative rounded-3xl border ${tool.border} p-6 flex flex-col gap-4 hover:-translate-y-2 transition-all duration-400 cursor-default overflow-hidden`}
                style={{ background: 'rgba(15,23,42,0.8)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-400`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{tool.icon}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${tool.statusColor}`}>
                      {tool.status}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{tool.category}</span>
                  <h4 className="text-xl font-black text-white mt-1 mb-1">{tool.name}</h4>
                  <p className="text-sm font-semibold mb-3" style={{ color: tool.accentColor }}>{tool.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{tool.description}</p>
                  <ul className="space-y-2 mb-5">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle size={13} style={{ color: tool.accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="lead-magnet"
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300"
                    style={{ background: `${tool.accentColor}20`, border: `1px solid ${tool.accentColor}40`, color: tool.accentColor }}
                  >
                    <ExternalLink size={13} /> Request Access
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ResourceHub;

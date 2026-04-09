import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const divisions = ['Marketing Agency — Brand & Growth', 'SaaS / Software — Automation & Tools', 'Education — Workshops & Courses', 'All Three Divisions — Full Partnership'];

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: 'Our Office',
    value: 'Vitthal Shopping Complex, DSP Chouk, Above Durga Cafe, Near Naivedya Hotel, Jalgaon, MH',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
  },
  {
    icon: <Phone size={20} />,
    label: 'Call / WhatsApp',
    value: '+91 8080068554',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: '1234klapeshmj@gmail.com',
    color: 'text-gold',
    bg: 'bg-gold/10 border-gold/20',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', division: '', message: '' });
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-slate-300 text-sm font-semibold mb-6">
              <MessageSquare size={14} className="text-primary" /> Let's Talk
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Ready to <span className="text-gradient">Simplify</span> Your Growth?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Whether you need a marketing strategy, a SaaS product, or an upskilling program — we're ready to build it with you. Drop us a message and our team will respond within 24 hours.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-2xl ${info.bg} border flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{info.label}</p>
                    <p className="text-slate-200 font-medium leading-snug">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider + response promise */}
            <div className="mt-10 pt-8 border-t border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-slate-400 text-sm font-medium">Average response time: <span className="text-white font-semibold">under 4 hours</span></p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card rounded-3xl border border-white/8 p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-2xl font-black text-white mb-2">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Your name"
                        required
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="your@email.com"
                        required
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Division selector */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">I'm Interested In</label>
                    <button
                      type="button"
                      onClick={() => setOpen(!open)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-left text-sm focus:outline-none transition-colors hover:border-white/20"
                    >
                      <span className={form.division ? 'text-white font-medium' : 'text-slate-600'}>
                        {form.division || 'Select a division...'}
                      </span>
                      <ChevronDown size={16} className={`text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </button>
                    {open && (
                      <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-30 border border-white/10"
                        style={{ background: '#111827' }}>
                        {divisions.map((d) => (
                          <button
                            key={d}
                            type="button"
                            className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 last:border-0 font-medium"
                            onClick={() => { setForm((p) => ({ ...p, division: d })); setOpen(false); }}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Tell us about your project, goals, or questions..."
                      required
                      rows={5}
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl shimmer-btn text-white font-bold text-base flex items-center justify-center gap-3 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    <Send size={18} /> Send Message
                  </button>

                  <p className="text-slate-600 text-xs text-center">By submitting, you agree to our Privacy Policy. We'll never spam you.</p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <span className="text-4xl">🎉</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">We'll get back to you within 4 hours. Keep an eye on <span className="text-white font-semibold">{form.email}</span></p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', division: '', message: '' }); }}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

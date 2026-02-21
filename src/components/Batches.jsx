import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sunrise, Moon, ArrowRight } from 'lucide-react';

const Batches = () => {
  return (
    <section id="batches" className="py-32 bg-dark relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-primary/20 to-transparent slant-bg transform skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass-dark text-blue-300 font-semibold text-sm tracking-wide uppercase mb-6"
          >
            Flexible Timings
          </motion.div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Upcoming <span className="text-gradient">Batches</span>
          </h3>
          <p className="text-xl text-slate-400 font-medium">
            Schedules optimized for maximum productivity. Choose a batch that seamlessly integrates with your college or work hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Morning Batch */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-dark rounded-[2.5rem] border border-white/10 p-10 lg:p-12 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-sm mb-4 border border-blue-500/20 shadow-lg shadow-blue-500/20">
                    <Sunrise size={16} /> Fast-Fill Batch
                  </div>
                  <h4 className="text-3xl font-black text-white">Morning Code</h4>
                </div>
                <div className="text-right">
                  <span className="block text-4xl lg:text-5xl font-black text-white">8:00</span>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-sm mt-1 block">AM (IST)</span>
                </div>
              </div>
              
              <ul className="space-y-6 mb-12 flex-grow">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Calendar size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Starts First Monday</h5>
                    <p className="text-slate-400 text-sm font-medium">Fresh batch begins at the start of every month.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <span className="text-primary-light font-black">2Y</span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Target Audience</h5>
                    <p className="text-slate-400 text-sm font-medium">Specially tailored for Second Year College Students.</p>
                  </div>
                </li>
              </ul>

              <button className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group/btn">
                Reserve Seat <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Evening Batch */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="glass-dark rounded-[2.5rem] border border-white/10 p-10 lg:p-12 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm mb-4 border border-purple-500/20">
                    <Moon size={16} /> Professional
                  </div>
                  <h4 className="text-3xl font-black text-white">Evening Code</h4>
                </div>
                <div className="text-right">
                  <span className="block text-4xl lg:text-5xl font-black text-white">4:00</span>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-sm mt-1 block">PM (IST)</span>
                </div>
              </div>
              
              <ul className="space-y-6 mb-12 flex-grow">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Calendar size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Starts Mid-Month</h5>
                    <p className="text-slate-400 text-sm font-medium">New groups commence on the 15th of every month.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <span className="text-accent font-black">4Y</span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Target Audience</h5>
                    <p className="text-slate-400 text-sm font-medium">Ideal for Final Year Students & Graduates.</p>
                  </div>
                </li>
              </ul>

              <button className="w-full py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-lg transition-all duration-300 border border-slate-600 flex items-center justify-center gap-2 group/btn">
                Reserve Seat <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Batches;

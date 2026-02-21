import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-gradient-to-l from-blue-50 to-transparent"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-[80px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Left Column - Image/Stat Composition */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Abstract Premium Composition */}
            <div className="relative rounded-[2.5rem] bg-slate-50 p-6 md:p-10 border border-slate-200 shadow-2xl shadow-slate-200/50">
              
              {/* Backglows */}
              <div className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {/* Stat block 1 */}
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-3">5+</div>
                    <p className="text-slate-600 font-bold uppercase tracking-wider text-xs">Years of Excellence</p>
                  </div>
                  
                  <div className="glass-dark p-8 rounded-[2rem] flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-black text-white mb-3">1k+</div>
                    <p className="text-primary-light font-bold uppercase tracking-wider text-xs">Students Placed</p>
                  </div>
                </div>
                
                {/* Stat block 2 */}
                <div className="space-y-6 pt-12">
                  <div className="bg-gradient-to-br from-secondary to-blue-500 p-8 rounded-[2rem] shadow-xl shadow-blue-500/30 flex flex-col items-center justify-center text-center text-white transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-black mb-3">50+</div>
                    <p className="text-blue-100 font-bold uppercase tracking-wider text-xs">Hiring Partners</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-black text-slate-800 mb-3 text-gradient">100%</div>
                    <p className="text-slate-600 font-bold uppercase tracking-wider text-xs">Practical Focus</p>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Decorative badge */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -right-6 lg:-right-12 glass px-6 py-4 rounded-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="font-bold text-dark leading-tight">ISO Certified</p>
                <p className="text-sm font-medium text-slate-500">Training Institute</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 pt-10 lg:pt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-secondary font-semibold text-sm tracking-wide uppercase mb-6 border border-blue-100 shadow-sm">
              Know Saral Solutions
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-8 leading-[1.1] tracking-tight">
              Transforming Ambition into <span className="text-gradient">Achievement</span>
            </h3>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              We are Jalgaon's premier IT training and consulting center. Our mission is to bridge the massive gap between academic curricula and actual industry requirements through rigorous, project-oriented learning.
            </p>

            <div className="space-y-8">
              <div className="group flex gap-6 p-6 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-dark mb-3">Our Mission</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">To provide accessible, high-caliber IT education that empowers regional youth to secure top tier tech careers globally.</p>
                </div>
              </div>
              
              <div className="group flex gap-6 p-6 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300 text-secondary">
                  <Lightbulb size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-dark mb-3">Our Vision</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">To establish Central India as a formidable hub for digital innovation and elite software engineering talent by 2030.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

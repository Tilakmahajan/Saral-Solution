import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, CheckCircle, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Enhanced decorative backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.15),transparent)]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-gradient-to-l from-blue-50 to-transparent opacity-80"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-[80px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl mb-12 mx-auto max-w-max">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                <Users size={24} className="text-white" />
              </div>
              <span className="text-lg font-bold text-slate-800 tracking-wide">Discover Saral Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-slate-700 to-black bg-clip-text text-transparent leading-tight mb-8 drop-shadow-2xl">
              Excellence in IT Training
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
              Jalgaon&apos;s leading IT training institute. Transforming students into industry-ready professionals through hands-on learning and real-world projects.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/20 rounded-3xl blur-xl -translate-x-24 translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-1000"></div>
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mb-8 text-white shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Target size={36} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Our Mission</h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">Bridge the academia-industry gap with practical IT training that prepares students for immediate success in real-world tech roles.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-secondary/20 rounded-3xl blur-xl translate-x-24 -translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-1000"></div>
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-secondary to-emerald-600 flex items-center justify-center mb-8 text-white shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                <Lightbulb size={36} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Our Vision</h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">Create Central India&apos;s premier tech talent hub by 2030, powering digital innovation with world-class software engineers.</p>
            </motion.div>

          </div>

          {/* ISO Badge */}
          <motion.div 
            className="mt-24 p-6 rounded-2xl bg-emerald-50/50 backdrop-blur-xl border border-emerald-100 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-xl">
                <CheckCircle size={32} className="text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-900 mb-1">ISO Certified</h4>
                <p className="text-lg text-slate-700 font-semibold">Quality Training Institute</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

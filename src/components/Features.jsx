import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, BookOpen, Users, Briefcase, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Monitor size={32} className="text-primary-light" />,
      title: "Industry-Oriented Training",
      description: "Curriculum precisely matched to current IT industry demands and trends.",
      gradient: "from-blue-500/20 to-blue-600/5"
    },
    {
      icon: <Briefcase size={32} className="text-secondary" />,
      title: "Real Projects",
      description: "Build live projects to gain hands-on experience and a strong portfolio.",
      gradient: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      icon: <Award size={32} className="text-accent" />,
      title: "Placement Support",
      description: "Dedicated guidance and mock interviews to make you completely job-ready.",
      gradient: "from-purple-500/20 to-purple-600/5"
    },
    {
      icon: <Users size={32} className="text-indigo-500" />,
      title: "Experienced Mentors",
      description: "Learn from seasoned industry professionals with years of real coding experience.",
      gradient: "from-indigo-500/20 to-indigo-600/5"
    },
    {
      icon: <BookOpen size={32} className="text-emerald-500" />,
      title: "Practical Approach",
      description: "Focus on 80% practical coding and 20% theory for optimal algorithmic learning.",
      gradient: "from-emerald-500/20 to-emerald-600/5"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-sm tracking-wide uppercase mb-6 shadow-sm"
          >
            Why Choose Us
          </motion.div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-6 tracking-tight">
            The Saral <span className="text-gradient hover:scale-105 inline-block transition-transform cursor-default">Advantage</span>
          </h3>
          <p className="text-xl text-slate-600 font-medium">
            We don't just teach code; we rapidly shape careers. Discover what makes Saral Solutions the preferred choice for future developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="group relative"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-white p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden">
                {/* Background colored blob */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-dark mb-4 z-10 relative">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed z-10 relative font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

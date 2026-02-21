import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Patil",
      role: "Software Engineer @ Tech Mahindra",
      content: "The Java Full Stack course at Saral Solutions completely transformed my career trajectory. The practical, project-based approach helped me crack my interviews with extreme confidence. Worth every penny!",
      initial: "R",
      avatarBg: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      name: "Sneha Deshmukh",
      role: "Python Developer Intern",
      content: "I started the Python Full Stack course in my second year. The mentors are incredibly supportive and focus heavily on logic building. Today, I'm successfully interning at a top startup, all thanks to the rigorous training here.",
      initial: "S",
      avatarBg: "bg-gradient-to-br from-emerald-400 to-emerald-600"
    },
    {
      name: "Amit Joshi",
      role: ".NET Core Developer",
      content: "Coming from a non-IT background, I was intimidated by coding. The trainers at Saral Solutions made learning C# and .NET extremely simple. The placement assistance was genuine and highly effective. Highly recommended.",
      initial: "A",
      avatarBg: "bg-gradient-to-br from-purple-500 to-purple-700"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] transform -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] transform -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-accent font-semibold text-sm tracking-wide uppercase mb-6"
          >
            Alumni Success
          </motion.div>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark mb-6">
            Words From Our <span className="text-gradient">Scholars</span>
          </h3>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Don't simply take our word for it. Explore authentic experiences from Saral Alumni who are thriving in top-tier IT companies today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-blue-50 transition-colors duration-300 transform group-hover:scale-110">
                <Quote size={80} strokeWidth={1} />
              </div>
              
              <div className="relative z-10 mb-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed font-medium italic">
                  "{test.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-5 border-t border-slate-100 pt-8 relative z-10">
                <div className={`w-16 h-16 rounded-[1.25rem] ${test.avatarBg} flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-slate-200`}>
                  {test.initial}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-xl">{test.name}</h4>
                  <p className="text-sm font-semibold text-primary">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

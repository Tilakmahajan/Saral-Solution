import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Code, ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-scroll';

const Courses = () => {
  const courses = [
    {
      title: "Java Full Stack",
      target: "For Final Year Students",
      targetIcon: <Target size={14} />,
      duration: "6 Months",
      skills: ["Core Java", "Spring Boot", "Hibernate", "React/Angular", "MySQL", "AWS Basics"],
      gradient: "from-blue-600 to-primary-dark",
      shadow: "shadow-blue-900/40",
      featured: true
    },
    {
      title: "Python Full Stack",
      target: "For Second Year Students",
      targetIcon: <Target size={14} />,
      duration: "5 Months",
      skills: ["Python", "Django/Flask", "REST APIs", "JavaScript", "HTML/CSS", "PostgreSQL"],
      gradient: "from-emerald-500 to-teal-800",
      shadow: "shadow-emerald-900/30",
      featured: false
    },
    {
      title: ".NET Full Stack",
      target: "Professionals & Grads",
      targetIcon: <Target size={14} />,
      duration: "6 Months",
      skills: ["C#", "ASP.NET Core", "Entity Framework", "Web APIs", "SQL Server", "Azure Basics"],
      gradient: "from-purple-600 to-indigo-900",
      shadow: "shadow-purple-900/30",
      featured: false
    },
    {
      title: "Core Programming",
      target: "For Beginners",
      targetIcon: <Target size={14} />,
      duration: "3 Months",
      skills: ["C Programming", "C++", "Core Java", "Python Basics", "Data Structures", "Algorithms"],
      gradient: "from-orange-500 to-red-700",
      shadow: "shadow-orange-900/30",
      featured: false
    }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Dark theme background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full glass-dark text-secondary font-semibold text-sm tracking-wide uppercase mb-6"
            >
              Expert Curriculum
            </motion.div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Our <span className="text-gradient">Premium</span> Courses
            </h3>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              Comprehensive, meticulously crafted learning paths designed to catapult you from an enthusiast to a highly employable professional.
            </p>
          </div>
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={800}
            className="hidden md:flex items-center gap-3 px-6 py-3 rounded-xl glass-dark text-white hover:bg-white/10 font-bold transition-colors cursor-pointer group border border-white/10"
          >
            Request Syllabus <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`group relative flex flex-col h-full rounded-[2rem] overflow-hidden ${course.featured ? 'border border-primary-light shadow-2xl ' + course.shadow : 'border border-slate-700 shadow-xl shadow-black/50'}`}
            >
              {course.featured && (
                <div className="absolute top-0 right-0 bg-primary-light text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-20 flex items-center gap-1 shadow-lg shadow-primary-light/40">
                  <Zap size={14} /> Most Popular
                </div>
              )}
              
              {/* Card Header */}
              <div className={`p-8 pb-12 text-white bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
                <div className="absolute top-[-20%] right-[-10%] opacity-15 transform rotate-12 group-hover:rotate-45 transition-transform duration-700">
                  <Code size={160} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-white/80 font-semibold text-xs uppercase tracking-wider mb-3">
                    {course.targetIcon} {course.target}
                  </div>
                  <h4 className="text-3xl font-black mb-2 leading-tight">{course.title}</h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col bg-slate-800 relative z-10 -mt-6 rounded-t-3xl border-t border-white/10">
                <div className="flex items-center gap-3 text-white font-bold mb-8 pb-6 border-b border-slate-700">
                  <div className="bg-slate-700 p-2 rounded-lg text-secondary">
                    <Clock size={20} />
                  </div>
                  Duration: {course.duration}
                </div>
                
                <h5 className="font-bold text-slate-400 mb-5 uppercase text-xs tracking-wider">Master Skills</h5>
                <ul className="space-y-4 mb-10 flex-grow">
                  {course.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-emerald-500/10 p-1 rounded-full shrink-0">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                      </div>
                      <span className="text-slate-200 font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 ${course.featured ? 'bg-primary-light text-white hover:bg-secondary ' + course.shadow : 'bg-slate-700 text-white hover:bg-slate-600 shadow-none'}`}
                >
                  Join the Batch
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

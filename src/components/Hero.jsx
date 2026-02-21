import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Dynamic gradient orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-accent/20 blur-[100px] opacity-70"
        />
        <motion.div 
          animate={{ x: [0, -70, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/10 to-blue-300/20 blur-[120px] opacity-60"
        />
        
        {/* Tech grid texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGwyMC0yMEw1NCAxMmwtMjAgMjAtdi0yaDIwVjEyai0ydjIwTDMyIDEyaC0ydjIwbS0yMCAwdjIwaC0ydi0yMEgxMHYyaDIwdi0yMGgtMnYyMGgtMjB2MmgyMHZtMjB2MjBoMnYtMjBoMjB2LTJoLTIwdi0yMGgtMnYyMEgzNHoifS8+PC9nPjwvc3ZnPg==')] opacity-[0.03]"></div>
        
        {/* Curved separator at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Main Content Area */}
          <motion.div 
            className="w-full lg:w-5/12 text-center lg:text-left pt-10 lg:pt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pill badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-700 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Premium IT Training in Jalgaon
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-dark tracking-tight leading-[1.1] mb-6">
              Empowering Your <br className="hidden lg:block"/>
              <span className="text-gradient">Digital Future</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Transform your career with hands-on Full-Stack Development & Core Programming courses designed by industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="courses"
                smooth={true}
                offset={-100}
                duration={800}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dark text-white font-bold text-lg hover:bg-primary shadow-xl shadow-dark/20 hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                Explore Courses <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={800}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-dark font-bold text-lg border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Trust metrics */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-dark">1k+</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Placed</span>
              </div>
              <div className="w-px h-10 bg-slate-300"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-dark">50+</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Premium 3D-like Mockup Composition */}
          <motion.div 
            className="w-full lg:w-7/12 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {/* Outer decorative ring container */}
            <div className="relative w-full max-w-2xl mx-auto aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
              
              {/* Backglow layer */}
              <div className="absolute inset-10 bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 rounded-[3rem] blur-2xl transform -rotate-6"></div>

              {/* Main IDE Window Mockup */}
              <motion.div 
                className="relative w-[90%] lg:w-full z-20 rounded-2xl glass-dark border-t border-white/10 overflow-hidden transform group perspective-1000"
                whileHover={{ rotateY: -2, rotateX: 2, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* IDE Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 font-medium">index.js — SaralSolutions</div>
                  <div className="flex space-x-2">
                    <Cpu size={14} className="text-slate-500" />
                  </div>
                </div>
                
                {/* IDE Body */}
                <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-slate-300 min-h-[300px]">
                  <p className="flex"><span className="text-slate-500 mr-4 select-none">1</span><span className="text-purple-400 font-bold">import</span> {'{'} Future {'}'} <span className="text-purple-400 font-bold">from</span> <span className="text-emerald-300">'@saralsolutions/core'</span>;</p>
                  <p className="flex mt-2"><span className="text-slate-500 mr-4 select-none">2</span><span className="text-slate-500 italic">// Initialize your success journey</span></p>
                  <p className="flex"><span className="text-slate-500 mr-4 select-none">3</span><span className="text-blue-400 font-bold">const</span> <span className="text-yellow-200">developer</span> <span className="text-accent">=</span> <span className="text-blue-400 font-bold">new</span> <span className="text-yellow-400">Future</span>();</p>
                  <p className="flex mt-4"><span className="text-slate-500 mr-4 select-none">4</span><span className="text-purple-400 font-bold">async function</span> <span className="text-blue-300">startCareer</span>() {'{'}</p>
                  <p className="flex"><span className="text-slate-500 mr-4 select-none">5</span>  <span className="text-purple-400 font-bold">await</span> developer.<span className="text-blue-300">learn</span>(['React', 'Node.js', 'Python']);</p>
                  <p className="flex"><span className="text-slate-500 mr-4 select-none">6</span>  <span className="text-purple-400 font-bold">await</span> developer.<span className="text-blue-300">buildProjects</span>();</p>
                  <p className="flex"><span className="text-slate-500 mr-4 select-none">7</span>  </p>
                  <p className="flex"><span className="text-slate-500 mr-4 select-none">8</span>  <span className="text-purple-400 font-bold">return</span> developer.<span className="text-blue-300">getHired</span>({'{'} role: <span className="text-emerald-300">'Full Stack Eng'</span> {'}'});</p>
                  <p className="flex"><span className="text-slate-500 mr-4 select-none">9</span>{'}'}</p>
                  
                  {/* Blinking cursor */}
                  <div className="flex mt-2"><span className="text-slate-500 mr-4 select-none">10</span><span className="w-2.5 h-5 bg-white/70 animate-pulse inline-block align-middle ml-1"></span></div>
                </div>
                
                {/* IDE Footer glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-semibold text-sm tracking-wide uppercase mb-6"
          >
            Get in Touch
          </motion.div>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark mb-6 tracking-tight">
            Start Your <span className="text-gradient">Journey</span>
          </h3>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Have questions about our courses, syllabus, or upcoming batches? Reach out to our dedicated admissions team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 p-4">
          
          {/* Contact Info Premium Card */}
          <div className="w-full lg:w-2/5 bg-slate-900 text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden shadow-inner">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 mix-blend-screen pointer-events-none"></div>
            
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-10 tracking-tight">Contact Information</h4>
              <ul className="space-y-10">
                <li className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Phone className="text-blue-300 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Call Us</p>
                    <p className="font-bold text-xl">+91 8080068554</p>
                    <p className="font-bold text-xl text-slate-300">+91 9307963601</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <Mail className="text-cyan-300 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Email Us</p>
                    <p className="font-bold text-lg mb-1">1234klapeshmj@gmail.com</p>
                    <p className="font-bold text-lg text-slate-300">admissions@saralsolutions.com</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <MapPin className="text-purple-300 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Visit Us</p>
                    <p className="font-bold text-lg leading-relaxed max-w-[250px]">
                      Vitthal Shopping Complex, DSP Chouk, Above Durga Cafe, Near Naivedya Hotel Jalgaon, Maharashtra
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-16 pt-10 border-t border-white/10 flex flex-col gap-4">
              <a 
                href="https://wa.me/8080068554" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transform hover:-translate-y-1"
              >
                <MessageSquare size={24} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h4 className="text-3xl font-black text-dark mb-8 tracking-tight">Send us a Message</h4>
              <form className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-primary transition-colors bg-slate-50 font-medium" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-primary transition-colors bg-slate-50 font-medium" placeholder="+91 99999 99999" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Course Interested In</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-primary transition-colors bg-slate-50 appearance-none font-medium cursor-pointer">
                      <option>Select a Premium Course</option>
                      <option>Java Full Stack</option>
                      <option>Python Full Stack</option>
                      <option>.NET Full Stack</option>
                      <option>Core Programming</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Message</label>
                  <textarea rows="4" className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:outline-none focus:ring-0 focus:border-primary transition-colors bg-slate-50 resize-none font-medium" placeholder="How can we help accelerate your career?"></textarea>
                </div>
                <button type="button" className="px-10 py-5 rounded-xl bg-dark hover:bg-primary text-white font-black transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-dark/20 hover:shadow-primary/30 transform hover:-translate-y-1 w-full md:w-auto ml-auto">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            <div className="rounded-3xl overflow-hidden h-64 border-2 border-slate-100 shadow-md relative w-full bg-slate-200">
              {/* Google Map Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6251550551933!2d75.5600289738324!3d21.007657780636322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f0036e49985%3A0xb4e3ce24c3c621a9!2sDSP%20chowk!5e0!3m2!1sen!2sin!4v1775629267263!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Saral Solutions Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

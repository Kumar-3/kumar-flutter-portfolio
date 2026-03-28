
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-gray-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">Education</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold">Academic Foundation</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border-white/5 hover:border-teal-500/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <GraduationCap className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mb-4">{edu.school}</p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">{edu.period}</span>
                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                  <MapPin size={10} /> Maharashtra, India
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

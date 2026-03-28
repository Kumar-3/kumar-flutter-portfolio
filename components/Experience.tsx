
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-2">Career</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold">Professional Journey</h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-gray-950 ${exp.current ? 'bg-teal-400 glow-teal' : 'bg-gray-700'}`}></div>
              
              <div className="glass-card p-8 rounded-3xl hover:border-teal-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-teal-400 font-medium">
                      <Briefcase size={16} /> {exp.company}
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-400 flex items-center gap-2">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-gray-400 leading-relaxed text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

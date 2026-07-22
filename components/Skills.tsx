
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="glass-card p-6 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                {category}
                <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map((skill, sIdx) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all group"
                  >
                    <div className="text-sm font-semibold text-gray-300 group-hover:text-teal-400 transition-colors mb-1.5">
                      {skill.name}
                    </div>
                    <div className="flex gap-0.5" aria-label={`Proficiency ${skill.level} out of 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-1 w-3 rounded-full ${i < skill.level ? 'bg-teal-500' : 'bg-white/10'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

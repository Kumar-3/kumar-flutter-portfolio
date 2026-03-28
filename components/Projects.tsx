import { motion } from "framer-motion";
import { DownloadCloud } from "lucide-react";
import React from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">
              Portfolio
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Featured Applications
            </h2>
            <p className="text-gray-400">
              Selected production work across healthcare diagnostics and
              enterprise-grade platforms.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-500 text-white text-[10px] font-bold uppercase tracking-wider">
                    {project.type}
                  </span>

                  {project.downloads && (
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <DownloadCloud size={10} />
                      {project.downloads}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Challenge */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-6">
                  <span className="text-[10px] font-bold uppercase text-gray-500 block mb-2">
                    Key Challenge
                  </span>
                  <p className="text-xs text-gray-400 italic">
                    “{project.challenges}”
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Platform Links */}
                  <div className="flex gap-3">
                    {project.androidUrl && (
                      <a
                        href={project.androidUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
      flex-1 py-3
      bg-emerald-500/15 hover:bg-emerald-500/25
      text-emerald-400
      rounded-xl text-sm font-semibold
      flex items-center justify-center gap-2
      border border-emerald-500/20
      transition-all
    "
                      >
                        <FaAndroid size={18} />
                        Android
                      </a>
                    )}

                    {project.iosUrl && (
                      <a
                        href={project.iosUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
      flex-1 py-3
      bg-white/5 hover:bg-white/10
      text-white
      rounded-xl text-sm font-semibold
      flex items-center justify-center gap-2
      border border-white/10
      transition-all
    "
                      >
                        <FaApple size={18} />
                        iOS
                      </a>
                    )}

                    {!project.androidUrl && !project.iosUrl && (
                      <div className="flex-1 py-3 bg-white/5 text-gray-400 rounded-xl text-sm font-medium flex items-center justify-center">
                        Internal / Private App
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { ArrowLeft, DownloadCloud } from "lucide-react";
import React, { useEffect } from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../constants";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link
          to="/"
          className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
        >
          Back to Portfolio
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative rounded-[2rem] overflow-hidden mb-10 h-72 md:h-96">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-bold uppercase tracking-wider">
                {project.type}
              </span>
              {project.downloads && (
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <DownloadCloud size={12} />
                  {project.downloads}
                </span>
              )}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-3">
                The Problem
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.impactContext && (
              <div>
                <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-3">
                  Why It Matters
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.impactContext}
                </p>
              </div>
            )}

            {project.howItWorks && (
              <div>
                <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-3">
                  How It Works
                </h2>
                <ol className="space-y-3">
                  {project.howItWorks.map((step, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-300 text-lg leading-relaxed">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div>
              <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-3">
                The Approach & Key Challenge
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {project.downloads && (
              <div>
                <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-3">
                  Outcome
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Shipped to production with {project.downloads} downloads
                  across app stores.
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-12">
            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border border-emerald-500/20 transition-all"
              >
                <FaAndroid size={18} />
                View on Android
              </a>
            )}
            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all"
              >
                <FaApple size={18} />
                View on iOS
              </a>
            )}
            {!project.androidUrl && !project.iosUrl && (
              <div className="flex-1 py-4 bg-white/5 text-gray-400 rounded-xl text-sm font-medium flex items-center justify-center">
                Internal / Private App
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;

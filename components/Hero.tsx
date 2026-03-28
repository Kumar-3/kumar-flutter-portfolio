import { motion } from "framer-motion";
import {
  ChevronRight,
  Linkedin,
  Mail,
  Smartphone,
  Terminal,
} from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-6 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            Senior Flutter Developer
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Crafting <br />
            <span className="gradient-text">Scalable</span> <br />
            Flutter Experiences
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            I’m <span className="text-white font-bold">Kumar K. Kharare</span>,
            a mobile engineer with{" "}
            <span className="text-white font-semibold">4+ years</span> of
            experience delivering scalable Flutter applications with a strong
            focus on{" "}
            <span className="text-teal-400">native platform integrations</span>,{" "}
            <span className="text-blue-400">IoT & embedded systems</span>, and{" "}
            <span className="text-purple-400">secure payment workflows</span>.
          </p>

          {/* Contact Pills */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Smartphone size={14} className="text-teal-400" />
              +91 94208 20223
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Mail size={14} className="text-blue-400" />
              kumarkharare@gmail.com
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-2xl font-bold flex items-center gap-2 glow-blue"
            >
              View Projects
              <ChevronRight size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/kumark3"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT CODE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateX: -10, rotateY: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            rotateX: 4,
            rotateY: -4,
          }}
          className="relative hidden md:block perspective-[1200px]"
        >
          <motion.div
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden shadow-2xl"
          >
            {/* Animated Gradient Sweep */}
            <motion.div
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            />

            {/* Header */}
            <div className="relative flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-gray-500 font-mono">
                profile_summary.dart
              </div>
            </div>

            {/* Code */}
            <pre className="relative text-sm font-mono text-gray-300 space-y-2 overflow-x-auto">
              <code className="block">
                <span className="text-purple-400">final</span> profile = {"{"}
              </code>
              <code className="block ml-4">
                experienceYears: <span className="text-orange-400">4</span>,
              </code>
              <code className="block ml-4">
                title:{" "}
                <span className="text-teal-400">
                  'Senior Flutter Developer'
                </span>
                ,
              </code>
              <code className="block ml-4">expertise: [</code>
              <code className="block ml-8 text-teal-400">
                'Clean Architecture (Scalable & Testable)',
              </code>
              <code className="block ml-8 text-teal-400">
                'Native Android & iOS Integrations',
              </code>
              <code className="block ml-8 text-teal-400">
                'IoT & Embedded Systems',
              </code>
              <code className="block ml-8 text-teal-400">
                'Healthcare & Diagnostic Apps',
              </code>

              <code className="block ml-4">],</code>
              <code className="block ml-4">impact: {"{"}</code>
              <code className="block ml-8">
                stability:{" "}
                <span className="text-teal-400">
                  '{`+35% crash reduction`}'
                </span>
                ,
              </code>
              <code className="block ml-8">
                performance:{" "}
                <span className="text-teal-400">
                  '{`faster startup & smoother UI`}'
                </span>
                ,
              </code>
              <code className="block ml-4">{"}"},</code>

              <code className="block">{"}"};</code>
            </pre>

            {/* Floating Terminal Icon */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 6, -6, 0],
                boxShadow: [
                  "0 0 20px rgba(45,212,191,0.3)",
                  "0 0 40px rgba(45,212,191,0.6)",
                  "0 0 20px rgba(45,212,191,0.3)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute -top-5 -right-5 p-4 glass-card rounded-2xl glow-teal"
            >
              <Terminal size={26} className="text-teal-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

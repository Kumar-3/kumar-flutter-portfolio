import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Smartphone, Zap } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="text-teal-400" />,
      title: "Senior Flutter Engineer",
      text: "4+ years building scalable, production-grade Flutter applications for Android, iOS, and embedded platforms using Dart and modern state management.",
    },
    {
      icon: <Cpu className="text-blue-400" />,
      title: "Platform & Native Integrations",
      text: "Extensive experience with Flutter Method Channels, Android (Kotlin) and iOS (Swift) APIs, Camera2, BLE, Wi-Fi, and background processing.",
    },
    {
      icon: <ShieldCheck className="text-purple-400" />,
      title: "Healthcare & Secure Apps",
      text: "Developed Flutter-based medical and diagnostic applications with ROI processing, Python inference pipelines, and secure handling of sensitive data.",
    },
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Performance Optimization",
      text: "Improved app stability and performance by optimizing widget rebuilds, using isolates, and reducing production crashes by ~35%.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">
                About Me
              </h4>

              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Flutter-First Developer Focused on{" "}
                <span className="text-teal-400">Architecture</span> &{" "}
                <span className="text-blue-500">Performance</span>
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg">
                I specialize in building{" "}
                <span className="text-white font-medium">
                  high-performance Flutter applications
                </span>{" "}
                where scalability, reliability, and clean architecture matter.
                My work spans mobile, embedded, and healthcare domains — from
                Flutter Embedded on{" "}
                <span className="text-white font-medium">Raspberry Pi 5</span>{" "}
                to diagnostic applications serving{" "}
                <span className="text-white font-medium">22k+ users</span>.
              </p>
            </div>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT STATS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-teal-500/10 to-blue-600/10 flex items-center justify-center p-4">
              <div className="w-full h-full glass-card rounded-2xl flex flex-col items-center justify-center p-8 text-center border-teal-500/30">
                <div className="text-6xl font-black text-teal-400 mb-2">4+</div>
                <div className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                  Years Experience
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-xl font-bold text-white">4+</div>
                    <div className="text-[9px] uppercase text-gray-500">
                      Flutter Apps
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-xl font-bold text-white">~35%</div>
                    <div className="text-[9px] uppercase text-gray-500">
                      Crash Reduction
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-xl font-bold text-white">22k+</div>
                    <div className="text-[9px] uppercase text-gray-500">
                      Active Users
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 w-full italic text-gray-400 text-sm">
                  “Delivering production-ready Flutter solutions with
                  native-level performance.”
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import {
  Award as AwardIcon,
  ExternalLink,
  GraduationCap,
  Image as ImageIcon,
  Star,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { ACHIEVEMENTS } from "../constants";

const Achievement: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const certificates = ACHIEVEMENTS.filter((item) => item.type === "course");
  const awards = ACHIEVEMENTS.filter((item) => item.type === "award");

  const Card = ({ item, idx }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08 }}
      className="glass-card p-8 rounded-[2rem] relative overflow-hidden group text-center"
    >
      {/* Background Icon */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        {item.type === "award" ? (
          <AwardIcon size={80} />
        ) : (
          <GraduationCap size={80} />
        )}
      </div>

      {/* Main Icon */}
      <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-6">
        {item.type === "award" ? (
          <Star className="text-teal-400" />
        ) : (
          <GraduationCap className="text-teal-400" />
        )}
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>

      <p className="text-teal-400 font-medium text-sm mb-4">{item.issuer}</p>

      <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-500 font-bold mb-4">
        {item.year}
      </span>

      {/* Skills */}
      {item.skills && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {item.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Action */}
      <div className="mt-6 flex justify-center">
        {item.certificateUrl && (
          <a
            href={item.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2
              bg-white/5 hover:bg-white/10
              text-white text-xs font-semibold
              rounded-xl border border-white/10
              flex items-center gap-2
              transition-all
            "
          >
            <ExternalLink size={14} />
            View Certificate
          </a>
        )}

        {item.imageUrl && (
          <button
            onClick={() => setPreview(item.imageUrl)}
            className="
              px-4 py-2
              bg-teal-500/15 hover:bg-teal-500/25
              text-teal-400 text-xs font-semibold
              rounded-xl border border-teal-500/20
              flex items-center gap-2
              transition-all
            "
          >
            <ImageIcon size={14} />
            View Certificate
          </button>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="py-24" id="achievements">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= CERTIFICATES ================= */}
        <div className="text-center mb-12">
          <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">
            Certifications
          </h4>
          <h2 className="text-4xl font-extrabold">
            Courses & Professional Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {certificates.map((item, idx) => (
            <Card key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* ================= AWARDS ================= */}
        <div className="text-center mb-12">
          <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">
            Awards
          </h4>
          <h2 className="text-4xl font-extrabold">
            Recognition & Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((item, idx) => (
            <Card key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {preview && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setPreview(null)}
        >
          <motion.div
            className="relative w-full max-w-3xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="
                absolute -top-12 right-0
                flex items-center gap-2
                px-4 py-2
                bg-white/10 hover:bg-white/20
                text-white text-sm font-semibold
                rounded-xl
                border border-white/10
              "
            >
              <X size={16} />
              Close
            </button>

            <img
              src={preview}
              alt="Certificate"
              className="w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Achievement;

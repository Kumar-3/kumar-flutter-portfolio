import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Smartphone } from "lucide-react";
import React, { useEffect, useState } from "react";

const PHRASES = [
  "composing widgets…",
  "building layout…",
  "painting frame…",
  "hot reloading…",
];

const RING_COUNT = 3;

interface LoadingAnimationProps {
  showText?: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  showText = true,
}) => {
  const reduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }, 900);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black gap-8">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {!reduceMotion &&
          Array.from({ length: RING_COUNT }).map((_, idx) => (
            <motion.span
              key={idx}
              className={`absolute inset-0 rounded-2xl border ${
                idx % 2 === 0 ? "border-teal-400/40" : "border-blue-500/40"
              }`}
              animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeOut",
                delay: idx * 0.8,
              }}
            />
          ))}

        <motion.div
          className="relative w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl flex items-center justify-center glow-teal"
          animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Smartphone className="text-white w-8 h-8" />
        </motion.div>
      </div>

      {showText && (
        <div className="h-5 flex items-center justify-center">
          {reduceMotion ? (
            <p className="text-gray-500 text-xs font-mono tracking-widest uppercase">
              Loading portfolio…
            </p>
          ) : (
            <AnimatePresence mode="wait">
              <motion.p
                key={phraseIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500 text-xs font-mono tracking-widest uppercase"
              >
                {PHRASES[phraseIndex]}
              </motion.p>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;

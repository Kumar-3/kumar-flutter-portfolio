import { motion, useReducedMotion } from "framer-motion";
import { Smartphone } from "lucide-react";
import React, { Suspense, lazy, useEffect, useState } from "react";

const LoadingScene = lazy(() => import("./3D/LoadingScene"));

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LOADING_DURATION = 3500; // ms — minimum time the splash stays visible
const FADE_OUT_DURATION = 800; // ms — exit transition duration

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
}) => {
  const reduceMotion = useReducedMotion();
  const [isExiting, setIsExiting] = useState(false);
  // Computed via lazy initializers so the correct value is already known on
  // the very first render — deriving these in a useEffect instead left a
  // one-frame flash of the static fallback icon before flipping to the 3D
  // scene, since effects only run after the initial paint.
  const [webglSupported] = useState(detectWebGL);
  const [isDesktopViewport] = useState(() => window.innerWidth >= 768);

  const show3D = !reduceMotion && webglSupported && isDesktopViewport;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      const fadeTimer = setTimeout(onLoadingComplete, FADE_OUT_DURATION);
      return () => clearTimeout(fadeTimer);
    }, LOADING_DURATION);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: FADE_OUT_DURATION / 1000, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
      aria-hidden={isExiting}
    >
      {!reduceMotion && (
        <>
          {/* Gradient color-shift wash, dimmed by a dark overlay so text stays high-contrast */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(135deg, #14b8a6 0%, #3b82f6 50%, #14b8a6 100%)",
              backgroundSize: "200% 200%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-black/80" />

          {/* Soft corner glows */}
          <motion.div
            className="absolute -top-24 -left-24 w-72 h-72 bg-teal-500/20 rounded-full blur-[120px]"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          {/* Pulsing outline circles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-teal-400/20 rounded-full"
            animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-400/20 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-40 h-40 border border-teal-400/15 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Floating squares */}
          <motion.div
            className="absolute top-16 left-10 w-10 h-10 border border-teal-400/20 rounded-lg"
            animate={{
              y: [0, -24, 0],
              x: [0, 14, 0],
              rotate: [0, 45, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-16 w-8 h-8 border border-blue-400/20 rounded-lg"
            animate={{
              y: [0, 20, 0],
              x: [0, -16, 0],
              rotate: [0, -45, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-16 w-6 h-6 border border-teal-400/15 rounded-lg"
            animate={{
              y: [0, -16, 0],
              rotate: [0, 60, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />

          {/* Rotating hexagon accent */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 border border-teal-400/10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{ rotate: 360, opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Radial vignette keeps focus on the center content */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </>
      )}

      {/* Foreground content needs its own stacking context (relative + z-10) —
          otherwise CSS paints non-positioned static content *before* the
          absolutely-positioned background decorations above, regardless of
          DOM order, and the vignette/circles end up covering the text. */}
      <div className="relative z-10 flex flex-col items-center">
        {show3D ? (
          <div className="w-[420px] h-[420px] mb-2">
            <Suspense fallback={null}>
              <LoadingScene />
            </Suspense>
          </div>
        ) : (
          <div className="relative w-24 h-24 flex items-center justify-center mb-8">
            {!reduceMotion &&
              [0, 1, 2].map((idx) => (
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
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Smartphone className="text-white w-8 h-8" />
            </motion.div>
          </div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={
            show3D
              ? {
                  opacity: 1,
                  y: 0,
                  rotateX: [0, 6, 0, -6, 0],
                  rotateY: [0, -8, 0, 8, 0],
                }
              : { opacity: 1, y: 0 }
          }
          transition={
            show3D
              ? {
                  opacity: { duration: 0.6, delay: 0.3, ease: "easeOut" },
                  y: { duration: 0.6, delay: 0.3, ease: "easeOut" },
                  rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }
              : { duration: 0.6, delay: 0.3, ease: "easeOut" }
          }
          style={
            show3D
              ? {
                  transformPerspective: 700,
                  textShadow:
                    "1px 1px 0 #0d9488, 2px 2px 0 #0d9488, 3px 3px 0 #0d9488, 4px 4px 10px rgba(0,0,0,0.6)",
                }
              : undefined
          }
          className="text-3xl md:text-4xl font-extrabold gradient-text font-heading mb-2 text-center px-6"
        >
          Kumar K. Kharare
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="text-gray-400 text-sm md:text-base uppercase tracking-widest mb-10 text-center px-6"
        >
          Senior Flutter Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((idx) => (
              <motion.span
                key={idx}
                className="w-2 h-2 rounded-full bg-teal-400"
                animate={
                  reduceMotion
                    ? {}
                    : { opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }
                }
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                }}
              />
            ))}
          </div>
          <p className="text-gray-500 text-xs font-mono tracking-widest uppercase">
            Loading portfolio…
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

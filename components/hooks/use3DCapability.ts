import { useReducedMotion } from "framer-motion";
import { useState } from "react";

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

/**
 * Whether it's safe/sensible to render a WebGL scene here: real pointer
 * device screen size (not mobile), WebGL actually available, and the user
 * hasn't asked for reduced motion. Computed via lazy initializers so the
 * correct value is already known on the very first render — deriving this
 * in a useEffect instead causes a one-frame flash of whatever fallback
 * content renders first, since effects only run after the initial paint.
 */
export function use3DCapability(): boolean {
  const reduceMotion = useReducedMotion();
  const [webglSupported] = useState(detectWebGL);
  const [isDesktopViewport] = useState(() => window.innerWidth >= 768);

  return !reduceMotion && webglSupported && isDesktopViewport;
}

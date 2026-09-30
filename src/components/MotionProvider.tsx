"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

// LazyMotion + `m` components ship only the animation features we use (~15kb instead of ~34kb).
// reducedMotion="user" turns off transform animations for visitors who ask for less motion.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

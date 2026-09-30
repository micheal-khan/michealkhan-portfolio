import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

// Parent that staggers its children in when scrolled into view.
export const stagger = (gap = 0.06, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

// Shared viewport settings: animate once, when ~15% of the element is visible.
export const inView = { once: true, amount: 0.15 } as const;

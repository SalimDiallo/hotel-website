"use client";

import { motion } from "motion/react";

type Variant = "slide-up" | "fade-blur" | "fade" | "rotate-scale";

interface AppearOnScrollProps {
  children: React.ReactNode;
  variant: Variant;
  delay?: number;
  className?: string;
}

const VARIANTS = {
  "slide-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-blur": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "rotate-scale": {
    hidden: { opacity: 0, y: 60, scale: 0.85, rotate: -6 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
  },
};

const AppearOnScroll = ({ children, variant, delay = 0, className = "" }: AppearOnScrollProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={VARIANTS[variant]}
      transition={variant === "rotate-scale" ? { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] } : { duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AppearOnScroll;

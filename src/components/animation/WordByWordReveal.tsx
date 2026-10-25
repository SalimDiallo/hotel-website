"use client";

import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Variant = "slide-up" | "fade-blur" | "fade";

interface WordByWordRevealProps {
  text: string;
  variant: Variant;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  immediate?: boolean;
}

const VARIANTS = {
  "slide-up": {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0 },
  },
  "fade-blur": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "none" },
  },
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const EASING: Record<Variant, [number, number, number, number]> = {
  "slide-up": [0.25, 0.46, 0.45, 0.94],
  "fade-blur": [0.45, 0, 0.55, 1],
  "fade": [0.45, 0, 0.55, 1],
};

const WordByWordReveal = ({ text, variant, tag = "p", className = "", immediate = false }: WordByWordRevealProps) => {
  const Tag = motion[tag] as typeof motion.p;
  const words = text.split(" ");

  return (
    <Tag
      className={cn("leading-[1.2]", className)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.2 } })}
      transition={{ staggerChildren: 0.04 }}
    >
      {words.map((word, i) => (
        <span key={i}>
          {i > 0 && " "}
          <motion.span
            className="inline-block"
            variants={VARIANTS[variant]}
            transition={{ duration: 0.6, ease: EASING[variant] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default WordByWordReveal;

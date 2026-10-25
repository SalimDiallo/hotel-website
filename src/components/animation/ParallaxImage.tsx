"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type ParallaxImageProps = {
  src?: string;
  videoSrc?: string;
  alt?: string;
  className?: string;
  zoom?: number;
};

/**
 * Drop-in <img> replacement that scales down as it scrolls through view.
 * Fills its nearest positioned ancestor, which must clip (overflow-hidden).
 * Scale never drops below 1, so the box stays covered at every scroll position.
 * Pass videoSrc to render a muted autoplay loop instead of the image.
 */
const ParallaxImage = ({ src, videoSrc, alt = "", className = "", zoom = 11 }: ParallaxImageProps) => {
  const ref = useRef<HTMLImageElement & HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1 + zoom / 100, 1]);

  const classes = cn("absolute inset-0 w-full h-full object-cover", className);

  if (videoSrc) {
    return (
      <motion.video
        ref={ref}
        src={videoSrc}
        aria-label={alt || undefined}
        style={{ scale }}
        className={classes}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      style={{ scale }}
      className={classes}
    />
  );
};

export default ParallaxImage;

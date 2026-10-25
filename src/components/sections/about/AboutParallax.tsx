"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import WordByWordReveal from "@/components/animation/WordByWordReveal";

type AboutParallaxProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  badge?: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ frontImageSrc: string; frontVideoSrc?: never } | { frontVideoSrc: string; frontImageSrc?: never }) &
  ({ backImageSrc: string; backVideoSrc?: never } | { backVideoSrc: string; backImageSrc?: never });

const AboutParallax = ({ tag, title, description, primaryButton, secondaryButton, frontImageSrc, frontVideoSrc, backImageSrc, backVideoSrc, badge, textAnimation }: AboutParallaxProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const fgY = useTransform(scrollYProgress, [0, 1], ["120px", "-120px"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      aria-label="About section"
      className="relative py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-45/100 flex flex-col gap-3">
            <AppearOnScroll variant="fade">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>{tag}</p>
              </div>
            </AppearOnScroll>
            <WordByWordReveal
              text={title}
              variant={textAnimation}
              tag="h2"
              className="text-4xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
            />
            <WordByWordReveal
              text={description}
              variant={textAnimation}
              tag="p"
              className="md:max-w-8/10 text-base md:text-lg 2xl:text-xl leading-snug text-balance"
            />
            {(primaryButton || secondaryButton) && (
              <AppearOnScroll variant="slide-up" delay={0.15}>
                <div className="flex flex-wrap gap-3 mt-2 md:mt-3">
                  {primaryButton && <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{primaryButton.text}</a>}
                  {secondaryButton && <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{secondaryButton.text}</a>}
                </div>
              </AppearOnScroll>
            )}
          </div>

          <div className="w-full md:w-55/100 relative h-100 md:h-125 xl:h-150 2xl:h-175">
            <div className="absolute top-0 right-0 w-75/100 h-full overflow-hidden rounded">
              <motion.div className="w-full h-full" style={{ y: bgY, scale: bgScale }}>
                {backVideoSrc ? (
                  <video src={backVideoSrc} className="w-full h-full object-cover rounded" autoPlay loop muted playsInline />
                ) : (
                  <img src={backImageSrc} alt="" className="w-full h-full object-cover rounded" />
                )}
              </motion.div>
              {badge && (
                <span className="absolute top-2 right-2 xl:top-3 xl:right-3 2xl:top-4 2xl:right-4 px-3 py-1.5 text-xs text-foreground font-medium card rounded">
                  {badge}
                </span>
              )}
            </div>

            <motion.div
              className="absolute top-15/100 left-0 w-65/100 h-70/100 z-10 overflow-hidden rounded"
              style={{ y: fgY }}
            >
              {frontVideoSrc ? (
                <video src={frontVideoSrc} className="w-full h-full object-cover rounded" autoPlay loop muted playsInline />
              ) : (
                <img src={frontImageSrc} alt="" className="w-full h-full object-cover rounded" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutParallax;

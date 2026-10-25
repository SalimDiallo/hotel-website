import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import type { LucideIcon } from "lucide-react";

type AttributeDetail = {
  icon: LucideIcon;
  label: string;
  value: string | number;
};

type FeatureItem = {
  title: string;
  tags: string;
  badge?: string | null;
  href?: string;
  price?: string;
  details: AttributeDetail[];
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesAttributeCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesAttributeCards = ({ tag, title, description, primaryButton, secondaryButton, items, textAnimation }: FeaturesAttributeCardsProps) => {
  return (
    <section aria-label="Features attribute cards section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center w-full max-w-6xl px-6 mx-auto gap-2">
          <AppearOnScroll variant="fade">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
          </AppearOnScroll>

          <WordByWordReveal
            text={title}
            variant={textAnimation}
            tag="h2"
            className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
          />

          <WordByWordReveal
            text={description}
            variant={textAnimation}
            tag="p"
            className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance"
          />

          {(primaryButton || secondaryButton) && (
            <AppearOnScroll variant="slide-up" delay={0.15}>
              <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
                {primaryButton && <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{primaryButton.text}</a>}
                {secondaryButton && <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{secondaryButton.text}</a>}
              </div>
            </AppearOnScroll>
          )}
        </div>

        <div className="w-full max-w-6xl px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, index) => {
            const cardClassName = `group flex flex-col gap-2 xl:gap-3 2xl:gap-4 h-full rounded${item.href ? " cursor-pointer" : ""}`;
            const cardInner = (
              <>
                <div className="relative aspect-4/3 overflow-hidden rounded-lg">
                  {item.videoSrc ? (
                    <video src={item.videoSrc} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" autoPlay loop muted playsInline />
                  ) : (
                    <img src={item.imageSrc} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  )}
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs tracking-wide uppercase text-foreground font-medium card rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.href && (
                    <div className="absolute inset-0 flex items-end p-4 bg-linear-to-t from-background/70 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        View room
                        <ArrowUpRight className="size-4" strokeWidth={1.5} />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold leading-tight">{item.title}</h3>
                    {item.price && (
                      <span className="shrink-0 text-sm md:text-base text-muted-foreground whitespace-nowrap">{item.price}</span>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-snug">{item.tags}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1 pt-3 border-t border-border">
                    {item.details.map((detail) => {
                      const IconComponent = detail.icon;
                      return (
                        <span key={detail.label} className="flex items-center gap-1">
                          <IconComponent className="size-[1em]" strokeWidth={1.5} />
                          {detail.label}: {detail.value}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </>
            );
            return (
              <AppearOnScroll key={item.title} variant="slide-up" delay={index * 0.08} className="h-full">
                {item.href ? (
                  <Link to={item.href} className={cardClassName}>{cardInner}</Link>
                ) : (
                  <div className={cardClassName}>{cardInner}</div>
                )}
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAttributeCards;

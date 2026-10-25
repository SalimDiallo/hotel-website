import WordByWordReveal from "@/components/animation/WordByWordReveal";
import ParallaxImage from "@/components/animation/ParallaxImage";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FeatureItem = {
  title: string;
  description: string;
  href: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesRevealCardsBentoProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: [FeatureItem, FeatureItem, FeatureItem, FeatureItem, FeatureItem, FeatureItem, FeatureItem];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesRevealCardsBento = ({ tag, title, description, primaryButton, secondaryButton, items, textAnimation }: FeaturesRevealCardsBentoProps) => {
  const gridClasses = [
    "md:col-span-2",
    "md:col-span-4",
    "md:col-span-3",
    "md:col-span-3",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-2",
  ];

  const staggerDelays = [
    0,
    0.1,
    0,
    0.1,
    0,
    0.1,
    0.2,
  ];

  return (
    <section aria-label="Features reveal cards bento section" className="py-20">
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

        <div className="w-full max-w-6xl px-6 mx-auto grid grid-cols-1 md:grid-cols-6 gap-3">
          {items.map((item, index) => (
            <AppearOnScroll key={item.title} variant="slide-up" delay={staggerDelays[index]} className={cn("col-span-1 group", gridClasses[index])}>
              <a href={item.href} className="block relative overflow-hidden rounded">
                <div className="relative h-80 xl:h-100 2xl:h-120 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <ParallaxImage src={item.imageSrc} videoSrc={item.videoSrc} className="rounded" />
                  </div>
                </div>
                <div className="absolute -inset-x-px -bottom-px h-2/5 backdrop-blur-xl mask-fade-top-overlay" aria-hidden="true" />
                <div className="absolute inset-x-3 bottom-3 2xl:inset-x-4 2xl:bottom-4 z-10">
                  <div className="relative flex flex-col gap-1 md:gap-0 md:group-hover:gap-1 p-3 2xl:p-4 transition-all duration-400">
                    <div className="absolute inset-0 -z-10 card rounded translate-y-0 opacity-100 md:translate-y-full md:opacity-0 transition-all duration-400 ease-out md:group-hover:translate-y-0 md:group-hover:opacity-100" />
                    <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold leading-tight text-foreground md:text-white transition-colors duration-400 md:group-hover:text-foreground">
                      {item.title}
                    </h3>
                    <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] transition-all duration-400 ease-out md:group-hover:grid-rows-[1fr]">
                      <p className="overflow-hidden text-sm md:text-base 2xl:text-lg leading-snug text-foreground opacity-100 md:opacity-0 transition-opacity duration-400 md:group-hover:opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesRevealCardsBento;

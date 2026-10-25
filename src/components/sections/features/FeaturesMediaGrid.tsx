import WordByWordReveal from "@/components/animation/WordByWordReveal";
import ParallaxImage from "@/components/animation/ParallaxImage";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesMediaGridProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesMediaGrid = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesMediaGridProps) => {
  return (
    <section aria-label="Features section" className="py-20">
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4 w-full max-w-6xl px-6 mx-auto">
          {items.map((item, index) => {
            // Bento: first tile is large (2x2), the rest fill a 2-column rhythm.
            const span = index === 0 ? "col-span-2 row-span-2" : "col-span-2 md:col-span-2 row-span-1";
            return (
              <AppearOnScroll key={item.title} variant="slide-up" delay={index * 0.06} className={span}>
                <div className="group relative w-full h-full rounded-lg overflow-hidden">
                  <ParallaxImage src={item.imageSrc} videoSrc={item.videoSrc} />
                  <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 gap-1">
                    <h3 className={`font-semibold leading-tight text-balance ${index === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"}`}>{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-snug text-balance">{item.description}</p>
                  </div>
                </div>
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesMediaGrid;

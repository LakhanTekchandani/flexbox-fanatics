import { motion } from "motion/react";
import { CULTURE, CULTURE_STRANDS } from "@/data/atlas";
import { Reveal, RevealLines, SectionLabel } from "./motion-primitives";

export function Culture() {
  const [dance, craft, festival] = CULTURE;

  return (
    <section id="culture" className="grain border-b border-border bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionLabel index="05">Culture</SectionLabel>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.5rem,6.5vw,5.75rem)] lg:col-span-8">
            <RevealLines lines={["CULTURE HAS MANY", "LANGUAGES."]} />
          </h2>
          <Reveal delay={1} className="lg:col-span-4 lg:pt-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Not one tradition with regional accents, but many traditions that have shared a
              landmass long enough to borrow from each other.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {dance && (
            <Reveal className="lg:col-span-5">
              <figure className="group relative h-full overflow-hidden">
                <img
                  src={dance.image}
                  alt="Classical Indian dancer in performance, lit against a dark stage"
                  loading="lazy"
                  className="h-[60vh] w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] lg:h-[74vh]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/85 to-transparent p-7 text-ink-foreground">
                  <p className="eyebrow text-ink-foreground/60">{dance.index} / {dance.line}</p>
                  <p className="display mt-3 text-4xl uppercase md:text-5xl">{dance.title}</p>
                  <p className="mt-3 max-w-sm text-sm text-ink-foreground/70">{dance.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          )}

          <div className="grid gap-6 lg:col-span-7 lg:gap-8">
            {[craft, festival].map(
              (item, i) =>
                item && (
                  <Reveal key={item.title} delay={i}>
                    <figure className="group grid items-stretch overflow-hidden border border-border bg-background sm:grid-cols-2">
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={
                            item.title === "Craft"
                              ? "Artisan hand-printing indigo textile with a carved wooden block"
                              : "Oil lamps lining river steps during an Indian festival of light"
                          }
                          loading="lazy"
                          className="h-56 w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] sm:h-full"
                        />
                      </div>
                      <figcaption className="flex flex-col justify-between p-7 md:p-9">
                        <p className="eyebrow">{item.index}</p>
                        <div className="mt-8">
                          <p className="display text-4xl uppercase">{item.title}</p>
                          <p className="mt-3 font-display text-lg text-accent">{item.line}</p>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            {item.body}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </Reveal>
                ),
            )}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rule-top pt-8">
          <motion.ul
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            {[...CULTURE_STRANDS, ...CULTURE_STRANDS].map((s, i) => (
              <li key={s + i} className="display flex items-center gap-10 text-3xl md:text-4xl">
                {s}
                <span aria-hidden className="text-accent">
                  ·
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

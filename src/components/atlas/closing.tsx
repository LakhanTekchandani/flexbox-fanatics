import { motion } from "motion/react";
import { IndiaSilhouette } from "./india-silhouette";
import { RevealLines } from "./motion-primitives";

export function Closing() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink text-ink-foreground">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 0.07, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -right-16 -bottom-24 h-[130%] text-ink-foreground"
          aria-hidden
        >
          <IndiaSilhouette />
        </motion.div>

        <div className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
          <p className="eyebrow text-accent">02 — The journey continues</p>
          <h2 className="display mt-10 text-[clamp(2.75rem,9vw,8rem)]">
            <RevealLines lines={["EXPLORE INDIA.", "ONE STORY AT A TIME."]} />
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <p className="font-display text-xl leading-snug text-ink-foreground/80 md:col-span-5 md:text-2xl">
              Every state has a story.
              <br />
              Every region has an identity.
              <br />
              Every journey reveals something new.
            </p>
            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <a
                href="#overview"
                className="group inline-flex items-center gap-4 bg-accent px-8 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-accent-foreground uppercase transition-transform duration-500 hover:-translate-y-0.5"
              >
                Explore the Atlas
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 border-t border-ink-foreground/15 px-6 py-8 md:px-10">
          <p className="text-[0.7rem] tracking-[0.24em] uppercase">The India Atlas</p>
          <p className="text-[0.7rem] tracking-[0.18em] text-ink-foreground/50 uppercase">
            A visual exploration project · Edition 01
          </p>
        </div>
      </footer>
    </>
  );
}

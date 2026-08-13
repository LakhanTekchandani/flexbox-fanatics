import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/hero-himalaya.jpg";
import { RevealLines } from "./motion-primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative min-h-[100svh] overflow-hidden border-b border-border pt-28 pb-10"
    >
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:px-10 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-end lg:col-span-7 lg:pb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="eyebrow mb-8"
          >
            A Visual Atlas of India — Edition 01
          </motion.p>

          <h1 className="display text-[clamp(3rem,11.5vw,10.5rem)]">
            <RevealLines lines={["THE INDIA", "ATLAS"]} delay={0.15} />
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 h-px origin-left bg-border-strong"
          />

          <div className="mt-8 grid gap-8 sm:grid-cols-[1.1fr_1fr] sm:items-start">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="font-display text-2xl leading-tight text-balance sm:text-[1.75rem]"
            >
              28 States. 8 Union Territories.
              <span className="text-accent"> Countless Stories.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="max-w-sm text-sm leading-relaxed text-muted-foreground"
            >
              A visual journey through the places, people, cultures and stories that make India
              extraordinary.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <a
              href="#overview"
              className="group inline-flex items-center gap-4 bg-foreground px-7 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-background uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore the Atlas
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <a
              href="#overview"
              className="eyebrow flex items-center gap-3 transition-colors hover:text-foreground"
            >
              <motion.span
                aria-hidden
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block h-8 w-px bg-border-strong"
              />
              Scroll / Discover
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: fade }}
          className="relative lg:col-span-5 lg:-mt-14"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative h-[52vh] overflow-hidden lg:h-[86vh]">
            <motion.img
              style={{ y: imageY }}
              src={heroImage}
              width={1600}
              height={1904}
              alt="Layered Himalayan ridgelines at sunrise in northern India"
              className="h-[115%] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-ink/10" />
          </div>
          <p className="eyebrow mt-4 text-right">Kumaon Himalaya · 29.4°N 79.6°E</p>
        </motion.div>
      </div>
    </section>
  );
}

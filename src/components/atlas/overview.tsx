import { motion } from "motion/react";
import { IndiaSilhouette } from "./india-silhouette";
import { Reveal, RevealLines, SectionLabel } from "./motion-primitives";

const CUES = [
  { k: "Latitude", v: "8°N — 37°N" },
  { k: "Terrain", v: "Himalaya · Plain · Plateau · Coast" },
  { k: "Seasons", v: "Six, by the older reckoning" },
  { k: "Neighbours", v: "Seven land borders, two seas" },
];

export function Overview() {
  return (
    <section id="overview" className="border-b border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionLabel index="02">India, in one view</SectionLabel>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.75rem,7vw,6rem)]">
              <RevealLines lines={["ONE LAND.", "MANY WORLDS."]} />
            </h2>
            <Reveal delay={1} className="mt-8 max-w-md">
              <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                India is less a single place than a working agreement between many. A day's travel
                changes the script on the shopfronts, the grain in the kitchen, the instrument in
                the temple and the shape of the roofline.
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                This atlas reads the country the way a map does — by region, by terrain, by the
                cultures that grew where they did for a reason.
              </p>
            </Reveal>

            <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
              {CUES.map((c, i) => (
                <Reveal key={c.k} delay={i} className="bg-background p-5">
                  <dt className="eyebrow">{c.k}</dt>
                  <dd className="mt-2 font-display text-lg leading-snug">{c.v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-4/5 max-w-[560px] text-secondary-foreground/12"
            >
              <IndiaSilhouette />
              <span className="absolute top-[26%] left-[8%] hidden text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:block">
                Thar
              </span>
              <span className="absolute top-[9%] right-[16%] hidden text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:block">
                Himalaya
              </span>
              <span className="absolute bottom-[16%] left-[18%] hidden text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:block">
                Arabian Sea
              </span>
              <span className="absolute right-[6%] bottom-[28%] hidden text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:block">
                Bay of Bengal
              </span>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-px border border-border bg-border">
              {[
                ["3.28M", "km² of land"],
                ["36", "states & territories"],
                ["1,600+", "spoken languages"],
              ].map(([v, l], i) => (
                <Reveal key={l} delay={i} className="bg-background p-5 text-center">
                  <p className="font-display text-2xl md:text-3xl">{v}</p>
                  <p className="eyebrow mt-2">{l}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

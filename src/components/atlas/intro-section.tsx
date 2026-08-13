import { Reveal, RevealLines, SectionLabel } from "./motion-primitives";

const STRANDS = [
  { k: "22", v: "Official languages" },
  { k: "36", v: "States & union territories" },
  { k: "43", v: "UNESCO World Heritage sites" },
];

export function IntroSection() {
  return (
    <section id="overview" className="rule-top py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionLabel index="01">Orientation</SectionLabel>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <h2 className="display text-[clamp(2.5rem,7vw,6rem)] lg:col-span-7">
            <RevealLines lines={["ONE LAND.", "MANY WORLDS."]} />
          </h2>

          <div className="lg:col-span-5 lg:pt-4">
            <Reveal className="max-w-md text-base leading-relaxed text-muted-foreground">
              From Himalayan snowlines to Kerala backwaters, from desert forts to rainforest
              coasts — India is less a single country than a continent of overlapping worlds,
              each with its own language, table, calendar and sky.
            </Reveal>

            <Reveal delay={1} className="mt-10 grid gap-px bg-border">
              {STRANDS.map((s) => (
                <div
                  key={s.k}
                  className="flex items-baseline justify-between gap-6 bg-background py-4"
                >
                  <span className="font-display text-3xl">{s.k}</span>
                  <span className="eyebrow">{s.v}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={2} className="mt-10">
              <a
                href="#top"
                className="group inline-flex items-center gap-4 border border-border-strong px-6 py-4 text-[0.72rem] font-medium tracking-[0.2em] uppercase transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Enter the Atlas
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { MAP_SHAPES, MAP_VIEWBOX } from "@/data/india-map";
import { DEFAULT_STATE_ID, STATES, type StateInfo } from "@/data/atlas";
import { Reveal, RevealLines, SectionLabel } from "./motion-primitives";
import { cn } from "@/lib/utils";

/** Falls back to a neutral record so every shape stays selectable. */
function infoFor(id: string, name: string): StateInfo {
  return (
    STATES[id] ?? {
      id,
      name,
      region: "India",
      knownFor: ["Regional identity"],
      blurb:
        "A detailed profile for this region is being written. The atlas is built so each state can be expanded with its own imagery, history and cultural record.",
    }
  );
}

export function AtlasMap() {
  const [selected, setSelected] = useState(DEFAULT_STATE_ID);
  const [hovered, setHovered] = useState<string | null>(null);

  const shapeName = useMemo(
    () => Object.fromEntries(MAP_SHAPES.map((s) => [s.id, s.name])),
    [],
  );
  const active = infoFor(selected, shapeName[selected] ?? selected);
  const documented = MAP_SHAPES.filter((s) => STATES[s.id]);

  return (
    <section id="atlas" className="grain relative border-b border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel index="03">The interactive atlas</SectionLabel>
            <h2 className="display mt-8 text-[clamp(2.5rem,6vw,5.25rem)]">
              <RevealLines lines={["SELECT A STATE."]} />
            </h2>
          </div>
          <Reveal delay={1} className="max-w-xs">
            <p className="text-sm leading-relaxed text-ink-foreground/60">
              Hover to trace a border. Select to open its record. Every region is a door into a
              different India.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Map — pointer devices and tablets up */}
          {/* Map — shown on all screen sizes, stacks vertically on mobile */}
<div className="col-span-full min-w-0 w-full lg:col-span-7">
  <motion.svg
    viewBox={MAP_VIEWBOX}
    role="group"
    aria-label="Interactive map of Indian states and union territories"
    className="h-auto w-full [filter:drop-shadow(0_30px_60px_rgba(0,0,0,0.35))]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    {MAP_SHAPES.map((s, i) => {
      const isSelected = s.id === selected;
      const isHovered = s.id === hovered;

      return (
        <motion.path
          key={s.id}
          d={s.d}
          role="button"
          tabIndex={0}
          aria-label={s.name}
          aria-pressed={isSelected}
          onMouseEnter={() => setHovered(s.id)}
          onMouseLeave={() => setHovered((h) => (h === s.id ? null : h))}
          onFocus={() => setHovered(s.id)}
          onBlur={() => setHovered((h) => (h === s.id ? null : h))}
          onClick={() => setSelected(s.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSelected(s.id);
            }
          }}
          className="cursor-pointer outline-none"
          initial={false}
          animate={{
            fill: isSelected
              ? "var(--accent)"
              : isHovered
                ? "oklch(1 0 0 / 0.20)"
                : "oklch(1 0 0 / 0.08)",
            stroke: isSelected ? "var(--accent)" : "oklch(1 0 0 / 0.28)",
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.002,
          }}
          strokeWidth={0.9}
          vectorEffect="non-scaling-stroke"
        />
      );
    })}

    {MAP_SHAPES.filter((s) => s.id === selected).map((s) => (
      <motion.circle
        key={`dot-${s.id}`}
        cx={s.c[0]}
        cy={s.c[1]}
        r={4}
        fill="var(--ink)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      />
    ))}
  </motion.svg>
</div>

          {/* State panel */}
          <div className="col-span-full min-w-0 w-full lg:col-span-5">
            <div className="w-full min-w-0 border-t border-ink-foreground/20 pt-8 lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="eyebrow text-accent">{active.region}</p>
                  <h3 className="display mt-4 text-[clamp(2.5rem,5vw,4.25rem)] uppercase">
                    {active.name}
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-foreground/65">
                    {active.blurb}
                  </p>

                  <div className="mt-8">
                    <p className="eyebrow text-ink-foreground/50">Known for</p>
                    <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg">
                      {active.knownFor.map((k, i) => (
                        <li key={k} className="flex items-center gap-3">
                          {i > 0 && <span className="text-accent">·</span>}
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {active.image && (
                    <div className="mt-8 min-w-0 w-full h-40 overflow-hidden md:h-56">
                      <img
                        src={active.image}
                        alt={`Landscape representative of ${active.name}`}
                        loading="lazy"
                        className="block h-full w-full max-w-full object-cover"
                      />
                    </div>
                  )}

                  <a
                    href="#states"
                    className="group mt-8 inline-flex items-center gap-4 border border-ink-foreground/25 px-6 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Explore {active.name}
                    <span
                      aria-hidden
                      className="transition-transform duration-500 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

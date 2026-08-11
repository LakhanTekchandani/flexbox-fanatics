import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { LANDSCAPES } from "@/data/atlas";
import { RevealLines, SectionLabel } from "./motion-primitives";
import { cn } from "@/lib/utils";

function Panel({
  item,
  index,
  active,
  onActivate,
}: {
  item: (typeof LANDSCAPES)[number];
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className={cn(
        "group relative min-h-[58vh] flex-1 cursor-pointer overflow-hidden transition-[flex-grow] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-h-[74vh]",
        active ? "lg:grow-[2.6]" : "lg:grow-[1]",
      )}
    >
      <motion.img
        style={{ y }}
        src={item.image}
        alt={`${item.name} landscape in India`}
        loading="lazy"
        className="absolute inset-0 h-[116%] w-full object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-700",
          active ? "bg-ink/35" : "bg-ink/65",
        )}
      />
      <div className="relative flex h-full flex-col justify-end p-6 text-ink-foreground md:p-8">
        <span className="eyebrow text-ink-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className={cn(
            "display mt-3 w-full truncate uppercase",
            active ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl lg:text-xl",
          )}
        >
          {item.name}
        </h3>
        <p
          className={cn(
            "mt-3 max-w-xs text-sm text-ink-foreground/75 transition-opacity duration-500",
            active ? "opacity-100" : "opacity-0 lg:opacity-0",
          )}
        >
          {item.note}
        </p>
        <p className="eyebrow mt-4 text-ink-foreground/50">{item.meta}</p>
      </div>
    </motion.div>
  );
}

export function Heritage() {
  const [active, setActive] = useState(0);

  return (
    <section id="heritage" className="border-b border-border bg-ink py-24 text-ink-foreground md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel index="06">Heritage & landscape</SectionLabel>
            <h2 className="display mt-8 text-[clamp(2.5rem,6vw,5.25rem)]">
              <RevealLines lines={["FIVE TERRAINS.", "ONE COUNTRY."]} />
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-foreground/60">
            Mountain, desert, coast, forest and stone — the physical grammar behind every regional
            culture in the atlas.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-px bg-ink-foreground/15 px-0 lg:flex-row">
        {LANDSCAPES.map((item, i) => (
          <Panel
            key={item.id}
            item={item}
            index={i}
            active={active === i}
            onActivate={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}

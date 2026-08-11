import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { NUMBERS } from "@/data/atlas";
import { Reveal, RevealLines, SectionLabel } from "./motion-primitives";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Numbers() {
  return (
    <section className="border-b border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel index="07">India through numbers</SectionLabel>
            <h2 className="display mt-8 text-[clamp(2.5rem,6vw,5.25rem)]">
              <RevealLines lines={["MEASURED,", "BRIEFLY."]} />
            </h2>
          </div>
          <Reveal delay={1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four figures that hint at the scale the rest of the atlas has to carry.
            </p>
          </Reveal>
        </div>

        <dl className="mt-16 divide-y divide-border border-y border-border">
          {NUMBERS.map((n, i) => (
            <Reveal key={n.label} delay={i}>
              <div className="grid items-baseline gap-4 py-8 md:grid-cols-12 md:py-10">
                <dd className="display text-[clamp(3rem,9vw,7rem)] md:col-span-5">
                  <Counter value={n.value} suffix={n.suffix} />
                </dd>
                <dt className="font-display text-2xl md:col-span-3 md:text-3xl">{n.label}</dt>
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
                  {n.note}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

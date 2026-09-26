import { Link } from "@tanstack/react-router";
import { FEATURED_STATE_IDS, STATES } from "@/data/atlas";
import { stateSlugForId } from "@/data/state-details";
import { Reveal, RevealLines, SectionLabel } from "./motion-primitives";
import { cn } from "@/lib/utils";

export function StateExplorer() {
  const states = FEATURED_STATE_IDS.map((id) => STATES[id]).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );

  return (
    <section id="states" className="border-b border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel index="04">State explorer</SectionLabel>
            <h2 className="display mt-8 text-[clamp(2.5rem,6vw,5.25rem)]">
              <RevealLines lines={["SIX WAYS TO", "BEGIN."]} />
            </h2>
          </div>
          <Reveal delay={1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A first selection from the atlas. Each record expands into terrain, craft, language
              and calendar.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {states.map((s, i) => {
            const slug = stateSlugForId(s.id);

            return (
              <Reveal key={s.id} delay={i % 3}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col bg-background transition-colors duration-500 hover:bg-paper",
                    i === 0 && "lg:row-span-1",
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.name} — representative landscape`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-background/85 px-2.5 py-1 text-[0.62rem] tracking-[0.2em] uppercase backdrop-blur-sm">
                      {s.region}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="display text-3xl uppercase md:text-4xl">{s.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                    <p className="mt-6 text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                      {s.knownFor.join(" · ")}
                    </p>
                    {slug ? (
                      <Link
                        to="/states/$state"
                        params={{ state: slug }}
                        className="link-underline mt-8 inline-flex w-fit items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase"
                      >
                        Explore
                        <span aria-hidden className="text-accent">
                          →
                        </span>
                      </Link>
                    ) : (
                      <span className="eyebrow mt-8 inline-flex w-fit items-center gap-3 opacity-60">
                        Explore
                        <span aria-hidden className="text-accent">
                          →
                        </span>
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

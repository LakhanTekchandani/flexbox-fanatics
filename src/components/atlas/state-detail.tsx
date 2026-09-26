import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { StateDetail as StateRecord } from "@/data/state-details";
import { getNextStateDetail } from "@/data/state-details";
import { Reveal, RevealLines } from "./motion-primitives";

type StateDetailProps = {
  state: StateRecord;
};

/** Fixed ink-toned top bar — same rhythm as the homepage navbar. */
function StateTopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-foreground/10 bg-ink/85 py-4 backdrop-blur-md">
      <nav
        aria-label="State"
        className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 md:px-10"
      >
        <Link
          to="/"
          className="flex items-baseline gap-2.5 text-[0.8rem] font-medium tracking-[0.28em] uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          The India Atlas
        </Link>

        <Link
          to="/"
          className="group inline-flex items-center gap-3 border border-ink-foreground/25 px-4 py-2 text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          <span
            aria-hidden
            className="inline-block transition-transform duration-500 group-hover:-translate-x-1"
          >
            ←
          </span>
          Back to Atlas
        </Link>
      </nav>
    </header>
  );
}

/** One editorial record row: label on the left, content on the right. */
function Record({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="border-t border-ink-foreground/15 py-14 md:py-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow text-accent">
            {index} — {label}
          </p>
          <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,3.25rem)] uppercase">
            <RevealLines lines={[title]} />
          </h2>
        </div>

        <div className="max-w-3xl lg:col-span-8">{children}</div>
      </div>
    </Reveal>
  );
}

/** Numbered list used for festivals, crafts and heritage. */
function NumberedList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-ink-foreground/15">
      {items.map((item, i) => (
        <li key={item} className="flex items-baseline gap-5 border-b border-ink-foreground/15 py-4">
          <span className="eyebrow w-7 shrink-0 text-accent">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-base leading-relaxed text-ink-foreground/85 md:text-lg">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Larger display-type list for places worth knowing. */
function PlacesList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-ink-foreground/15">
      {items.map((item) => (
        <li
          key={item}
          className="display border-b border-ink-foreground/15 py-4 text-2xl uppercase md:text-3xl"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function GlanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 border-b border-ink-foreground/15 py-5 sm:grid-cols-[140px_1fr] sm:gap-6 sm:py-6">
      <dt className="eyebrow pt-1 text-ink-foreground/45">{label}</dt>
      <dd className="text-base leading-relaxed text-ink-foreground/85 md:text-lg">{value}</dd>
    </div>
  );
}

export function StateDetail({ state }: StateDetailProps) {
  const next = getNextStateDetail(state.slug);

  return (
    <div className="grain min-h-screen bg-ink text-ink-foreground">
      <StateTopBar />

      {/* ——— HERO ——— */}
      <section className="border-b border-ink-foreground/15">
        {/* Content container: page padding lives here so the image never reaches the viewport edge. */}
        <div className="mx-auto grid min-h-[86vh] max-w-[1600px] px-6 pt-24 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
          <div className="flex flex-col justify-center py-16 lg:pr-14">
            <p className="eyebrow text-accent">{state.region}</p>

            <h1 className="display mt-6 text-[clamp(3.25rem,8vw,8rem)] uppercase leading-[0.88]">
              <RevealLines lines={[state.name]} />
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 md:text-lg">
              {state.introduction}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {state.knownFor.map((item) => (
                <span
                  key={item}
                  className="border border-ink-foreground/20 px-4 py-2 text-[0.7rem] tracking-[0.16em] uppercase text-ink-foreground/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="min-h-[340px] border-t border-ink-foreground/15 lg:min-h-full lg:border-t-0 lg:border-l">
            {state.image ? (
              <img
                src={state.image}
                alt={`${state.name} — representative landscape`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-ink-foreground/5" />
            )}
          </div>
        </div>
      </section>

      {/* ——— RECORDS ——— */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* 01 — AT A GLANCE */}
        <Record index="01" label="At a glance" title="The essentials.">
          <dl className="border-b border-ink-foreground/15">
            <GlanceRow label="Capital" value={state.capital} />
            <GlanceRow label="Region" value={state.region} />
            <GlanceRow label="Languages" value={state.languages.join(" · ")} />
            <GlanceRow label="Known for" value={state.knownFor.join(" · ")} />
          </dl>
        </Record>

        {/* 02 — THE LAND */}
        <Record index="02" label="The land" title="Geography & terrain.">
          <p className="text-base leading-relaxed text-ink-foreground/70 md:text-lg">
            {state.geography}
          </p>
        </Record>

        {/* 03 — HISTORY */}
        <Record index="03" label="A layered history" title="How it was made.">
          <p className="text-base leading-relaxed text-ink-foreground/70 md:text-lg">
            {state.history}
          </p>
        </Record>

        {/* 04 — CULTURE */}
        <Record index="04" label="Culture" title="Traditions & arts.">
          <p className="text-base leading-relaxed text-ink-foreground/70 md:text-lg">
            {state.culture}
          </p>
        </Record>

        {/* 05 — CUISINE */}
        <Record index="05" label="Taste of the state" title="The kitchen.">
          <p className="text-base leading-relaxed text-ink-foreground/70 md:text-lg">
            {state.cuisine}
          </p>
        </Record>

        {/* 06 — FESTIVALS */}
        <Record index="06" label="Festivals & calendar" title="When the year turns.">
          <NumberedList items={state.festivals} />
        </Record>

        {/* 07 — CRAFTS */}
        <Record index="07" label="Craft & making" title="Hands & workshops.">
          <NumberedList items={state.crafts} />
        </Record>

        {/* 08 — HERITAGE */}
        <Record index="08" label="Heritage" title="Monuments & sites.">
          <NumberedList items={state.heritage} />
        </Record>

        {/* 09 — PLACES */}
        <Record index="09" label="Places to know" title="Where to begin.">
          <PlacesList items={state.placesToKnow} />
        </Record>

        {/* 10 — FACTS */}
        <Record index="10" label="Did you know?" title="Worth remembering.">
          <ul className="border-t border-ink-foreground/15">
            {state.interestingFacts.map((fact, i) => (
              <li
                key={fact}
                className="flex items-baseline gap-6 border-b border-ink-foreground/15 py-6"
              >
                <span className="display shrink-0 text-3xl text-accent md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-ink-foreground/85 md:text-lg">
                  {fact}
                </span>
              </li>
            ))}
          </ul>
        </Record>
      </div>

      {/* ——— FOOTER NAVIGATION ——— */}
      <section className="border-t border-ink-foreground/15 px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-accent">Continue exploring</p>
            <h2 className="display mt-4 text-[clamp(2.25rem,5vw,4.5rem)] uppercase">
              Every state
              <br />
              is a different India.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-4 border border-ink-foreground/25 px-6 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <span
                aria-hidden
                className="inline-block transition-transform duration-500 group-hover:-translate-x-1"
              >
                ←
              </span>
              Back to Atlas
            </Link>

            <Link
              to="/states/$state"
              params={{ state: next.slug }}
              className="group inline-flex items-center gap-4 border border-ink-foreground/25 px-6 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Explore {next.name}
              <span
                aria-hidden
                className="inline-block transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

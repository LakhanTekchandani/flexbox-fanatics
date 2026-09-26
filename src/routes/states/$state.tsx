import { createFileRoute, Link } from "@tanstack/react-router";
import { getStateBySlug } from "@/data/state-details";
import { StateDetail } from "@/components/atlas/state-detail";

export const Route = createFileRoute("/states/$state")({
  // Slug lookup runs during SSR too, so the head tag is per-state.
  head: ({ params }) => {
    const record = getStateBySlug(params.state);
    if (!record) {
      return { meta: [{ title: "State not found — The India Atlas" }] };
    }
    const title = `${record.name} — The India Atlas`;
    const description = `${record.introduction}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: StatePage,
});

function StatePage() {
  const { state } = Route.useParams();

  const record = getStateBySlug(state);

  if (!record) {
    return (
      <div className="grain flex min-h-screen items-center justify-center bg-ink px-6 text-ink-foreground">
        <div className="max-w-lg text-center">
          <p className="eyebrow text-accent">The India Atlas</p>

          <h1 className="display mt-6 text-[clamp(3rem,10vw,6.5rem)] uppercase leading-[0.9]">
            State not found.
          </h1>

          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ink-foreground/65">
            There is no record filed under “{state}”. The atlas covers every Indian state — try one
            of those, or head back to the map.
          </p>

          <Link
            to="/"
            className="group mt-10 inline-flex items-center gap-4 border border-ink-foreground/25 px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            ← Back to Atlas
          </Link>
        </div>
      </div>
    );
  }

  return <StateDetail state={record} />;
}

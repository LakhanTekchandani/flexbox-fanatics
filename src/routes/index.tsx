import { createFileRoute } from "@tanstack/react-router";
import { AtlasNav } from "@/components/atlas/atlas-nav";
import { Hero } from "@/components/atlas/hero";
import { Overview } from "@/components/atlas/overview";
import { AtlasMap } from "@/components/atlas/atlas-map";
import { StateExplorer } from "@/components/atlas/state-explorer";
import { Culture } from "@/components/atlas/culture";
import { Heritage } from "@/components/atlas/heritage";
import { Numbers } from "@/components/atlas/numbers";
import { Closing } from "@/components/atlas/closing";

const title = "The India Atlas — Explore India, One Story at a Time";
const description =
  "An interactive visual atlas of India: 28 states, 8 union territories, and the landscapes, culture and heritage that define each region.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AtlasNav />
      <main>
        <Hero />
        <Overview />
        <AtlasMap />
        <StateExplorer />
        <Culture />
        <Heritage />
        <Numbers />
        <Closing />
      </main>
    </>
  );
}

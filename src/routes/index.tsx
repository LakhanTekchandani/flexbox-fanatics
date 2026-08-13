import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AtlasNav } from "@/components/atlas/atlas-nav";
import { GlobeIntro } from "@/components/atlas/globe-intro";
import { Hero } from "@/components/atlas/hero";
import { IntroSection } from "@/components/atlas/intro-section";
import { Closing } from "@/components/atlas/closing";

const title = "The India Atlas — Explore India, One Story at a Time";
const description =
  "A premium interactive visual atlas of India: 28 states, 8 union territories, and the landscapes, culture and heritage that define each region.";

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
  const [introDone, setIntroDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Keep the page pinned at the top while the opening plays.
  useEffect(() => {
    if (!mounted || introDone) return;
    window.scrollTo(0, 0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted, introDone]);

  const showSite = !mounted || introDone;

  return (
    <>
      {mounted && !introDone && <GlobeIntro onDone={() => setIntroDone(true)} />}
      {showSite && (
        <>
          <AtlasNav />
          <main>
            <Hero />
            <IntroSection />
            <Closing />
          </main>
        </>
      )}
    </>
  );
}

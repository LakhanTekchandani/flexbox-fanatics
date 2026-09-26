import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AtlasNav } from "@/components/atlas/atlas-nav";
import { GlobeIntro } from "@/components/atlas/globe-intro";
import { Hero } from "@/components/atlas/hero";
import { IntroSection } from "@/components/atlas/intro-section";
import { AtlasMap } from "@/components/atlas/atlas-map";
import { StateExplorer } from "@/components/atlas/state-explorer";
import { Culture } from "@/components/atlas/culture";
import { Heritage } from "@/components/atlas/heritage";
import { Numbers } from "@/components/atlas/numbers";
import { Closing } from "@/components/atlas/closing";

const title = "The India Atlas — Explore India, One Story at a Time";
const description =
  "A premium interactive visual atlas of India: 28 states, 8 union territories, and the landscapes, culture and heritage that define each region.";

/** Session-scoped flag: the opening only plays on first entry of a browser session. */
const INTRO_SEEN_KEY = "india-atlas-intro-seen";

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

  useEffect(() => {
    // The opening is an entry experience: skip it if the session already saw it.
    // Checked before `mounted` flips so GlobeIntro never mounts on remounts.
    try {
      if (sessionStorage.getItem(INTRO_SEEN_KEY)) setIntroDone(true);
    } catch {
      // Storage unavailable — fall back to playing the intro.
    }
    setMounted(true);
  }, []);

  const handleIntroDone = () => {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {
      // Ignore quota / privacy-mode errors.
    }
    setIntroDone(true);
  };

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
      {mounted && !introDone && <GlobeIntro onDone={handleIntroDone} />}
      {showSite && (
        <>
          <AtlasNav />
          <main>
            <Hero />
            <IntroSection />
            <AtlasMap />
            <StateExplorer />
            <Culture />
            <Heritage />
            <Numbers />
            <Closing />
          </main>
        </>
      )}
    </>
  );
}

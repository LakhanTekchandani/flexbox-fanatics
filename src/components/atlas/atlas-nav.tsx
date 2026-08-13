import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Explore", href: "#overview" },
  { label: "States", href: "#overview" },
  { label: "Culture", href: "#overview" },
  { label: "Heritage", href: "#overview" },
];

export function AtlasNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500",
        scrolled
          ? "border-b border-border bg-background/90 py-3 backdrop-blur-md"
          : "border-b border-transparent py-6",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1600px] items-center justify-between gap-8 px-6 md:px-10"
      >
        <a
          href="#top"
          className="flex items-baseline gap-2.5 text-[0.8rem] font-medium tracking-[0.28em] uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          The India Atlas
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#atlas"
          className="group inline-flex items-center gap-3 border border-border-strong px-4 py-2 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
        >
          Explore Atlas
          <span
            aria-hidden
            className="inline-block transition-transform duration-500 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </nav>
    </header>
  );
}

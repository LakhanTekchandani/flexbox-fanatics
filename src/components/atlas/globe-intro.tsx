import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { geoOrthographic, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import worldTopo from "@/data/world-110m.json";

/**
 * Cinematic opening: WORLD → INDIA → ATLAS.
 * A single canvas Earth (orthographic projection) that rotates for ~2.2s,
 * settles with India facing the camera, holds ~1s, then the camera pulls back
 * and the overlay fades to reveal the homepage.
 */

const ROTATE_MS = 2200;
const HOLD_MS = 1000;
const ZOOM_MS = 1100;
const FADE_MS = 700;

// India-facing view
const TARGET_LAMBDA = -80;
const TARGET_PHI = -18;
const START_LAMBDA = TARGET_LAMBDA + 460; // ~1.3 revolutions

const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

type World = FeatureCollection<Geometry, { name?: string }>;

function readToken(el: HTMLElement, name: string, fallback: string) {
  const v = getComputedStyle(el).getPropertyValue(name).trim();
  return v || fallback;
}

export function GlobeIntro({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fading, setFading] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setFading(true);
    window.setTimeout(onDone, FADE_MS);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const world = feature(
      worldTopo as never,
      (worldTopo as never as { objects: { countries: never } }).objects.countries,
    ) as unknown as World;
    const countries = world.features;
    const india = countries.find((f) => f.properties?.name === "India");
    const graticule = geoGraticule10();
    const sphere = { type: "Sphere" } as const;

    const styles = {
      ocean: readToken(canvas, "--globe-ocean", "#dfe6ea"),
      land: readToken(canvas, "--globe-land", "#cfc6b4"),
      border: readToken(canvas, "--globe-border", "#a8a08e"),
      grid: readToken(canvas, "--globe-grid", "#c9c2b4"),
      accent: readToken(canvas, "--globe-accent", "#e08b2f"),
      rim: readToken(canvas, "--globe-rim", "#9a927f"),
    };

    const projection = geoOrthographic().clipAngle(90);
    const path = geoPath(projection, ctx);

    let dpr = 1;
    let w = 0;
    let h = 0;
    let baseScale = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      baseScale = Math.min(w, h) * (w < 640 ? 0.4 : 0.36);
      projection.translate([w / 2, h / 2]);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const start = performance.now();

    const render = (lambda: number, phi: number, scale: number, indiaGlow: number) => {
      projection.rotate([lambda, phi, 0]).scale(scale);
      ctx.clearRect(0, 0, w, h);

      // ocean
      ctx.beginPath();
      path(sphere);
      ctx.fillStyle = styles.ocean;
      ctx.fill();

      // graticule
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = styles.grid;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.7;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // land
      ctx.beginPath();
      for (const f of countries) path(f);
      ctx.fillStyle = styles.land;
      ctx.fill();

      // borders
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = styles.border;
      for (const f of countries) {
        ctx.beginPath();
        path(f);
        ctx.stroke();
      }

      // India emphasis
      if (india && indiaGlow > 0) {
        ctx.globalAlpha = indiaGlow;
        ctx.beginPath();
        path(india);
        ctx.fillStyle = styles.accent;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = styles.accent;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // rim light
      ctx.beginPath();
      path(sphere);
      ctx.lineWidth = 1;
      ctx.strokeStyle = styles.rim;
      ctx.globalAlpha = 0.6;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    if (reduced) {
      render(TARGET_LAMBDA, TARGET_PHI, baseScale, 1);
      const t = window.setTimeout(finish, 900);
      return () => {
        window.clearTimeout(t);
        window.removeEventListener("resize", resize);
      };
    }

    const tick = (now: number) => {
      const t = now - start;

      let lambda = START_LAMBDA;
      let scale = baseScale;
      let glow = 0;

      if (t < ROTATE_MS) {
        const p = easeInOutSine(t / ROTATE_MS);
        lambda = START_LAMBDA + (TARGET_LAMBDA - START_LAMBDA) * p;
        glow = Math.max(0, (p - 0.72) / 0.28);
      } else if (t < ROTATE_MS + HOLD_MS) {
        lambda = TARGET_LAMBDA;
        glow = 1;
      } else if (t < ROTATE_MS + HOLD_MS + ZOOM_MS) {
        const p = easeInOutCubic((t - ROTATE_MS - HOLD_MS) / ZOOM_MS);
        lambda = TARGET_LAMBDA;
        scale = baseScale * (1 - 0.62 * p); // true camera pull-back
        glow = 1;
      } else {
        render(TARGET_LAMBDA, TARGET_PHI, baseScale * 0.38, 1);
        finish();
        return;
      }

      render(lambda, TARGET_PHI, scale, glow);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-background"
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: FADE_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden
    >
      <canvas ref={canvasRef} className="h-full w-full" />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-6 pt-8 md:px-10">
        <span className="eyebrow">The India Atlas</span>
        <span className="eyebrow">World → India → Atlas</span>
      </div>

      <button
        type="button"
        onClick={finish}
        className="eyebrow absolute right-6 bottom-8 transition-colors hover:text-foreground md:right-10"
      >
        Skip intro
      </button>
    </motion.div>
  );
}

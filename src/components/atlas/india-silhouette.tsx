import { MAP_SHAPES, MAP_VIEWBOX } from "@/data/india-map";
import { cn } from "@/lib/utils";

/** Static India silhouette, used as an editorial graphic (not interactive). */
export function IndiaSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox={MAP_VIEWBOX}
      role="img"
      aria-label="Outline map of India"
      className={cn("h-full w-full", className)}
    >
      <g>
        {MAP_SHAPES.map((s) => (
          <path
            key={s.id}
            d={s.d}
            fill="currentColor"
            stroke="var(--background)"
            strokeWidth={1.2}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
    </svg>
  );
}

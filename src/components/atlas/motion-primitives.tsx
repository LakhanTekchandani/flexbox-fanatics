import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

const easing = [0.16, 1, 0.3, 1] as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easing, delay: i * 0.08 },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const Comp = motion[as];

  return (
    <Comp
      ref={ref as never}
      className={className}
      custom={delay}
      variants={revealVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </Comp>
  );
}

/** Splits a headline into lines that rise into place behind a mask. */
export function RevealLines({
  lines,
  className,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 1, ease: easing, delay: delay + i * 0.1 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <Reveal className="flex items-baseline gap-4">
      <span className="eyebrow text-accent">{index}</span>
      <span className="eyebrow">{children}</span>
    </Reveal>
  );
}

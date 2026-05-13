"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";

/**
 * Hero animation: 3-pose crossfade slideshow (line-art acroyoga sequence).
 * Reduced motion → static first pose.
 */
const POSES = [
  { src: "/logos/lcda-pose-a.svg", label: "Acroyoga · inversión sobre base" },
  { src: "/logos/lcda-pose-b.svg", label: "Acroyoga · star pose" },
  { src: "/logos/lcda-pose-c.svg", label: "Acroyoga · postura kneeling" },
];

export function AnimatedHero() {
  const reduce = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="La Casa del Acroyoga — secuencia de poses"
      style={{
        position: "relative",
        width: "clamp(180px, 22vh, 280px)",
        aspectRatio: "352 / 498",
        margin: "0 auto",
      }}
    >
      {POSES.map((pose, i) => (
        <div
          key={pose.src}
          className={reduce && i > 0 ? "lcda-pose-hidden" : `lcda-pose lcda-pose-${i}`}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={pose.src}
            alt={i === 0 ? pose.label : ""}
            width={352}
            height={498}
            priority={i === 0}
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </div>
      ))}

      <style>{`
        .lcda-pose {
          opacity: 0;
          animation: lcdaPoseFade 9000ms ease-in-out infinite;
          will-change: opacity;
        }
        .lcda-pose-0 { animation-delay: 0ms; }
        .lcda-pose-1 { animation-delay: -6000ms; }
        .lcda-pose-2 { animation-delay: -3000ms; }
        .lcda-pose-hidden { display: none; }

        @keyframes lcdaPoseFade {
          0%   { opacity: 1; }
          27%  { opacity: 1; }
          33%  { opacity: 0; }
          94%  { opacity: 0; }
          100% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .lcda-pose { animation: none !important; opacity: 1; }
          .lcda-pose-1, .lcda-pose-2 { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";

/**
 * Hero animation:
 *  - Original logo SVG (lcda-isologo-pose.svg) with draw-on mask wipe.
 *  - 4s loop, alternate direction (draws on then "un-draws" back).
 *  - Wordmark stacked below the isologo as part of the composition.
 *  - Reduced motion: static SVG.
 */

export function AnimatedHero() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-label="La Casa del Acroyoga"
      style={{
        position: "relative",
        width: "clamp(220px, 28vw, 340px)",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(8px, 1vw, 14px)",
      }}
    >
      <div
        className={reduce ? "lcda-pose-static" : "lcda-pose-draw"}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",
        }}
      >
        <Image
          src="/logos/lcda-isologo-pose.svg"
          alt=""
          width={500}
          height={500}
          priority
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      </div>

      <div
        aria-hidden
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(9px, 1vw, 12px)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--cobalt-700)",
          }}
        >
          LA CASA DEL
        </span>
        <span
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(22px, 2.6vw, 36px)",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "var(--cobalt-700)",
            lineHeight: 1,
          }}
        >
          ACROYOGA
        </span>
      </div>

      <style>{`
        .lcda-pose-draw {
          -webkit-mask-image: linear-gradient(to top, black 0%, black 100%);
          mask-image: linear-gradient(to top, black 0%, black 100%);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: bottom;
          mask-position: bottom;
          animation: lcdaPoseDraw 4500ms cubic-bezier(0.65, 0, 0.35, 1) infinite alternate;
          will-change: mask-size, opacity, filter;
        }
        @keyframes lcdaPoseDraw {
          0% {
            -webkit-mask-size: 100% 0%;
            mask-size: 100% 0%;
            opacity: 0.15;
            filter: blur(4px);
          }
          55% {
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            opacity: 1;
            filter: blur(0);
          }
          100% {
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}

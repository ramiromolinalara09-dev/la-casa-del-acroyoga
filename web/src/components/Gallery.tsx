"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { ChevronDown } from "./icons";

type Photo = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

const PHOTOS: Photo[] = [
  { src: "/images/gallery/g-01.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 1280, h: 960 },
  { src: "/images/gallery/g-02.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 853, h: 1280 },
  { src: "/images/gallery/g-03.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 853, h: 1280 },
  { src: "/images/gallery/g-04.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 853, h: 1280 },
  { src: "/images/gallery/g-05.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 853, h: 1280 },
  { src: "/images/gallery/g-06.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 817, h: 1022 },
  { src: "/images/gallery/g-07.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 855, h: 1280 },
  { src: "/images/gallery/g-08.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 1280, h: 852 },
  { src: "/images/gallery/g-09.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 1280, h: 852 },
  { src: "/images/gallery/g-10.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 855, h: 1280 },
  { src: "/images/gallery/g-11.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 855, h: 1280 },
  { src: "/images/gallery/g-12.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 1280, h: 827 },
  { src: "/images/gallery/g-13.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 960, h: 1280 },
  { src: "/images/gallery/g-14.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 1280, h: 852 },
  { src: "/images/gallery/g-15.webp", alt: "Acroyoga en La Casa del Acroyoga", w: 960, h: 1280 },
];

const INITIAL_VISIBLE = 12;

export function Gallery() {
  const reduce = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? PHOTOS : PHOTOS.slice(0, INITIAL_VISIBLE);
  const hasMore = PHOTOS.length > INITIAL_VISIBLE;

  return (
    <section
      id="galeria"
      style={{
        background: "var(--cream-50)",
        paddingBlock: "clamp(64px, 8vw, 112px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto", marginBottom: "clamp(32px, 4vw, 56px)" }}>
          <Reveal as="span" className="eyebrow">
            <span style={{ display: "inline-block", marginBottom: 12 }}>
              GALERÍA
            </span>
          </Reveal>

          <Reveal as="h2" delay={0.05}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "clamp(26px, 3vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--ink-900)",
              }}
            >
              Momentos de{" "}
              <span className="font-italic-accent" style={{ color: "var(--cobalt-700)" }}>
                vuelo, confianza y comunidad
              </span>
              .
            </span>
          </Reveal>
        </div>

        <div className="lcda-gallery">
          {visible.map((p, i) => {
            const isExtra = i >= INITIAL_VISIBLE;
            return (
              <motion.figure
                key={p.src}
                initial={
                  reduce
                    ? false
                    : isExtra
                      ? { opacity: 0, y: 16 }
                      : { opacity: 0, y: 24 }
                }
                animate={isExtra ? { opacity: 1, y: 0 } : undefined}
                whileInView={isExtra ? undefined : { opacity: 1, y: 0 }}
                viewport={isExtra ? undefined : { once: true, amount: 0.15 }}
                transition={{
                  duration: isExtra ? 0.5 : 0.7,
                  delay: isExtra ? (i - INITIAL_VISIBLE) * 0.05 : (i % 3) * 0.06,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="lcda-gallery-item"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 6 ? "eager" : "lazy"}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: 4,
                  }}
                />
              </motion.figure>
            );
          })}
        </div>

        {hasMore && !showAll && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(32px, 4vw, 56px)" }}>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn btn-ghost"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Ver más fotos
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .lcda-gallery {
          column-count: 3;
          column-gap: clamp(8px, 1vw, 16px);
        }
        .lcda-gallery-item {
          margin: 0 0 clamp(8px, 1vw, 16px);
          break-inside: avoid;
          overflow: hidden;
          border-radius: 4px;
        }
        @media (max-width: 1024px) {
          .lcda-gallery { column-count: 2; }
        }
        @media (max-width: 640px) {
          .lcda-gallery { column-count: 2; column-gap: 6px; }
          .lcda-gallery-item { margin-bottom: 6px; }
        }
      `}</style>
    </section>
  );
}

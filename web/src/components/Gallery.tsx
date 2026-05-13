"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

type Photo = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

const PHOTOS: Photo[] = [
  { src: "/images/gallery/g-01-handstand-indoor.webp", alt: "Acroyoga, postura de inversión en el estudio", w: 853, h: 1280 },
  { src: "/images/gallery/g-04-beach-pose-wide.webp", alt: "Pose de acroyoga en la playa", w: 1280, h: 852 },
  { src: "/images/gallery/g-02-group-indoor.webp", alt: "Clase grupal de acroyoga en el estudio", w: 853, h: 1280 },
  { src: "/images/gallery/g-05-beach-sunset-wide.webp", alt: "Acroyoga al atardecer en la playa", w: 1280, h: 852 },
  { src: "/images/gallery/g-06-beach-vertical.webp", alt: "Pose vertical en la playa", w: 855, h: 1280 },
  { src: "/images/gallery/g-03-partner-indoor.webp", alt: "Acroyoga en pareja en el estudio", w: 855, h: 1280 },
  { src: "/images/gallery/g-07-beach-group-wide.webp", alt: "Encuentro grupal de acroyoga en la playa", w: 960, h: 1280 },
  { src: "/images/gallery/g-08-beach-community.webp", alt: "Comunidad reunida en la playa", w: 960, h: 1280 },
];

export function Gallery() {
  const reduce = useReducedMotion();

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
          {PHOTOS.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.06,
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
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 4,
                }}
              />
            </motion.figure>
          ))}
        </div>
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

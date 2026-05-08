"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedHero } from "./AnimatedHero";

const WHATSAPP = "https://wa.me/529999909291?text=Hola%2C%20quiero%20reservar%20mi%20primera%20clase%20de%20acroyoga.";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(64px, 7vw, 96px)",
        paddingBottom: "clamp(20px, 3vw, 40px)",
        background: "#FBF5E9",
        overflow: "hidden",
      }}
    >
      {/* Decorative diamonds — denser on the sides, larger scale */}
      <DecorativeDiamond top="10%" left="4%"  rotate={-12} size="clamp(40px, 7vw, 88px)" delay={0.3} />
      <DecorativeDiamond top="14%" right="5%" rotate={18}  size="clamp(36px, 6vw, 76px)" delay={0.5} />
      <DecorativeDiamond top="28%" left="11%" rotate={-8}  size="clamp(20px, 2.5vw, 32px)" delay={0.55} opacity={0.32} />
      <DecorativeDiamond top="30%" right="9%" rotate={20}  size="clamp(22px, 2.7vw, 36px)" delay={0.55} opacity={0.32} />
      <DecorativeDiamond top="42%" left="2%"  rotate={32}  size="clamp(34px, 5.2vw, 68px)" delay={0.6} opacity={0.45} />
      <DecorativeDiamond top="45%" right="2%" rotate={-22} size="clamp(36px, 5.5vw, 72px)" delay={0.65} opacity={0.45} />
      <DecorativeDiamond top="58%" left="8%"  rotate={-15} size="clamp(26px, 3.6vw, 48px)" delay={0.7} opacity={0.4} />
      <DecorativeDiamond top="60%" right="7%" rotate={10}  size="clamp(28px, 4vw, 52px)" delay={0.7} opacity={0.4} />
      <DecorativeDiamond top="72%" left="14%" rotate={45}  size={24} delay={0.75} opacity={0.3} />
      <DecorativeDiamond top="75%" right="13%" rotate={-30} size={28} delay={0.75} opacity={0.32} />
      <DecorativeDiamond bottom="12%" left="6%"  rotate={6}   size="clamp(36px, 6vw, 80px)" delay={0.8} />
      <DecorativeDiamond bottom="16%" right="6%" rotate={-22} size="clamp(42px, 7vw, 92px)" delay={0.9} />
      <DecorativeDiamond bottom="6%"  left="22%"  rotate={12}  size={20} delay={0.95} opacity={0.28} />
      <DecorativeDiamond bottom="8%"  right="24%" rotate={-18} size={22} delay={0.95} opacity={0.28} />
      <DecorativeDiamond top="22%" left="18%" rotate={28}  size={16} delay={0.6} opacity={0.22} />
      <DecorativeDiamond top="24%" right="17%" rotate={-12} size={18} delay={0.6} opacity={0.22} />

      <div className="shell" style={{ position: "relative", textAlign: "center", zIndex: 2, width: "100%" }}>
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: reduce ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ marginBottom: 12, display: "inline-block" }}
        >
          MÉRIDA · YUCATÁN · MX
        </motion.span>

        <motion.h1
          aria-label="La Casa del Acroyoga"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          style={{ marginBottom: 12 }}
        >
          <AnimatedHero />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.6 }}
          style={{
            fontSize: "clamp(32px, 5.5vw, 72px)",
            lineHeight: 1.05,
            color: "var(--ink-900)",
            maxWidth: 900,
            margin: "0 auto 8px",
            fontWeight: 700,
            letterSpacing: "-0.025em",
          }}
        >
          Estudio de acroyoga
          <span className="font-italic-accent"> en </span>
          Mérida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.75 }}
          style={{
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--ink-500)",
            maxWidth: 560,
            margin: "0 auto 16px",
          }}
        >
          Yoga, acrobacia y masaje thai en una sola clase. Llegas solo y te emparejamos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.9 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 12 }}
        >
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">
            Reservar mi primera clase
            <ArrowRight />
          </a>
        </motion.div>

        {/* Bottom meta block — three short fragments */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 1.05 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(20px, 4vw, 56px)",
            flexWrap: "wrap",
            marginTop: 0,
          }}
        >
          <MetaItem label="Estudio" value="Mérida · Centro" />
          <MetaItem label="Desde" value="2019" />
        </motion.div>
      </div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: "center" }}>
      <span
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase",
          color: "var(--cobalt-700)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 14,
          fontWeight: 500,
          color: "var(--ink-700)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DecorativeDiamond({
  top, bottom, left, right, rotate, size, delay, opacity = 0.5,
}: {
  top?: string; bottom?: string; left?: string; right?: string;
  rotate: number; size: number | string; delay: number; opacity?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotate - 12 }}
      animate={{ opacity, rotate }}
      transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay }}
      style={{
        position: "absolute",
        top, bottom, left, right,
        width: size, height: size,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--cobalt-300)" strokeWidth="1">
        <path d="M16 2 L30 16 L16 30 L2 16 Z" />
        <path d="M16 8 L24 16 L16 24 L8 16 Z" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

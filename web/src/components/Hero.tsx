"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedHero } from "./AnimatedHero";
import { FEATHER_URL, buildWhatsappUrl } from "@/lib/links";
import { WhatsAppIcon, ArrowRight } from "./icons";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "clamp(108px, 9vw, 132px)",
        paddingBottom: "clamp(36px, 4vh, 56px)",
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
        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          style={{
            fontWeight: 500,
            color: "var(--cobalt-700)",
            fontSize: "clamp(26px, 2.6vw, 38px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: "0 auto clamp(2px, 1.2vw, 12px)",
          }}
        >
          Bienvenido a{" "}
          <span className="lcda-welcome-name">
            <span className="font-italic-accent" style={{ color: "var(--cobalt-900)" }}>
              La Casa del Acroyoga
            </span>
            .
          </span>
        </motion.h1>

        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
          style={{ marginBottom: 4 }}
        >
          <AnimatedHero />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.7 }}
          style={{
            fontSize: "clamp(26px, 3.4vw, 48px)",
            lineHeight: 1.05,
            color: "var(--ink-900)",
            maxWidth: 800,
            margin: "0 auto 4px",
            fontWeight: 700,
            letterSpacing: "-0.025em",
          }}
        >
          Estudio de acroyoga
          <span className="font-italic-accent"> en </span>
          Mérida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.85 }}
          style={{
            maxWidth: "min(94%, 880px)",
            margin: "0 auto 16px",
            color: "var(--ink-500)",
            lineHeight: 1.55,
            fontSize: "clamp(14px, 1vw, 16px)",
          }}
        >
          <p>
            Un espacio creado para conectar cuerpo, mente y comunidad a través del
            movimiento, la confianza y la expresión consciente. Aquí vivimos el acroyoga
            como una experiencia de transformación, juego y crecimiento personal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.9 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}
        >
          <a href={FEATHER_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Reservar mi primera clase
            <ArrowRight />
          </a>
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <WhatsAppIcon size={16} />
            Contactar por WhatsApp
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
          <MetaItem label="Estudio" value="Mérida, Yucatán" />
          <MetaItem label="Desde" value="2020" />
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

function DecorativeDiamond({
  top, bottom, left, right, rotate, size, delay, opacity = 0.55,
}: {
  top?: string; bottom?: string; left?: string; right?: string;
  rotate: number; size: number | string; delay: number; opacity?: number;
}) {
  const reduce = useReducedMotion();
  const widthValue = typeof size === "number" ? size * 0.6 : `calc(${size} * 0.6)`;

  const driftAmplitude = 4 + ((delay * 7) % 5);
  const driftDuration = 5 + ((delay * 3) % 2.5);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotate - 12, y: 0 }}
      animate={
        reduce
          ? { opacity, rotate, y: 0 }
          : { opacity, rotate, y: [0, -driftAmplitude, 0] }
      }
      transition={{
        opacity: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay },
        rotate: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay },
        y: reduce
          ? { duration: 0 }
          : {
              duration: driftDuration,
              delay: delay + 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
      }}
      style={{
        position: "absolute",
        top, bottom, left, right,
        width: widthValue, height: size,
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
      }}
    >
      <img
        src="/logos/lcda-diamond-vertical.svg"
        alt=""
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </motion.div>
  );
}

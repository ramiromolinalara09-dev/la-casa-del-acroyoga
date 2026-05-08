"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const FEATHER = "https://feather.rsvp/o/lacasadelacroyoga";

export function Cta() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        paddingBlock: "var(--space-11)",
        background: "var(--cobalt-700)",
        color: "var(--cream-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 640,
          height: 640,
          opacity: 0.12,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/hero-frame-2-pose.png"
          alt=""
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="shell"
        style={{ position: "relative", zIndex: 2, textAlign: "center" }}
      >
        <span
          className="eyebrow"
          style={{ color: "var(--cobalt-300)", marginBottom: 24, display: "inline-block" }}
        >
          ÚNETE A LA CASA
        </span>

        <h2
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "var(--fs-display)",
            lineHeight: "var(--lh-tight)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--cream-50)",
            marginBottom: 24,
            textTransform: "uppercase",
          }}
        >
          Ven, vuela
          <span style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, textTransform: "none", color: "var(--cobalt-300)" }}>
            {" "}y aterriza{" "}
          </span>
          en comunidad.
        </h2>

        <p
          style={{
            fontSize: "var(--fs-body-lg)",
            lineHeight: "var(--lh-base)",
            color: "var(--cobalt-300)",
            maxWidth: 560,
            margin: "0 auto 48px",
          }}
        >
          Tu primera clase es la que más se siente. Reserva tu lugar y
          llega 10 minutos antes.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={FEATHER}
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              background: "var(--cream-50)",
              color: "var(--cobalt-900)",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Reservar mi primera clase
            <ArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

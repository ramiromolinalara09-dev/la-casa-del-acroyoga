import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="acroyoga"
      style={{
        paddingBlock: "var(--section)",
        background: "var(--cream-50)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div
        className="shell"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "clamp(32px, 5vw, 96px)",
          alignItems: "center",
        }}
      >
        <Reveal className="about-copy">
          <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>
            ¿QUÉ ES ACROYOGA?
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "var(--fs-h1)",
              lineHeight: "var(--lh-snug)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--ink-900)",
              marginBottom: 24,
            }}
          >
            Experiencia{" "}
            <span className="font-italic-accent">en</span> comunidad,
            confianza, juego y diversión.
          </h2>
          <p
            style={{
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-base)",
              color: "var(--ink-700)",
              marginBottom: 16,
            }}
          >
            El acroyoga combina yoga, acrobacia y{" "}
            <span className="font-italic-accent">conexión humana</span>
            <sup style={{ fontSize: "0.65em", color: "var(--cobalt-700)", marginLeft: 1 }}>1</sup>
            . Se practica entre dos o más personas: alguien hace de{" "}
            <strong style={{ color: "var(--ink-900)", fontWeight: 600 }}>base</strong>{" "}
            (sostiene), alguien hace de{" "}
            <strong style={{ color: "var(--ink-900)", fontWeight: 600 }}>flyer</strong>{" "}
            (vuela), y siempre hay un{" "}
            <strong style={{ color: "var(--ink-900)", fontWeight: 600 }}>spotter</strong>{" "}
            (cuida) cerca para acompañar el espacio.
          </p>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.55,
              color: "var(--ink-500)",
              fontStyle: "italic",
              marginTop: 8,
              paddingLeft: 12,
              borderLeft: "2px solid var(--cobalt-300)",
            }}
          >
            <sup style={{ fontSize: "0.85em", color: "var(--cobalt-700)", marginRight: 4 }}>1</sup>
            A través del movimiento, la confianza y el trabajo en equipo, se desarrolla
            fuerza, equilibrio, flexibilidad, comunicación y presencia, entre muchas
            cosas más.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="about-illustration">
          <div
            style={{
              position: "relative",
              aspectRatio: "1 / 1",
              maxWidth: 520,
              marginInline: "auto",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/about-group.webp"
              alt="Comunidad de La Casa del Acroyoga practicando juntos en Mérida"
              width={1200}
              height={1200}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

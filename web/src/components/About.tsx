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
          gap: "var(--space-9)",
          alignItems: "center",
        }}
      >
        <Reveal className="about-copy">
          <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>
            01 · ¿QUÉ ES ACROYOGA?
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
            Yoga{" "}
            <span className="font-italic-accent">en</span> comunidad,
            confianza y juego.
          </h2>
          <p
            style={{
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-base)",
              color: "var(--ink-700)",
              marginBottom: 16,
            }}
          >
            El acroyoga combina yoga, acrobacia y masaje terapéutico. Se practica entre
            dos o más personas: alguien hace de <strong style={{ color: "var(--ink-900)", fontWeight: 600 }}>base</strong>{" "}
            (sostiene), alguien hace de <strong style={{ color: "var(--ink-900)", fontWeight: 600 }}>flyer</strong>{" "}
            (vuela), y siempre hay un <strong style={{ color: "var(--ink-900)", fontWeight: 600 }}>spotter</strong>{" "}
            cerca para cuidar el espacio.
          </p>
          <p
            style={{
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-base)",
              color: "var(--ink-700)",
            }}
          >
            En La Casa entramos despacio: te emparejamos con alguien de tu nivel, te
            mostramos cómo comunicar peso y posición, y construimos las posturas paso
            a paso. <span className="font-italic-accent">Nadie cae</span>: un spotter siempre
            está ahí.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="about-illustration">
          <div
            style={{
              position: "relative",
              aspectRatio: "1 / 1",
              maxWidth: 460,
              marginInline: "auto",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--cobalt-100)",
                borderRadius: "var(--radius-xl)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
                padding: "8%",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/illustration-group-jam.png"
                alt="Ilustración de tres figuras en triangulación de acroyoga"
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

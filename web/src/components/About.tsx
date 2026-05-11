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
            01 · BIENVENIDA
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
            Bienvenido a La Casa del{" "}
            <span className="font-italic-accent">Acroyoga</span>.
          </h2>
          <p
            style={{
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-base)",
              color: "var(--ink-700)",
              marginBottom: 16,
            }}
          >
            Un espacio creado para conectar cuerpo, mente y comunidad a través del
            movimiento, la confianza y la expresión consciente. Aquí vivimos el acroyoga
            como una experiencia de transformación, juego y crecimiento personal.
          </p>
          <p
            style={{
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-base)",
              color: "var(--ink-700)",
              marginBottom: 16,
            }}
          >
            Ofrecemos clases, talleres, retiros y encuentros diseñados para todos los
            niveles, desde quienes dan sus primeros vuelos hasta practicantes avanzados
            que buscan profundizar su práctica en un entorno seguro, humano e inspirador.
          </p>
          <p
            style={{
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-base)",
              color: "var(--ink-700)",
              marginBottom: 16,
            }}
          >
            Más que una escuela, somos una comunidad donde el equilibrio se construye{" "}
            <span className="font-italic-accent">juntos</span>.
          </p>
          <p
            style={{
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-base)",
              color: "var(--ink-700)",
            }}
          >
            Descubre una nueva forma de moverte, conectar y elevarte.
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
                src="/images/illustration-community.png"
                alt="Ilustración de cinco figuras en formación circular de acroyoga"
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

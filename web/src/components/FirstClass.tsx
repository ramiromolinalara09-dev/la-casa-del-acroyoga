import Image from "next/image";
import { Reveal } from "./Reveal";

export function FirstClass() {
  return (
    <section
      id="primera"
      style={{
        paddingBlock: "var(--section)",
        background: "var(--cream-50)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="shell">
        <div
          className="primera-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "clamp(32px, 5vw, 96px)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>
              TU PRIMERA CLASE
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
              ¿Cómo es tu primera clase de{" "}
              <span className="font-italic-accent">Acroyoga</span>?
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                color: "var(--ink-700)",
                fontSize: "var(--fs-body-lg)",
                lineHeight: "var(--lh-base)",
              }}
            >
              <p>
                Tu primera clase está diseñada para que te sientas{" "}
                <span className="font-italic-accent" style={{ color: "var(--cobalt-700)" }}>
                  cómodo, seguro y acompañado
                </span>{" "}
                desde el inicio. No necesitas experiencia previa ni venir en pareja.
              </p>
              <p>
                Comenzamos con movilidad, respiración y ejercicios básicos de yoga
                para preparar el cuerpo. Después aprenderás fundamentos simples de
                equilibrio, trabajo en equipo y técnicas de seguridad antes de
                probar tus primeras posturas y vuelos.
              </p>
              <p>
                Todo se enseña paso a paso, en un ambiente divertido, relajado y
                con apoyo constante. Solo necesitas ropa cómoda y ganas de vivir
                algo nuevo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              aria-hidden
              className="primera-illustration"
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                maxWidth: 460,
                marginInline: "auto",
              }}
            >
              <Image
                src="/images/illustration-single-flyer.png"
                alt=""
                width={600}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Llegada",
    body: "Te recibimos, presentaciones rápidas, te pedimos quitarte zapatos y joyas.",
  },
  {
    n: "02",
    title: "Calentamiento",
    body: "20 minutos de movilidad articular y activación. Risas garantizadas.",
  },
  {
    n: "03",
    title: "Pareo",
    body: "Te emparejamos con alguien de peso/altura compatible. Empiezas como flyer y como base.",
  },
  {
    n: "04",
    title: "Posturas",
    body: "Construimos 3-5 posturas paso a paso. Siempre hay un spotter listo.",
  },
  {
    n: "05",
    title: "Relajación",
    body: "Cerramos con masaje terapéutico (te lo dan, lo das). 10 minutos de silencio.",
  },
];

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
            gridTemplateColumns: "1fr 1.2fr",
            gap: "var(--space-9)",
            alignItems: "start",
          }}
        >
          <Reveal>
            <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>
              04 · TU PRIMERA CLASE
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
              ¿Cómo se siente
              <span className="font-italic-accent"> entrar </span>
              por primera vez?
            </h2>
            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                lineHeight: "var(--lh-base)",
                color: "var(--ink-700)",
                marginBottom: 32,
              }}
            >
              Dos horas que pasan rápido. Esta es la estructura que seguimos cada
              clase para que llegues sin sorpresas.
            </p>

            <div
              aria-hidden
              className="primera-illustration"
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                maxWidth: 360,
              }}
            >
              <Image
                src="/images/illustration-single-flyer.png"
                alt=""
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 32,
                    paddingBlock: 24,
                    borderBottom:
                      i === steps.length - 1
                        ? "none"
                        : "1px solid var(--hairline)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 800,
                      fontSize: 32,
                      color: "var(--cobalt-700)",
                      lineHeight: 1,
                      letterSpacing: "var(--tracking-tight)",
                    }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 700,
                        fontSize: 20,
                        color: "var(--ink-900)",
                        marginBottom: 6,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--ink-700)" }}>{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

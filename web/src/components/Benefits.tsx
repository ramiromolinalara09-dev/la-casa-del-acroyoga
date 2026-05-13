import { Reveal } from "./Reveal";

const BENEFITS = [
  "Mejora la fuerza y el equilibrio",
  "Aumenta la flexibilidad y movilidad",
  "Fortalece el core y la postura",
  "Desarrolla confianza y comunicación",
  "Reduce el estrés y mejora el ánimo",
  "Conecta contigo y con otras personas",
  "Incrementa la coordinación y conciencia corporal",
  "Combina ejercicio, diversión y comunidad",
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      style={{
        paddingBlock: "var(--section)",
        background: "var(--cream-50)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="shell">
        <Reveal>
          <div style={{ maxWidth: 760, marginBottom: 56 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>
              BENEFICIOS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "var(--fs-h1)",
                lineHeight: "var(--lh-snug)",
                letterSpacing: "var(--tracking-tight)",
                color: "var(--ink-900)",
              }}
            >
              Lo que te llevas de{" "}
              <span className="font-italic-accent">cada práctica</span>.
            </h2>
          </div>
        </Reveal>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px 40px",
          }}
          className="lcda-benefits-list"
        >
          {BENEFITS.map((b, i) => (
            <Reveal key={b} as="li" delay={i * 0.04}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  paddingBlock: 14,
                  borderBottom: "1px solid var(--hairline)",
                }}
              >
                <CheckIcon />
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "clamp(16px, 1.1vw, 18px)",
                    lineHeight: 1.45,
                    color: "var(--ink-900)",
                    fontWeight: 500,
                  }}
                >
                  {b}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.35}>
          <p
            style={{
              marginTop: 48,
              maxWidth: 760,
              fontSize: "clamp(15px, 1.05vw, 17px)",
              lineHeight: 1.65,
              color: "var(--ink-500)",
            }}
          >
            En La Casa del Acroyoga cada práctica es una oportunidad para crecer
            física y emocionalmente mientras{" "}
            <span className="font-italic-accent" style={{ color: "var(--cobalt-700)" }}>
              disfrutas el proceso
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--cobalt-700)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <circle cx="12" cy="12" r="10" fill="var(--cobalt-100)" stroke="var(--cobalt-300)" strokeWidth="1.5" />
      <polyline points="8 12 11 15 16 9" />
    </svg>
  );
}

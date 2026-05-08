import { Reveal } from "./Reveal";

const benefits = [
  {
    n: "01",
    title: "Sin experiencia previa",
    body: "Si nunca te has subido a alguien (o si tienes miedo de que se te suban), empezamos desde cero. Las clases tienen progresión clara y los profes te acompañan postura por postura.",
    italic: "desde cero",
  },
  {
    n: "02",
    title: "Sin venir en pareja",
    body: "Vienes solo o sola y te emparejamos en clase. Es una de las mejores formas de conocer a la comunidad de Mérida — el acroyoga obliga a hablarse, mirarse y sostenerse.",
    italic: "solo o sola",
  },
  {
    n: "03",
    title: "Diversión primero",
    body: "No es un workout militar ni una clase de yoga silenciosa. Te vas a reír. Te vas a caer (sobre colchonetas). Te vas a sorprender de lo que tu cuerpo puede hacer cuando confía en otro.",
    italic: "Te vas a reír",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      style={{
        paddingBlock: "var(--section)",
        background: "var(--cream-100)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="shell">
        <Reveal className="benefits-head" >
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>
              02 · BENEFICIOS
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
              Tres cosas que oímos
              <span className="font-italic-accent"> siempre</span> en la
              primera clase.
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map((b, i) => (
            <Reveal key={b.n} delay={i * 0.12}>
              <article
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--radius-lg)",
                  padding: 40,
                  height: "100%",
                  transition: "all var(--dur-base) var(--ease-out)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
                className="benefit-card"
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "var(--tracking-eyebrow)",
                    color: "var(--cobalt-700)",
                  }}
                >
                  {b.n}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "var(--fs-h3)",
                    fontWeight: 700,
                    lineHeight: "var(--lh-snug)",
                    color: "var(--ink-900)",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ color: "var(--ink-700)", lineHeight: "var(--lh-base)" }}>
                  {b.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

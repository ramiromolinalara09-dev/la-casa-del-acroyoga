import { Reveal } from "./Reveal";

const faqs = [
  {
    n: "01",
    title: "¿Tienes miedo de intentarlo?",
    body: "Es completamente normal sentir nervios al comenzar algo nuevo. En La Casa del Acroyoga aprendemos paso a paso, con acompañamiento, cuidado y mucha confianza. Todas las clases se realizan de forma segura, con profes y cuidadores que te apoyan en todo momento. No se trata de hacerlo perfecto, sino de disfrutar el proceso, conectar contigo y descubrir de lo que eres capaz.",
  },
  {
    n: "02",
    title: "¿Necesito venir con pareja?",
    body: "No, trabajamos en comunidad y durante las clases todos tienen la oportunidad de practicar y conectar con personas diferentes en un ambiente respetuoso, seguro y divertido.",
  },
  {
    n: "03",
    title: "Diversión primero",
    body: "No es un workout militar ni una clase de yoga silenciosa. Te vas a divertir. Te vas a sorprender de lo que tu cuerpo puede hacer cuando confías en ti y en el otro.",
  },
];

export function FAQ() {
  return (
    <section
      id="preguntas"
      style={{
        paddingBlock: "var(--section)",
        background: "var(--cream-100)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="shell">
        <Reveal className="benefits-head">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>
              PREGUNTAS FRECUENTES
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
          {faqs.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.12}>
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
                  {f.n}
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
                  {f.title}
                </h3>
                <p style={{ color: "var(--ink-700)", lineHeight: "var(--lh-base)" }}>
                  {f.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    body: "Movilidad articular y activación. Risas garantizadas.",
  },
  {
    n: "03",
    title: "Yoga",
    body: "Estiramientos, respiración y ejercicios de conexión corporal que te ayudan a mejorar tu movilidad y disfrutar mejor la parte acrobática de la clase.",
  },
  {
    n: "04",
    title: "Core",
    body: "Fortalecimiento del centro del cuerpo. Mejora la estabilidad y aumenta la seguridad en la práctica.",
  },
  {
    n: "05",
    title: "Inversiones en la práctica",
    body: "Las inversiones son una parte fundamental del acroyoga. Consisten en posturas donde el cuerpo se coloca de forma invertida, siempre de manera progresiva y segura.",
  },
  {
    n: "06",
    title: "Calibraciones en pareja",
    body: "Aprendemos cambios y traslados de peso, a trabajar con el otro como un mismo sistema.",
  },
  {
    n: "07",
    title: "Flow",
    body: "Secuencia de movimientos conectados de forma fluida. Contamos con variaciones para cada nivel.",
  },
  {
    n: "08",
    title: "Cool down",
    body: "Estiramientos en grupo para cerrar.",
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
              <Reveal key={step.n} delay={i * 0.05}>
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

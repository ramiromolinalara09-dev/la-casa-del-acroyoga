import { Reveal } from "./Reveal";

const PILLARS = [
  { label: "Clases", Icon: ClasesIcon },
  { label: "Talleres", Icon: TalleresIcon },
  { label: "Retiros", Icon: RetirosIcon },
  { label: "Encuentros", Icon: EncuentrosIcon },
];

export function Offerings() {
  return (
    <section
      style={{
        background: "var(--cream-100)",
        paddingBlock: "clamp(48px, 6vw, 80px)",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BrandGradientDef />

      <div className="shell" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <Reveal as="span" className="eyebrow" delay={0}>
          <span style={{ display: "inline-block", marginBottom: 12 }}>
            LO QUE OFRECEMOS
          </span>
        </Reveal>

        <Reveal as="h2" delay={0.05}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3vw, 44px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
              maxWidth: 760,
              margin: "0 auto 40px",
            }}
          >
            Distintos formatos,{" "}
            <span className="font-italic-accent" style={{ color: "var(--cobalt-700)" }}>
              una misma práctica
            </span>
            .
          </span>
        </Reveal>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto 32px",
            maxWidth: 980,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "clamp(20px, 3vw, 40px)",
          }}
        >
          {PILLARS.map((p, i) => (
            <Reveal key={p.label} as="li" delay={0.1 + i * 0.06}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                <p.Icon />
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 1.5vw, 22px)",
                    color: "var(--cobalt-900)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" delay={0.35}>
          <span
            style={{
              display: "block",
              maxWidth: 760,
              margin: "0 auto",
              color: "var(--ink-500)",
              fontSize: "clamp(15px, 1.05vw, 17px)",
              lineHeight: 1.6,
            }}
          >
            Diseñados para todos los niveles, desde quienes dan sus primeros vuelos
            hasta practicantes avanzados que buscan profundizar su práctica en un
            entorno seguro, humano e inspirador.
          </span>
        </Reveal>
      </div>
    </section>
  );
}

const ICON_SIZE = 56;
const STROKE = "var(--cobalt-700)";
const SW = 2;

function BrandGradientDef() {
  return null;
}

// Clases: figura sentada en loto sobre mat (sesión de práctica)
function ClasesIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 64 64" aria-hidden style={{ display: "block" }}>
      <g fill="none" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
        <circle cx="32" cy="14" r="5" />
        <path d="M14 46 L32 22 L50 46" />
        <path d="M14 46 L50 46" />
        <line x1="4" y1="54" x2="60" y2="54" strokeWidth={SW + 0.5} />
      </g>
    </svg>
  );
}

// Talleres: libro abierto (aprendizaje / contenido didáctico)
function TalleresIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 64 64" aria-hidden style={{ display: "block" }}>
      <g fill="none" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
        <path d="M8 16 C16 14 24 16 32 20 C40 16 48 14 56 16 L56 50 C48 48 40 50 32 54 C24 50 16 48 8 50 Z" />
        <line x1="32" y1="20" x2="32" y2="54" />
        <line x1="14" y1="26" x2="26" y2="25" />
        <line x1="14" y1="34" x2="26" y2="33" />
        <line x1="38" y1="25" x2="50" y2="26" />
        <line x1="38" y1="33" x2="50" y2="34" />
      </g>
    </svg>
  );
}

// Retiros: montañas + sol (escape / inmersión en naturaleza)
function RetirosIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 64 64" aria-hidden style={{ display: "block" }}>
      <g fill="none" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
        <circle cx="44" cy="20" r="7" />
        <path d="M4 50 L18 28 L28 40 L36 30 L46 44 L60 50 Z" />
        <line x1="4" y1="55" x2="60" y2="55" strokeWidth={SW - 0.3} />
      </g>
    </svg>
  );
}

// Encuentros: tres figuras conectadas (comunidad reunida)
function EncuentrosIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 64 64" aria-hidden style={{ display: "block" }}>
      <g fill="none" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
        <circle cx="32" cy="14" r="5" />
        <path d="M22 30 C22 24 26 20 32 20 C38 20 42 24 42 30" />
        <circle cx="14" cy="38" r="5" />
        <path d="M4 54 C4 48 8 44 14 44 C20 44 24 48 24 54" />
        <circle cx="50" cy="38" r="5" />
        <path d="M40 54 C40 48 44 44 50 44 C56 44 60 48 60 54" />
      </g>
    </svg>
  );
}

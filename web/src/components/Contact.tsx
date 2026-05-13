import { Reveal } from "./Reveal";
import { buildWhatsappUrl } from "@/lib/links";
import { WhatsAppIcon } from "./icons";

const MAPS_LINK = "https://maps.app.goo.gl/HyirQMdH4hCQWVJb6";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=21.0097473,-89.6206213&hl=es&z=16&output=embed";

const HOURS = [
  { dia: "Lunes",     hora: "8:00 a 9:30 PM" },
  { dia: "Martes",    hora: "Cerrado" },
  { dia: "Miércoles", hora: "8:00 a 9:30 PM" },
  { dia: "Jueves",    hora: "Cerrado" },
  { dia: "Viernes",   hora: "Cerrado" },
  { dia: "Sábado",    hora: "10:00 AM a 12:00 PM" },
  { dia: "Domingo",   hora: "Cerrado" },
];

export function Contact() {
  return (
    <section
      id="contacto"
      style={{
        paddingBlock: "var(--section)",
        background: "var(--cream-50)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="shell">
        <div
          className="lcda-contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "start",
          }}
        >
          <Reveal className="lcda-contact-info">
            <span
              className="eyebrow"
              style={{ marginBottom: 16, display: "inline-block" }}
            >
              CONTACTO
            </span>
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "var(--fs-h1)",
                lineHeight: "var(--lh-snug)",
                letterSpacing: "var(--tracking-tight)",
                color: "var(--ink-900)",
                marginBottom: 40,
              }}
            >
              Te{" "}
              <span className="font-italic-accent" style={{ color: "var(--cobalt-700)" }}>
                esperamos
              </span>
              .
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 44,
                color: "var(--ink-700)",
              }}
            >
              <InfoRow label="Dirección">
                Calle 9, Fraccionamiento del Norte
                <br />
                Mérida, Yucatán 97120
              </InfoRow>

              <InfoRow label="WhatsApp / Teléfono">
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--cobalt-700)",
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <WhatsAppIcon size={16} />
                  +52 999 990 9291
                </a>
              </InfoRow>

              <InfoRow label="Horario de atención">
                <div
                  className="lcda-contact-hours"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    columnGap: 32,
                    rowGap: 10,
                    fontSize: "clamp(15px, 1.05vw, 17px)",
                  }}
                >
                  {HOURS.map((h) => (
                    <div key={h.dia} style={{ display: "contents" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-outfit)",
                          fontWeight: 500,
                          color: "var(--ink-900)",
                        }}
                      >
                        {h.dia}
                      </span>
                      <span
                        style={{
                          color: h.hora === "Cerrado" ? "var(--ink-500)" : "var(--ink-700)",
                          fontStyle: h.hora === "Cerrado" ? "italic" : "normal",
                        }}
                      >
                        {h.hora}
                      </span>
                    </div>
                  ))}
                </div>
              </InfoRow>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="lcda-contact-map"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--hairline)",
                background: "var(--cobalt-100)",
              }}
            >
              <iframe
                src={MAPS_EMBED}
                title="Ubicación de La Casa del Acroyoga en Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: 14,
                fontSize: 13,
                color: "var(--cobalt-700)",
                fontWeight: 500,
              }}
            >
              Abrir en Google Maps →
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .lcda-contact-grid {
            grid-template-columns: 1fr !important;
          }
          .lcda-contact-map {
            aspect-ratio: 4 / 3 !important;
          }
          .lcda-contact-info {
            text-align: center;
          }
          .lcda-contact-hours {
            display: inline-grid !important;
            grid-template-columns: auto auto !important;
            column-gap: 24px !important;
            text-align: left;
            margin-inline: auto;
          }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase",
          color: "var(--cobalt-700)",
          marginBottom: 14,
        }}
      >
        {label}
      </p>
      <div style={{ fontSize: "clamp(16px, 1.15vw, 19px)", lineHeight: 1.65 }}>
        {children}
      </div>
    </div>
  );
}

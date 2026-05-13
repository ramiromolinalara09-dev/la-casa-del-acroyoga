import Image from "next/image";
import { Reveal } from "./Reveal";
import { buildWhatsappUrl } from "@/lib/links";

const schedule = [
  { dia: "Lunes",     hora: "8:00 a 9:30 PM",    cupo: 15 },
  { dia: "Miércoles", hora: "8:00 a 9:30 PM",    cupo: 15 },
  { dia: "Sábado",    hora: "10:00 AM a 12:00 PM", cupo: 8  },
];

const buildWa = (dia: string, hora: string) =>
  buildWhatsappUrl(`Hola, quiero reservar la clase del ${dia} ${hora}.`);

export function Schedule() {
  return (
    <section
      id="horarios"
      style={{
        paddingBlock: "var(--section)",
        background: "var(--cobalt-900)",
        color: "var(--cream-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-8%",
          bottom: "-12%",
          width: 460,
          height: 460,
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/illustration-washing-machine.png"
          alt=""
          width={460}
          height={460}
          style={{
            width: "100%",
            height: "auto",
            filter: "brightness(0) invert(1)",
            opacity: 0.6,
          }}
        />
      </div>

      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <span
            className="eyebrow"
            style={{
              color: "var(--cobalt-300)",
              marginBottom: 16,
              display: "inline-block",
            }}
          >
            HORARIOS
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "var(--fs-h1)",
              lineHeight: "var(--lh-snug)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--cream-50)",
              marginBottom: 64,
              maxWidth: 720,
            }}
          >
            Tres oportunidades a la semana,
            <span style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, color: "var(--cobalt-300)" }}>
              {" "}reservas con un click.
            </span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gap: 1,
            background: "rgba(155, 182, 226, 0.18)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            maxWidth: 880,
          }}
        >
          {schedule.map((row, i) => (
            <Reveal key={row.dia} delay={i * 0.08}>
              <div
                className="schedule-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.2fr 1fr auto",
                  alignItems: "center",
                  background: "var(--cobalt-800)",
                  padding: "24px 32px",
                  gap: 16,
                  transition: "background var(--dur-base) var(--ease-out)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 600,
                    fontSize: "var(--fs-h3)",
                    color: "var(--cream-50)",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {row.dia}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 17,
                    color: "var(--cobalt-300)",
                  }}
                >
                  {row.hora}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "var(--cobalt-300)",
                  }}
                >
                  Cupo limitado a {row.cupo} personas
                </span>
                <a
                  href={buildWa(row.dia, row.hora)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{
                    padding: "10px 18px",
                    fontSize: 13,
                    background: "var(--cream-50)",
                    color: "var(--cobalt-900)",
                    justifySelf: "end",
                  }}
                >
                  Reservar
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p
            style={{
              marginTop: 40,
              fontSize: 15,
              color: "var(--cobalt-300)",
              maxWidth: 560,
            }}
          >
            Si vienes por primera vez, llega 10 minutos antes. Trae ropa cómoda
            que no se trepe (leggings o shorts ajustados funcionan mejor que
            sueltos).
          </p>
        </Reveal>
      </div>
    </section>
  );
}

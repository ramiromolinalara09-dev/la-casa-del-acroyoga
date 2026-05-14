import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { buildWhatsappUrl } from "@/lib/links";

export const metadata: Metadata = {
  title: "Aviso de privacidad · La Casa del Acroyoga",
  description:
    "Aviso de privacidad de La Casa del Acroyoga conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  robots: { index: true, follow: true },
};

const LAST_UPDATE = "13 de mayo de 2026";

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: "clamp(108px, 9vw, 132px)",
          paddingBottom: "clamp(56px, 7vw, 96px)",
          background: "var(--cream-50)",
          minHeight: "100dvh",
        }}
      >
        <div className="shell" style={{ maxWidth: 760 }}>
          <span
            className="eyebrow"
            style={{ marginBottom: 16, display: "inline-block" }}
          >
            DOCUMENTO LEGAL
          </span>

          <h1
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
              marginBottom: 16,
            }}
          >
            Aviso de{" "}
            <span className="font-italic-accent" style={{ color: "var(--cobalt-700)" }}>
              privacidad
            </span>
            .
          </h1>

          <p
            style={{
              fontSize: 13,
              color: "var(--ink-500)",
              marginBottom: 48,
              fontFamily: "var(--font-outfit)",
            }}
          >
            Última actualización: {LAST_UPDATE}
          </p>

          <Article>
            <p>
              <strong>La Casa del Acroyoga</strong> (en adelante, “La Casa” o
              “nosotros”), con domicilio en Calle 9, Fraccionamiento del Norte,
              Mérida, Yucatán, C.P. 97120, México, es responsable del tratamiento
              y protección de sus datos personales conforme a la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares
              (LFPDPPP), su Reglamento y demás disposiciones aplicables.
            </p>

            <H2>1. Datos personales que recabamos</H2>
            <p>
              Para prestar nuestros servicios podemos recabar los siguientes
              datos personales:
            </p>
            <ul>
              <li>Nombre completo.</li>
              <li>Número telefónico (WhatsApp).</li>
              <li>Correo electrónico, en caso de proporcionarlo.</li>
              <li>
                Información sobre tu condición física relevante para la práctica
                segura del acroyoga, cuando la compartas voluntariamente.
              </li>
              <li>
                Datos de pago únicamente para procesar reservas, los cuales son
                tratados por nuestro proveedor de pagos en línea (Feather.rsvp);
                La Casa no almacena datos de tarjetas.
              </li>
            </ul>
            <p>
              No recabamos datos personales sensibles distintos a los descritos
              arriba.
            </p>

            <H2>2. Finalidades del tratamiento</H2>
            <p>Sus datos personales se utilizarán para las siguientes finalidades primarias:</p>
            <ul>
              <li>Gestionar reservas, asistencias y horarios de clases, talleres y retiros.</li>
              <li>
                Comunicarnos con usted en relación con su práctica, dudas, cambios
                de horario o ajustes operativos.
              </li>
              <li>Procesar pagos y emitir comprobantes.</li>
              <li>Velar por su seguridad durante la práctica.</li>
            </ul>
            <p>De manera adicional, y siempre que usted no se oponga, podríamos utilizarlos para:</p>
            <ul>
              <li>Enviarle información sobre nuevas clases, eventos y talleres.</li>
              <li>Invitarle a encuestas para mejorar nuestros servicios.</li>
            </ul>

            <H2>3. Transferencias de datos</H2>
            <p>
              No transferimos sus datos personales a terceros sin su consentimiento,
              salvo a:
            </p>
            <ul>
              <li>
                Nuestro proveedor de pagos (Feather.rsvp), únicamente cuando usted
                realiza una reserva con pago en línea.
              </li>
              <li>
                Autoridades competentes, cuando exista un mandato legal que así lo
                exija.
              </li>
            </ul>

            <H2>4. Mecanismos para el ejercicio de derechos ARCO</H2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al
              tratamiento de sus datos personales (derechos ARCO), así como a
              revocar su consentimiento en cualquier momento.
            </p>
            <p>
              Para ejercer cualquiera de estos derechos, escríbanos por WhatsApp
              al{" "}
              <a
                href={buildWhatsappUrl("Hola, deseo ejercer mis derechos ARCO sobre mis datos personales.")}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--cobalt-700)", fontWeight: 500 }}
              >
                +52 999 990 9291
              </a>{" "}
              indicando su nombre completo, el derecho que desea ejercer y los
              datos sobre los que recae su solicitud. Le responderemos en un plazo
              no mayor a 20 días hábiles.
            </p>

            <H2>5. Uso de cookies y tecnologías similares</H2>
            <p>
              Nuestro sitio web puede utilizar cookies estrictamente necesarias
              para su funcionamiento, así como herramientas analíticas que nos
              permiten conocer de manera agregada cómo se utiliza el sitio. No
              utilizamos cookies para identificarle de forma individual.
            </p>

            <H2>6. Modificaciones al presente aviso</H2>
            <p>
              Cualquier modificación a este aviso de privacidad se publicará en
              esta misma página, indicando la fecha de la última actualización. Le
              sugerimos revisarla periódicamente.
            </p>

            <p style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 32 }}>
              Si tiene alguna duda sobre este aviso o el tratamiento de sus datos,
              contáctenos por WhatsApp al{" "}
              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--cobalt-700)" }}
              >
                +52 999 990 9291
              </a>
              .
            </p>
          </Article>

          <div style={{ marginTop: 56 }}>
            <Link
              href="/"
              style={{
                color: "var(--cobalt-700)",
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Article({ children }: { children: React.ReactNode }) {
  return (
    <article
      style={{
        color: "var(--ink-700)",
        fontSize: "clamp(15px, 1.05vw, 17px)",
        lineHeight: 1.7,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {children}
    </article>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-outfit)",
        fontWeight: 700,
        fontSize: "clamp(20px, 1.6vw, 26px)",
        lineHeight: 1.3,
        color: "var(--ink-900)",
        marginTop: 32,
        marginBottom: 4,
      }}
    >
      {children}
    </h2>
  );
}

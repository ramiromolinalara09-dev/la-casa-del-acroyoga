import Image from "next/image";
import Link from "next/link";
import { buildWhatsappUrl } from "@/lib/links";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--cream-100)",
        paddingBlock: 28,
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div
        className="shell"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 24,
          alignItems: "center",
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center" }} aria-label="La Casa del Acroyoga">
          <Image
            src="/logos/lcda-logo-diamond.svg"
            alt="La Casa del Acroyoga"
            width={960}
            height={958}
            unoptimized
            style={{ height: 44, width: "auto", display: "block" }}
          />
        </a>

        <p
          style={{
            fontSize: 12,
            color: "var(--ink-500)",
            textAlign: "center",
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            alignItems: "center",
          }}
        >
          <span>
            Mérida, Yucatán · WhatsApp{" "}
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--ink-700)", whiteSpace: "nowrap" }}
            >
              999 990 9291
            </a>
          </span>
          <span style={{ color: "var(--hairline-strong)" }}>·</span>
          <Link
            href="/aviso-de-privacidad"
            style={{ color: "var(--ink-500)", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            Aviso de privacidad
          </Link>
        </p>

        <p
          style={{
            fontSize: 11,
            color: "var(--ink-500)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            fontFamily: "var(--font-outfit)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

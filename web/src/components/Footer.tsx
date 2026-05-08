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
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "grid", placeItems: "center", width: 28, height: 28 }}>
            <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="var(--cobalt-700)" strokeWidth="1.6">
              <path d="M16 2 L30 16 L16 30 L2 16 Z" />
              <path d="M16 8 L24 16 L16 24 L8 16 Z" opacity="0.55" />
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 500,
                fontSize: 9,
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--cobalt-700)",
                marginBottom: 2,
              }}
            >
              La Casa del
            </span>
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--cobalt-700)",
                lineHeight: 0.95,
              }}
            >
              Acroyoga
            </span>
          </span>
        </a>

        <p
          style={{
            fontSize: 12,
            color: "var(--ink-500)",
            textAlign: "center",
            margin: 0,
          }}
        >
          Mérida, Yucatán · WhatsApp{" "}
          <a href="https://wa.me/529999909291" style={{ color: "var(--ink-700)" }}>
            999 990 9291
          </a>
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

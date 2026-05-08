"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#acroyoga", label: "¿Qué es?" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#horarios", label: "Horarios" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background,border-color] duration-500"
      style={{
        background: scrolled
          ? "rgba(250, 244, 235, 0.92)"
          : "rgba(250, 244, 235, 0.78)",
        backdropFilter: "saturate(160%) blur(14px)",
        WebkitBackdropFilter: "saturate(160%) blur(14px)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="shell flex items-center gap-8 py-5">
        <a href="#top" className="flex items-center gap-3 group" aria-label="La Casa del Acroyoga">
          <span
            className="grid place-items-center shrink-0"
            style={{ width: 32, height: 32 }}
          >
            <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="var(--cobalt-700)" strokeWidth="1.6">
              <path d="M16 2 L30 16 L16 30 L2 16 Z" />
              <path d="M16 8 L24 16 L16 24 L8 16 Z" opacity="0.55" />
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              className="font-display"
              style={{
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--cobalt-700)",
                marginBottom: 2,
              }}
            >
              La Casa del
            </span>
            <span
              className="font-display"
              style={{
                fontWeight: 800,
                fontSize: 20,
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

        <nav className="ml-auto hidden md:flex gap-7" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors"
              style={{
                color: "var(--ink-700)",
                fontWeight: 500,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://feather.rsvp/o/lacasadelacroyoga"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{ padding: "10px 18px", fontSize: 13 }}
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

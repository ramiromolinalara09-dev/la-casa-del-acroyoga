"use client";

import Image from "next/image";
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
          ? "rgba(251, 245, 233, 0.92)"
          : "rgba(251, 245, 233, 0.78)",
        backdropFilter: "saturate(160%) blur(14px)",
        WebkitBackdropFilter: "saturate(160%) blur(14px)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div
        className="shell items-center flex justify-between md:grid py-3 md:py-5"
        style={{ gridTemplateColumns: "1fr auto 1fr", columnGap: 24 }}
      >
        <a
          href="#top"
          className="flex items-center group"
          aria-label="La Casa del Acroyoga"
          style={{ justifySelf: "start" }}
        >
          <Image
            src="/logos/lcda-logo-diamond.svg"
            alt="La Casa del Acroyoga"
            width={960}
            height={958}
            unoptimized
            priority
            className="block w-auto h-14 md:h-[68px]"
          />
        </a>

        <nav
          className="hidden md:flex"
          aria-label="Principal"
          style={{ gap: "clamp(40px, 5vw, 72px)", justifySelf: "center" }}
        >
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
          href="https://wa.me/529999909291?text=Hola%2C%20quiero%20reservar%20mi%20primera%20clase%20de%20acroyoga."
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{ padding: "10px 18px", fontSize: 13, justifySelf: "end" }}
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

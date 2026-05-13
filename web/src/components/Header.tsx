"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FEATHER_URL, buildWhatsappUrl } from "@/lib/links";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "./icons";

const navItems = [
  { href: "#acroyoga", label: "¿Qué es?" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#galeria", label: "Galería" },
  { href: "#horarios", label: "Horarios" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

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
        style={{ gridTemplateColumns: "auto 1fr auto", columnGap: 24 }}
      >
        <a
          href="#top"
          className="flex items-center group"
          aria-label="La Casa del Acroyoga"
          style={{ justifySelf: "start" }}
          onClick={() => setMenuOpen(false)}
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
          style={{
            gap: "clamp(14px, 2vw, 32px)",
            justifySelf: "center",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: "var(--ink-700)",
                fontWeight: 500,
                fontSize: 13,
                whiteSpace: "nowrap",
                transition: "color var(--dur-base) var(--ease-out)",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={FEATHER_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary hidden md:inline-flex"
          style={{ padding: "10px 18px", fontSize: 13, justifySelf: "end" }}
        >
          Reservar
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="lcda-mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center"
          style={{
            background: "transparent",
            border: "1px solid var(--hairline-strong)",
            borderRadius: 999,
            width: 40,
            height: 40,
            color: "var(--ink-900)",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="lcda-mobile-nav"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:hidden"
            style={{
              borderTop: "1px solid var(--hairline)",
              background: "rgba(251, 245, 233, 0.98)",
              backdropFilter: "saturate(160%) blur(14px)",
              WebkitBackdropFilter: "saturate(160%) blur(14px)",
            }}
          >
            <div
              className="shell"
              style={{
                paddingBlock: 20,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "var(--ink-900)",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 500,
                    fontSize: 17,
                    paddingBlock: 12,
                    borderBottom: "1px solid var(--hairline)",
                  }}
                >
                  {item.label}
                </a>
              ))}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginTop: 16,
                }}
              >
                <a
                  href={FEATHER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  onClick={() => setMenuOpen(false)}
                  style={{ justifyContent: "center" }}
                >
                  Reservar mi primera clase
                </a>
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    justifyContent: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <WhatsAppIcon size={16} />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

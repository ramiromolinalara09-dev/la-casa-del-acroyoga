# Yogamaya (Inspiration Reference) · Design System

Referencia visual y técnica para producir cualquier artefacto de marca Yogamaya (Inspiration Reference) (decks, PDFs, ads, emails, landings adicionales) sin tener que volver a la live ni reverse-engineering del repo.

**Versión:** 1.0.0  ·  **Capturado:** 2026-05-07
**Live:** https://yogamaya.com

---

## Estructura

```
design-system/
├── README.md              ← estás aquí
├── design-system.md       ← documento principal navegable (8 secciones)
├── voice-and-tone.md      ← reglas de copy
├── tokens.json            ← machine-readable (Style Dictionary-compatible)
├── tokens.css             ← CSS variables drop-in para nuevos proyectos
├── screenshots/
│   ├── home-en-desktop.png
│   ├── home-en-mobile.png
└── assets/
    ├── logos/             ← isologo y variantes
    ├── icons/             ← favicon y otros íconos clave
    ├── images/            ← fotos clave (founders, hero, etc.)
    └── fonts/             ← Dahlia-med + Montserrat woff2 (autocontenido)
```

---

## Cómo usar este sistema

### Para producir documentos / decks / PDFs

1. Abrir [`design-system.md`](design-system.md) — es la referencia humana.
2. Copiar paleta hex de §2.2 y la escala tipográfica de §2.3.
3. Para logos: usar SVGs de [`assets/logos/`](assets/logos/) según el fondo.
4. Para imágenes clave: ver [`assets/images/`](assets/images/).
5. Para copy: leer [`voice-and-tone.md`](voice-and-tone.md) antes de escribir.

### Para producir landings, apps web nuevas

1. Importar [`tokens.css`](tokens.css) al global stylesheet (drop-in, sin transformación).
2. Cargar fonts desde [`assets/fonts/`](assets/fonts/) o Google Fonts (Dahlia-med + Montserrat).
3. Para componentes: ver §4 de [`design-system.md`](design-system.md) con specs visuales.

### Para Figma / herramientas de diseño

1. Importar [`tokens.json`](tokens.json) (compatible con Style Dictionary, Tokens Studio for Figma).
2. Logos vectoriales en [`assets/logos/*.svg`](assets/logos/) — drag-and-drop directo.

---

## Quick reference

**Paleta dominante:** forest-900 `#0B2A2B` + cream-50 `#EBDBC2` + cream-100 `#F1E6D5` + ink-900 `#0B2A2B`.

**Fonts:** Dahlia-med (display) + Montserrat (body).

**Promise pillars (no negociables en copy):**

1. Calma editorial
2. Casa-santuario
3. Comunidad calida

**Prohibidos absolutos:** em-dashes, "expert/experts", emojis en copy de cliente.

---

## Cambios y mantenimiento

Este design system se generó con [`.claude/workflows/shared/design-system-extraction.md`](../../.claude/workflows/shared/design-system-extraction.md) + [`.claude/tools/design-system-extract/`](../../.claude/tools/design-system-extract/).

Para refrescarlo (live cambió, rebrand, drift detectado):

```
"Refresca el design system de yogamaya"
```

Cosmo lo enrouta al workflow, ejecuta la captura nueva, bumpea `$meta.version` (ahora 1.0.0 → próxima minor) y sobrescribe los archivos. Git guarda el histórico.

Si hay drift live↔repo: queda documentado en §7 de [`design-system.md`](design-system.md).
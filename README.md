# La Casa del Acroyoga · Design System

Estudio de acroyoga en Mérida, Yucatán, MX. Este repositorio contiene el **design system completo** del cliente más los **assets de marca** y la **inspiración** que dio origen a las decisiones tipográficas y cromáticas.

## Estructura

```
.
├── design-system/         ← entrega principal (tokens, assets, docs, preview)
├── brand/
│   ├── raw/               ← 3 JPGs originales del cliente (logos + flyer)
│   └── notes.md           ← contexto del cliente, decisiones de conservación
└── inspiration/
    └── yogamaya/          ← bundle completo de yogamaya.com (referencia visual + animaciones)
```

## Cómo usar este repo

### Para diseñar páginas con Claude
Apunta al folder `/design-system`. Lo importante:
- `design-system/tokens.css` — variables CSS listas para importar.
- `design-system/tokens.json` — fuente de verdad (Style Dictionary–compatible).
- `design-system/design-system.md` — documentación completa (8 secciones).
- `design-system/voice-and-tone.md` — guía de copy en español (7 secciones).
- `design-system/preview.html` — preview navegable de todo el sistema.
- `design-system/assets/` — logos, fonts, iconos, ilustraciones.

### Para implementar la landing
1. Copia `design-system/tokens.css` al proyecto Next.js.
2. Carga `Outfit` y `Cormorant` (italic) vía `next/font/google`.
3. El isologo (`design-system/assets/logos/lcda-isologo-pose.svg`) funciona como H1 hero — admite animación de draw-on con `stroke-dasharray`.
4. Usa las 3 ilustraciones (`group-jam`, `single-flyer`, `washing-machine`) como decorativos editoriales sobre cream.

## Marca

- **Logo primario**: line-art pose (Logo A).
- **Variante**: diamond + wordmark (Logo B) — solo si el cliente lo pide.
- **Color load-bearing**: cobalto `#2861B8`.
- **Surface primario**: cream `#FAF6EC`.
- **Tipografía**: Outfit (display + body) + Cormorant italic (acentos editoriales en cobalto).

## Contexto del cliente

- **Identidad**: La Casa del Acroyoga, Mérida, Yucatán.
- **Schedule**: lunes/miércoles 8–10pm, sábados 10am–12pm.
- **WhatsApp**: 9999909291.
- **RSVP**: feather.rsvp/o/lacasadelacroyoga.
- **Propuesta de valor**: "Diversión y seguridad garantizadas. No hace falta experiencia previa o venir en pareja."

## Versión

Design system v1.0.0 · 2026-05-07.

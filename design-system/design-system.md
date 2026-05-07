# La Casa del Acroyoga · Design System

**Versión:** 1.0.0  ·  **Capturado:** 2026-05-07
**Cliente:** La Casa del Acroyoga (Mérida, Yucatán, MX)
**Idioma del sistema:** español (es)
**Inspiración:** [yogamaya.com](../inspiration/yogamaya/) (bundle completo en `inspiration/yogamaya/`)
**Fuentes brand:** 3 JPGs originales del cliente en `../brand/raw/` ([logo-a-pose.jpg](../brand/raw/logo-a-pose.jpg), [logo-b-diamond.jpg](../brand/raw/logo-b-diamond.jpg), [flyer-clase.jpg](../brand/raw/flyer-clase.jpg)).

Este documento es la referencia visual y técnica de la marca. Cualquier producción futura — la landing en Next.js, decks de venta, PDFs, ads, emails, flyers nuevos — se construye con los tokens, componentes y patrones de aquí.

---

## 1. Overview

### Identidad

La Casa del Acroyoga es una casa de práctica de acroyoga en Mérida, Yucatán. La marca proyecta **calma editorial, casa-santuario, comunidad cálida**, con una vibración propia: la de **un almanaque cobalto** — gráfica de una sola tinta cobalto sobre papel cream, ilustración line-art que se traza al cargar, tipografía Italianate que se siente impresa a mano.

La marca evita: estética gym-fitness, agencia-corporate, wellness influencer, "vuela alto / lleva tu práctica al siguiente nivel" cliché. La marca abraza: ritmo lento, restricción cromática, ilustración line-art como sello visual, vocabulario interno (jam, base, flyer) sin sobre-explicar.

### Pillars no negociables (en copy y producción)

1. **Diversión y seguridad** — heredado del flyer del cliente. Las dos cosas van juntas, no una sin la otra.
2. **Casa-comunidad** — el espacio es literalmente una casa, no un studio comercial. La marca refleja eso: cálida, cercana, no aspiracional.
3. **Sin barrera de entrada** — "no necesitas pareja, no necesitas experiencia". La marca nunca excluye, nunca intimida.

### Cómo usar este sistema

- **Para producir documentos / decks / PDFs:** referencia las tablas de tokens de §3 y los logos de [`assets/logos/`](assets/logos/). Stack tipográfico: Cormorant + Outfit (ambos disponibles en Google Fonts y descargados localmente en [`assets/fonts/`](assets/fonts/)).
- **Para producir landings, apps web nuevas:** importa [`tokens.css`](tokens.css) al global stylesheet (drop-in, sin transformación). Cargá fonts desde [`assets/fonts/`](assets/fonts/).
- **Para Figma / herramientas de diseño:** importá [`tokens.json`](tokens.json) (compatible con Style Dictionary, Tokens Studio for Figma).

### Captura del estado

No hay live ni código aún. Bundle creado desde inspiración (yogamaya bundle) + assets del cliente + decisiones validadas con Ramiro (2026-05-07). Sin drift posible al momento de captura. Cuando exista la landing en `clients/la-casa-del-acroyoga/next/`, el sistema se refresca para cruzar live ↔ código.

---

## 2. Brand Foundations

### 2.1 Logos

| Archivo | Uso |
| --- | --- |
| [assets/logos/lcda-isologo-pose.svg](assets/logos/lcda-isologo-pose.svg) | **Logo primario vectorizado** — ilustración line-art de pose acroyoga, vectorizada con vtracer desde el JPG original. 19 paths, fill `#2861B8`, viewBox 1246×1246. Reemplaza la versión PNG raster anterior. |
| [assets/logos/lcda-isologo-pose.png](assets/logos/lcda-isologo-pose.png) | Versión PNG raster — fallback si el SVG no aplica (e.g. email, ciertos exports). |
| [assets/logos/lcda-isologo-pose-inverse.png](assets/logos/lcda-isologo-pose-inverse.png) | Logo primario inverse PNG — recoloreado a cream para fondos cobalto/oscuros. **Para SVG inverse**: aplicar `filter: brightness(0) invert(1)` directo en CSS. |
| [assets/logos/lcda-isologo-pose-source.jpg](assets/logos/lcda-isologo-pose-source.jpg) | JPG original de alta fidelidad — referencia para vectorización futura más precisa o re-render manual en Adobe Illustrator. |
| [assets/logos/lcda-mark-diamond.svg](assets/logos/lcda-mark-diamond.svg) | **Isotipo standalone** — rombo de línea simple en cobalto. Para favicons, badges, watermarks, separadores, elementos decorativos pequeños. |
| [assets/logos/lcda-mark-diamond-triple.svg](assets/logos/lcda-mark-diamond-triple.svg) | Variante isotipo con triple línea concéntrica (interpretación simplificada del Logo B original). Para hero accents y elementos grandes. |
| [assets/logos/lcda-isologo-diamond-source.jpg](assets/logos/lcda-isologo-diamond-source.jpg) | JPG original Logo B — referencia. |

**Construcción del logo primario (Logo A · pose):**
- **Composición**: stacked. "LA CASA DEL" arriba pequeño en sans → ilustración de la pose en medio (silhouette en cobalto) → "ACROYOGA" abajo grande en serif.
- **La ilustración** captura una pose **base + flyer en throne** (variante de "throne pose" del léxico acroyoga): base acostado boca arriba con piernas dobladas, flyer sentado encima con piernas extendidas.
- **Una sola tinta**: cobalto `#2861B8`. Sin gradients, sin sombras.
- **Pendiente**: vectorización profesional del JPG. El PNG actual cumple para web pero para impresión y artwork de alta fidelidad necesita pasarse por Adobe Illustrator (Image Trace) o vectorizer.ai.

**Reglas:**
- No alterar la composición stacked (decisión Ramiro 2026-05-07).
- No alterar la pose base+flyer en throne — es load-bearing de la identidad.
- Tamaño mínimo: ~120px de alto para el logo completo (ilustración + wordmark). Para uso aún más pequeño, usar solo el isotipo diamond.
- No introducir colores adicionales. El logo es monocromo cobalto sobre cream (o cream sobre cobalto).

**Diamond mark (heredado del Logo B):**
- Cuatro lados rectos, ángulos rectos en miter join.
- Versión single-line para favicon, badges, ornamentos.
- Versión triple-line para hero accents (3 rombos concéntricos con opacidad descendente 1.0 / 0.6 / 0.35).

### 2.2 Paleta

Filosofía: **pareja monogámica cobalto + cream**, heredada del approach de yogamaya (forest + cream) pero traducida al brand color del cliente. Sin terciarios saturados. La textura visual viene de la ilustración line-art y la tipografía, no de bloques de color.

#### Brand (cobalto)

| Token | Hex | Uso |
| --- | --- | --- |
| `--cobalt-900` | `#10295F` | Cobalto profundo — backgrounds inversos, hover oscuro |
| `--cobalt-800` | `#1F4790` | Hover de primary |
| `--cobalt-700` | `#2861B8` | **Brand primary — load-bearing**, sampleado del Logo A |
| `--cobalt-500` | `#5B85D1` | Cobalto medio — accent, links visited |
| `--cobalt-300` | `#9BB6E2` | Cobalto claro — diamond outline interior, accent suave |
| `--cobalt-100` | `#DDE6F4` | Cobalto pastel — tinted backgrounds, badges fill |

#### Surface (cream)

| Token | Hex | Uso |
| --- | --- | --- |
| `--cream-50`  | `#FAF6EC` | Page background |
| `--cream-100` | `#F5EFE2` | Section muted, hero soft |
| `--cream-200` | `#EDE3D0` | Bands, dividers |
| `--cream-300` | `#E0D2B8` | Hero subtleties, warmer accent |

#### Ink (texto)

| Token | Hex | Uso |
| --- | --- | --- |
| `--ink-900` | `#0A1628` | Heading text (deep cobalt-ink, **NO black puro**) |
| `--ink-700` | `#2C3E5A` | Body text |
| `--ink-500` | `#6B7E96` | Muted, captions, placeholders |
| `--ink-300` | `#A8B4C7` | Iconos secundarios sobre cream |

#### Hairlines (alpha)

| Token | Valor |
| --- | --- |
| `--hairline`        | `rgba(10, 22, 40, 0.10)` |
| `--hairline-strong` | `rgba(10, 22, 40, 0.18)` |
| `--cobalt-glaze`    | `rgba(40, 97, 184, 0.08)` (cobalto translúcido para highlights) |

#### Status

| Token | Hex | Uso |
| --- | --- | --- |
| `--success` | `#3F7A66` | Confirmaciones (cobalto-verde, no rompe paleta) |
| `--warning` | `#C89B3C` | Avisos |
| `--danger`  | `#B44A3A` | Destructive |

#### Semantic mapping

```
background           → cream-50
foreground           → ink-900
card                 → #FFFFFF
primary              → cobalt-700
primary-foreground   → cream-50
secondary            → cream-100
secondary-foreground → ink-900
muted                → cream-100
muted-foreground     → ink-500
accent               → cobalt-500
accent-foreground    → cream-50
border               → hairline
input                → hairline-strong
ring                 → cobalt-700
```

### 2.3 Tipografía

| Familia | Rol | Pesos cargados | Archivos locales |
| --- | --- | --- | --- |
| **Outfit** | Display + body (single-family) — H1/hero/wordmark con peso 700-800, body con 400-600 | 400, 500, 600, 700, 800 | [outfit-latin-ext.woff2](assets/fonts/outfit-latin-ext.woff2), [outfit-latin.woff2](assets/fonts/outfit-latin.woff2) |
| **Cormorant** | **Italic accent ONLY** — palabras sueltas en cobalto para flair editorial (el "del" del wordmark, una palabra clave en h2, eyebrow especial) | italic 400, 500 | [cormorant-italic-latin-ext.woff2](assets/fonts/cormorant-italic-latin-ext.woff2), [cormorant-italic-latin.woff2](assets/fonts/cormorant-italic-latin.woff2) |

**Por qué Outfit + Cormorant italic accent (no Fraunces, no Inter):**

- **Outfit** es un humanista geométrico de Rodrigo Fuenzalida (Indian Type Foundry). Tiene personalidad sutil, **matchea el wordmark del Logo A** del cliente (sans bold geométrico). Funciona del display más grande al body más pequeño, con la misma elegancia. **No converge con seo4yoga** (Inter) ni con yogamaya (Montserrat).
- **Cormorant** es un serif Italianate (revival de Garamond italiano por Christian Thalmann). Aquí se usa **exclusivamente como italic accent** en cobalto — para una palabra suelta tipo "del", "en comunidad", "casa". Da el flair editorial sin chocar con el sans del display. Reservado para 1-3 palabras seguidas, NUNCA body.

**Stack canónico (CSS):**

```css
--font-display: Outfit, 'Helvetica Neue', Arial, sans-serif;     /* Display, H1-H4, body */
--font-body:    Outfit, 'Helvetica Neue', Arial, sans-serif;     /* Same family */
--font-italic-accent: Cormorant, 'Cormorant Garamond', Georgia, serif; /* SOLO acentos cortos en italic */
```

**Patrón signature de italic accent (HTML + CSS):**

```html
<h1>La Casa <em class="accent-italic">del</em> Acroyoga</h1>
<h2>Volar y basear, <em class="accent-italic">en comunidad.</em></h2>
```

```css
.accent-italic {
  font-family: var(--font-italic-accent);
  font-style: italic;
  font-weight: 400;
  color: var(--cobalt-700);
}
```

**Escala tipográfica (clamp responsivo):**

| Token | Valor | Peso default | Uso |
| --- | --- | --- | --- |
| `--text-display` | `clamp(56px, 8vw, 112px)` | 800 (extrabold) | ACROYOGA wordmark, hero titles |
| `--text-h1`      | `clamp(36px, 4.5vw, 64px)` | 700 (bold) | Page titles |
| `--text-h2`      | `clamp(28px, 3vw, 44px)` | 700 (bold) | Section headers |
| `--text-h3`      | `clamp(22px, 2vw, 32px)` | 600 (semibold) | Subsection / card titles |
| `--text-h4`      | `20px` | 600 (semibold) | Inline emphasis |
| `--text-body-lg` | `18px` | 400 (regular) | Lead paragraphs |
| `--text-body`    | `16px` | 400 (regular) | Body default |
| `--text-small`   | `14px` | 400 (regular) | Footer, fine print |
| `--text-caption` | `13px` | 400 (regular) | Captions |
| `--text-eyebrow` | `12px` | 500 (medium) | Pre-headings (all-caps tracking-wide) |

**Pesos:**
- `--font-regular: 400`
- `--font-medium: 500`
- `--font-semibold: 600`
- `--font-bold: 700` (H1/H2 default)
- `--font-extrabold: 800` (display weight, matchea wordmark)

**Line-heights:**
- `--leading-tight: 1.0` (display)
- `--leading-snug: 1.15` (h1-h3)
- `--leading-base: 1.55` (body)
- `--leading-loose: 1.75` (long-form reading)

**Letter-spacing:**
- `--tracking-tight: -0.02em` (display Cormorant)
- `--tracking-wide: 0.08em` (capitalizadas suaves)
- `--tracking-eyebrow: 0.32em` (eyebrows — heredado del wordmark "LA CASA DEL" stacked)

**Reglas de uso tipográfico:**

- **Outfit** se usa para TODO: display, H1-H4, body, buttons, nav, captions, eyebrows. La hierarchy se logra con weight (800 → 700 → 600 → 500 → 400) y size, no con familia distinta.
- **Cormorant Italic en cobalto** se usa SOLO como acento corto, dentro de un heading o párrafo Outfit:
  - El "del" entre "LA CASA" y "ACROYOGA" en el wordmark
  - Una palabra clave en un h2 ("una *casa* de práctica", "volar y basear, *en comunidad*")
  - Un eyebrow especial editorial
  - **NUNCA** párrafos completos. **NUNCA** más de 3-4 palabras seguidas. **NUNCA** body normal.
- **Eyebrows**: Outfit 500, all-caps, `letter-spacing: 0.32em`, `font-size: 12-14px`. Tipo "PRÓXIMO JAM" / "WORKSHOP" / "MÉRIDA, YUC".

### 2.4 Visuales / ilustraciones

Heredado del approach de yogamaya (que usa 7 figuras decorativas SVG line-art como sello visual), el bundle incluye 3 ilustraciones generadas con `imagen` tool (gpt-image-2 vía kie.ai) en estilo line-art cobalto:

| Archivo | Pose / concepto | Uso recomendado |
| --- | --- | --- |
| [assets/images/illustration-group-jam.png](assets/images/illustration-group-jam.png) | **Group jam** — 3+ figuras conectándose en círculo | Hero, sección "qué es acroyoga", pillar de comunidad |
| [assets/images/illustration-single-flyer.png](assets/images/illustration-single-flyer.png) | **Single flyer** — base sostén + flyer en bird pose | Sección "cómo funciona", feature cards, pose canónica reconocible |
| [assets/images/illustration-washing-machine.png](assets/images/illustration-washing-machine.png) | **Washing machine** — transición rotativa entre base y flyer | Sección de transiciones / movimiento, OG image dinámica |

**Reglas de uso:**
- Sobre fondos cream (default): usar tal cual con bg transparente.
- Sobre fondos cobalto: aplicar CSS `filter: brightness(0) invert(1)` para invertir a cream.
- Tamaño mínimo: 120px de ancho. Tamaño máximo recomendado: 600px (para mantener calidad raster).
- **Pendiente de vectorizar** si se necesitan en SVG (mismo proceso que el logo: vtracer + post-edit).
- Para generar nuevas (otros poses, en el mismo estilo): usar `imagen` tool con prompt que enfatice "single weight stroke 2px in cobalt blue color #2861B8, sketch-like editorial yoga studio aesthetic, no shading, white background".

---

## 3. Tokens completos

### Spacing

| Token | Valor |
| --- | --- |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px |
| `--space-10` | 128px |
| `--space-11` | 192px |

### Radii

| Token | Valor | Uso |
| --- | --- | --- |
| `--radius-none` | 0px | Diamond ornament, dividers — geometría afilada |
| `--radius-sm`   | 4px | Inputs |
| `--radius-md`   | 8px | Buttons, badges suaves |
| `--radius-lg`   | 16px | Cards default |
| `--radius-xl`   | 24px | Hero cards, feature cards |
| `--radius-pill` | 999px | Pills, eyebrows, schedule chips |

### Shadows

| Token | Valor | Uso |
| --- | --- | --- |
| `--shadow-xs` | `0 1px 2px rgba(10, 22, 40, 0.04)` | Subtle |
| `--shadow-sm` | `0 2px 8px rgba(10, 22, 40, 0.06)` | Default card |
| `--shadow-md` | `0 8px 24px rgba(10, 22, 40, 0.08)` | Card hover |
| `--shadow-lg` | `0 24px 60px rgba(10, 22, 40, 0.12)` | Modals, lifted |

**Nota**: las sombras usan `ink-900` (10,22,40) translúcido, no negro puro. Mantiene cohesión cromática con la paleta ink.

### Motion

Heredado de yogamaya (animations.md), adaptado al cliente:

| Token | Valor | Uso |
| --- | --- | --- |
| `--motion-fast`  | 160ms  | Close, dismiss |
| `--motion-base`  | 320ms  | **Hover universal** (heredado del 324ms de yogamaya, redondeado a 320ms) |
| `--motion-slow`  | 480ms  | CTA hover, dropdown open |
| `--motion-page`  | 420ms  | Page transitions (View Transitions API) |
| `--motion-draw`  | 3000ms | **SVG line-art draw-on** para el logo de la pose al cargar |

| Easing | Valor | Uso |
| --- | --- | --- |
| `--ease-out`    | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Default ease — refined, organic |
| `--ease-in-out` | `cubic-bezier(0.7, 0, 0.3, 1)` | Para modales, dropdowns |
| `--ease-linear` | `linear` | SVG dash, marquee |

### Layout

| Token | Valor |
| --- | --- |
| `--container`   | 1200px |
| `--gutter`      | 32px |
| `--section`     | 128px (padding vertical de `.section`) |
| `--section-sm`  | 96px |
| `--section-xs`  | 64px |

### Breakpoints

| Token | Valor |
| --- | --- |
| `--bp-sm`  | 640px |
| `--bp-md`  | 768px |
| `--bp-lg`  | 960px |
| `--bp-xl`  | 1200px |
| `--bp-2xl` | 1440px |

---

## 4. Componentes

### 4.1 Botón primario (CTA)

```css
.btn-primary {
  background: var(--cobalt-700);
  color: var(--cream-50);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  border-radius: var(--radius-md);
  padding: 12px 20px;
  border: 2px solid transparent;
  transition: all var(--motion-slow) var(--ease-out);
}
.btn-primary:hover {
  background: var(--cobalt-800);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}
```

### 4.2 Botón secundario (outline)

```css
.btn-secondary {
  background: transparent;
  color: var(--cobalt-700);
  border: 1.5px solid var(--cobalt-700);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  border-radius: var(--radius-md);
  padding: 11px 19px;
  transition: all var(--motion-base) var(--ease-out);
}
.btn-secondary:hover {
  background: var(--cobalt-100);
}
```

### 4.3 Card

```css
.card {
  background: var(--cream-100);
  border: 1px solid var(--hairline);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all var(--motion-base) var(--ease-out);
}
.card:hover {
  background: #FFFFFF;
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### 4.4 Eyebrow

```css
.eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-eyebrow);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-eyebrow); /* 0.32em */
  color: var(--cobalt-700);
}
```

Ejemplo de uso: "PRÓXIMO JAM", "MÉRIDA, YUC", "WORKSHOP", "DESDE 2024".

### 4.5 Section header (eyebrow + h2 con italic accent)

Patrón signature — heredado del approach editorial:

```html
<header class="section-header">
  <span class="eyebrow">PRÓXIMO JAM</span>
  <h2 class="h2-display">
    Volar y basear, <em>en comunidad</em>.
  </h2>
</header>
```

```css
.h2-display {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 600;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--ink-900);
}
.h2-display em {
  font-style: italic;
  font-weight: 400;
  color: var(--cobalt-700);
}
```

El `<em>` italic en color cobalto es el patrón visual signature — equivalente al "italic accent" de yogamaya (Libre Bodoni italic en sage).

### 4.6 Diamond ornament

Separador visual entre secciones o decoración inline:

```html
<svg class="diamond-ornament" viewBox="0 0 16 16" aria-hidden="true">
  <path d="M8 1 L15 8 L8 15 L1 8 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

Color hereda del contexto (`currentColor`). Usar como separador entre value props (heredado del flyer del cliente).

### 4.7 Schedule chip

Para mostrar horarios de clases:

```css
.schedule-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: var(--cobalt-100);
  color: var(--cobalt-800);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--radius-pill);
  letter-spacing: 0.02em;
}
```

Ejemplo: `LUNES · 8 PM`, `SÁBADO · 10 AM`.

### 4.8 Top nav

```css
.top-nav {
  background: var(--cream-50);
  border-bottom: 1px solid var(--hairline);
  padding: 16px var(--gutter);
}
.top-nav a {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-900);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  transition: color var(--motion-base) var(--ease-out);
}
.top-nav a:hover {
  color: var(--cobalt-700);
}
```

### 4.9 Hero section (typographic landing)

Patrón heredado de yogamaya (typographic hero):

```html
<section class="hero">
  <div class="hero-mark">
    <svg><!-- diamond-triple --></svg>
  </div>
  <h1 class="hero-title">
    <span class="hero-kicker">LA CASA DEL</span>
    <span class="hero-display">ACROYOGA</span>
  </h1>
  <p class="hero-lede">
    Volar y basear en Mérida. Sin pareja, sin pose.
  </p>
  <div class="hero-cta">
    <a class="btn-primary">Reserva tu lugar</a>
    <a class="btn-secondary">Conoce el espacio</a>
  </div>
</section>
```

```css
.hero { padding: var(--space-11) var(--gutter); text-align: center; background: var(--cream-50); }
.hero-mark svg { width: 72px; height: 72px; color: var(--cobalt-700); }
.hero-kicker {
  display: block;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  color: var(--cobalt-700);
  margin-bottom: 16px;
}
.hero-display {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 600;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--ink-900);
}
.hero-lede {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-body-lg);
  color: var(--ink-700);
  margin-top: 24px;
}
```

### 4.10 Form inputs

```css
.field-input {
  background: #FFFFFF;
  border: 1px solid var(--hairline-strong);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--ink-900);
  transition: border-color var(--motion-base) var(--ease-out);
}
.field-input:focus {
  outline: none;
  border-color: var(--cobalt-700);
  box-shadow: 0 0 0 3px var(--cobalt-glaze);
}
```

---

## 5. Layout & secciones

Para la landing v1 propuesta (sujeta a brief de Fase 6), los patrones sección que aplican:

### 5.1 Hero typographic + CTA

Ya documentado en §4.9. Sub-componente: el isologo de la pose se dibuja al cargar (CSS `@keyframes dash`, ver §6.3).

### 5.2 "Qué es acroyoga" (educativa)

3-4 párrafos cortos en cards o columnas. Card layout con eyebrow + h3 + body + diamond ornament al final como signature.

### 5.3 Schedule (clases)

Grid de schedule chips. Patrón: día de semana + hora. Layout responsive (3 columnas desktop, 1 columna mobile). Heredado del flyer del cliente.

### 5.4 "No necesitas..."

Bloque explícito con value props del flyer:
- "No necesitas pareja"
- "No necesitas experiencia"
- "Diversión y seguridad"

Cada uno con icon (puede ser diamond, chevron, o ilustración line-art futura).

### 5.5 Espacio físico (la casa)

Foto del espacio (cuando el cliente la provea) + párrafo describiendo la casa. Mérida, Yucatán específico.

### 5.6 Maestros / fundadores

Opcional. Si el cliente lo decide. Mismo patrón que seo4yoga: foto + bio breve + linaje.

### 5.7 Próximos jams / workshops / immersions

Lista de eventos con eyebrow ("INMERSIÓN"), h3, fecha, CTA. Si no hay eventos próximos, ocultar.

### 5.8 CTA final + Contact

WhatsApp + Feather RSVP embed o link. Foto de la casa o pose acroyoga al fondo.

### 5.9 Footer

Address Mérida + WhatsApp + RSVP link + redes (Instagram presumiblemente). Wordmark stacked + diamond mark.

---

## 6. Patrones

### 6.1 Eyebrow + h2 italic accent

Patrón signature ya documentado en §4.5. Aplicación:

```html
<header class="section-header">
  <span class="eyebrow">PRÓXIMO JAM</span>
  <h2 class="h2-display">
    Volar y basear, <em>en comunidad</em>.
  </h2>
</header>
```

### 6.2 Pareja monogámica cobalto + cream

- Background siempre cream (`--background` semántico = `cream-50`).
- Texto siempre ink (`--foreground` = `ink-900`).
- Acentos siempre cobalto.
- NO introducir terciarios saturados (rojo, verde brillante, naranja). Si necesitamos color de status, usamos los tokens `success/warning/danger` que están dentro de la paleta visual (cobalto-verde, ámbar tostado, terracota).

### 6.3 SVG line-art draw-on (signature visual)

Heredado de yogamaya. El logo de la pose se dibuja al cargar la home:

```css
.logo-pose path {
  fill: none;
  stroke: var(--cobalt-700);
  stroke-width: 2;
  stroke-dasharray: var(--path-length);  /* dinámico según pathLength real */
  animation: draw var(--motion-draw) var(--ease-linear) forwards;
}
@keyframes draw {
  from { stroke-dashoffset: var(--path-length); }
  to   { stroke-dashoffset: 0; }
}
```

**Pendiente**: cuando el JPG del logo se vectorice profesionalmente, escribir las paths SVG con `pathLength` calculado y aplicar este patrón.

### 6.4 Page transitions suaves

Heredado de yogamaya (swup → equivalente moderno). Para Next.js 16:

```tsx
// Con View Transitions API
'use client';
import { useRouter } from 'next/navigation';
// El routing se hace con startViewTransition wrapper

// O con Framer Motion
<AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] } }}
    exit={{ opacity: 0, transition: { duration: 0.18 } }}
  >
    {children}
  </motion.main>
</AnimatePresence>
```

Token a usar: `--motion-page: 420ms` con `--ease-out`.

### 6.5 Hover universal `transition: all 320ms ease`

Aplicar a todos los elementos interactivos por default:

```css
a, button, .card, figure, .schedule-chip {
  transition: all var(--motion-base) var(--ease-out);
}
```

### 6.6 Diamond como separador inline

Entre value props o entre sub-headings:

```html
<p>Diversión y seguridad garantizadas</p>
<svg class="diamond-ornament" aria-hidden="true">…</svg>
<p>No necesitas pareja</p>
```

Color: `currentColor` para que herede del contexto.

### 6.7 Spacing entre secciones

Default: `padding-block: var(--section)` = 128px desktop. Mobile: usar `--section-xs` = 64px. La densidad o expansion crea ritmo editorial.

### 6.8 Imágenes y aspect ratios

Para fotos del espacio físico o eventos: aspect ratio `4/5` (portrait) o `3/2` (landscape). Border radius `--radius-lg` = 16px. Sin shadow por default; shadow al hover.

---

## 7. Drift detectado

**N/A al 2026-05-07.** Bundle creado desde cero — no hay live ni código aún. Sin drift posible.

Cuando se cree la landing en `clients/la-casa-del-acroyoga/next/`:
- Se refresca el design system (`is_refresh: true`).
- Se cruzan los tokens del repo con esta versión 1.0.0.
- Si difieren: se documenta drift aquí y la versión sube a 1.1.0.

---

## 8. Cómo regenerar

Workflow: [.claude/workflows/shared/design-system-extraction.md](../../../.claude/workflows/shared/design-system-extraction.md)
Tool: [.claude/tools/design-system-extract/](../../../.claude/tools/design-system-extract/)
Input usado: `.tmp/input-la-casa-del-acroyoga.json`

```powershell
python .claude\tools\design-system-extract\pipeline.py `
  --input .tmp\input-la-casa-del-acroyoga.json `
  --pillars "Diversion y seguridad,Casa-comunidad,Sin barrera de entrada"
```

Para refresh (cuando exista la landing):
- Cambiar `is_refresh: true` en input.json.
- Actualizar `$meta.source.live` a la URL real del cliente.
- Actualizar `$meta.source.repo` a la ruta del Next.js.
- Re-correr pipeline. La tool bumpea `$meta.version` a `1.1.0`.

---

## Referencias

- **Bundle de inspiración yogamaya**: [`../inspiration/yogamaya/`](../inspiration/yogamaya/)
- **Brand assets originales**: [`../brand/raw/`](../brand/raw/)
- **Decisiones de conservación + contexto del cliente**: [`../brand/notes.md`](../brand/notes.md)
- **Catálogo de animaciones (heredadas de yogamaya)**: [`../inspiration/yogamaya/animations.md`](../inspiration/yogamaya/animations.md)
- **Reglas de copy heredadas**: ver [voice-and-tone.md](voice-and-tone.md) §3.

## Próximo paso (Fase 6)

Build de la landing en `clients/la-casa-del-acroyoga/next/` con:
- Next.js 16 (App Router, Turbopack)
- Cargar Cormorant + Outfit via `next/font/google`
- Importar `tokens.css` al `globals.css`
- Replicar SVG line-art draw-on para el logo de la pose (vectorizado)
- Replicar page transitions con View Transitions API o Framer Motion
- Deploy a Vercel

# Yogamaya · Design System (Inspiration Reference)

**Versión:** 1.0.0  ·  **Capturado:** 2026-05-07
**Fuente live:** https://yogamaya.com (EN)
**Stack:** WordPress + tema custom `ym` + jQuery + swup
**Para qué sirve:** referencia visual y técnica de yogamaya para inspirar el design system de **La Casa del Acroyoga**. Este documento describe lo que **yogamaya proyecta**; no es prescriptivo para el cliente. Claude Design en Fase 5 adapta estos patrones al contexto acroyoga + brand assets del cliente.

---

## 1. Overview

### Identidad de yogamaya

Yogamaya es un yoga studio en Chelsea NYC (151 West 19th Street). La marca proyecta **calma editorial, casa-santuario, comunidad cálida** — la estética está más cerca de una revista de arte o un salón literario que de un gimnasio. La home es una **portada tipográfica de una sola pantalla** con grandes letras serif (CLASSES, RATES, TEACHER TRAINING…) sobre fondo cream con un patrón decorativo line-art tipo yantra.

Lo que la marca evita: agencia-corporate, fitness gym, wellness influencer. Lo que la marca abraza: serif display, paleta orgánica de pocos colores, page transitions suaves, ilustraciones SVG que se trazan al cargar.

### Fuente del bundle

Capturado solo desde live (no hay acceso al código fuente ni Figma). Tokens cruzados via `getComputedStyle` y `:root`. Stack identificado leyendo `<script src>` y librerías cargadas en `window`.

### Cómo usar este sistema (en el contexto de La Casa del Acroyoga)

- **Como moodboard visual:** los screenshots en `screenshots/` son la principal referencia para Claude Design en Fase 5.
- **Como sistema técnico:** `tokens.json` y `tokens.css` documentan los valores reales. Claude Design los **adapta** (no copia) — el azul cobalto del cliente reemplaza al forest, y la paleta cream de yogamaya puede mezclarse con cream/off-white inspirado en la nota cálida.
- **Como referencia de animaciones:** `animations.md` cubre el stack motion completo. La **page transition con swup** y el **SVG line-art draw-on** son los patrones más distintivos a replicar.

---

## 2. Brand Foundations

### 2.1 Logos

| Archivo | Uso |
| --- | --- |
| [assets/logos/yogamaya-isologo.svg](assets/logos/yogamaya-isologo.svg) | Wordmark "YOGAMAYA NYC" — header default. Es el wordmark oficial, archivo SVG hosteado por yogamaya.com (`/wp-content/themes/ym/library/i/ymwm.svg`). 159×43px aprox. Color sólido `#0B2A2B`. |
| [assets/logos/yogamaya-mark.svg](assets/logos/yogamaya-mark.svg) | Safari mask icon — versión condensada del logo para pinned tabs. |
| [assets/icons/favicon.ico](assets/icons/favicon.ico), [favicon-32.png](assets/icons/favicon-32.png), [favicon-16.png](assets/icons/favicon-16.png) | Browser favicons. |
| [assets/icons/apple-touch-icon.png](assets/icons/apple-touch-icon.png) | iOS home screen icon. |

**Construcción del wordmark:**
- Letterforms en serif tipográfico (custom de la familia Dahlia, ver §2.3).
- Sin tagline.
- Color sólido forest-900 sobre cream-50.
- En contextos sobre fondos oscuros, se invertiría a cream-50 sobre forest-900 (no observado pero lógico para coherencia).

**Reglas implícitas:**
- Tamaño mínimo: ~40px de alto (basado en el render observado).
- Espaciado consistente entre letras — el SVG está calibrado.
- No alterar el peso ni el tracking del wordmark.

### 2.2 Paleta

#### Brand (mínima, dos colores load-bearing)

| Token | Hex | Uso |
| --- | --- | --- |
| `--forest-900` | `#0B2A2B` | Primary — texto sobre cream / botón primario / wordmark / borders |
| `--cream-50`   | `#EBDBC2` | Background — fondo de página / hero / footer |
| `--cream-100`  | `#F1E6D5` | Warmer cream — texto sobre botón primario, highlights sutiles |
| `--ink-900`    | `#0B2A2B` | Alias de forest-900 en rol foreground |

**Observación crítica:** yogamaya usa **solo 2 colores reales** (forest + cream). No hay accent terracotta, no hay sage, no hay azul. La pureza de la paleta es parte del feel. Esto contrasta con el sistema de seo4yoga (que tiene sage como accent).

#### Hairlines (alpha)

| Token | Valor |
| --- | --- |
| `--hairline`        | `rgba(11, 42, 43, 0.10)` |
| `--hairline-strong` | `rgba(11, 42, 43, 0.18)` |

**WordPress noise:** los tokens `--wp--preset--*` y `--momence-*` que aparecen en `:root` son defaults del CMS y del plugin de booking (Momence). **No son parte de la marca de yogamaya** y se ignoran en el bundle.

### 2.3 Tipografía

| Familia | Uso | Fuente |
| --- | --- | --- |
| **Dahlia-med** | Display serif (page titles enormes en home + headings de sub-páginas) | Custom hosted, [assets/fonts/dahlia-medium.woff2](assets/fonts/dahlia-medium.woff2) |
| **Dahlia (regular)** | Display serif lighter weight | [assets/fonts/dahlia-regular.woff2](assets/fonts/dahlia-regular.woff2) |
| **Montserrat** | Body sans (paragraphs, nav, buttons, captions) | Google Fonts — [assets/fonts/montserrat-regular.woff2](assets/fonts/montserrat-regular.woff2), [montserrat-italic.woff2](assets/fonts/montserrat-italic.woff2) |
| **Libre Bodoni** | Italic accent (fallback declarado en stack display) | Google Fonts (no se descarga porque está unloaded en práctica) |
| **Inter** | Body sans del widget Momence | Google Fonts — [assets/fonts/inter-latin.woff2](assets/fonts/inter-latin.woff2) |

**Stack canónico:**
- Display: `'Dahlia-med', 'Libre Bodoni', Cambria, 'Times New Roman', Times, serif`
- Body: `Montserrat, Helvetica, Arial, sans-serif`

**Escala observada (computed styles del live):**

| Rol | Valor observado | Token recomendado |
| --- | --- | --- |
| Display (CLASSES, RATES…) | 157.68px (1440 viewport) | `clamp(80px, 12vw, 158px)` |
| H1 default | 32px | `clamp(40px, 5vw, 64px)` (subido para uso editorial) |
| Body p | 12px | `12px` (caption) o subir a `14-16px` para acroyoga |
| Body default | 16px | `16px` |
| Button | 14px | `14px` |
| Nav a (cuando es serif display) | 157.68px | `clamp(80px, 12vw, 158px)` (mismo que display) |

**Letter-spacing observado:**
- Body: `normal`
- Display: `normal` (Dahlia tiene su propio kerning interno)

**Line-heights observados:**
- Body: `normal` (~1.5)
- H1: `normal` (~1.0–1.1)

**Implicación para acroyoga:** el body-default de yogamaya en 12px es **muy chico** y editorial. Para una landing acroyoga moderna, subir a 14-16px estándar. El display puede mantenerse enorme (clamp ~80-158px).

---

## 3. Tokens completos

### Spacing (WP preset, mapeado a la escala 1-8)

| Token | Valor | Origen |
| --- | --- | --- |
| `--space-1` | `4px` | base |
| `--space-2` | `8px` | base |
| `--space-3` | `12px` | base |
| `--space-4` | `16px` | base |
| `--space-5` | `24px` | WP `--wp--preset--spacing--50` |
| `--space-6` | `36px` | WP `--wp--preset--spacing--60` (2.25rem) |
| `--space-7` | `54px` | WP `--wp--preset--spacing--70` (3.38rem) |
| `--space-8` | `81px` | WP `--wp--preset--spacing--80` (5.06rem) |

### Radii

| Token | Valor | Uso |
| --- | --- | --- |
| `--radius-sm`   | `4px`   | Inputs |
| `--radius-md`   | `8px`   | Buttons (observado en `<button>`) |
| `--radius-lg`   | `16px`  | Cards |
| `--radius-pill` | `999px` | Pills, badges |

### Shadows

| Token | Valor |
| --- | --- |
| `--shadow-xs` | `0 1px 2px rgba(11, 42, 43, 0.04)` |
| `--shadow-sm` | `0 2px 8px rgba(11, 42, 43, 0.06)` |
| `--shadow-md` | `0 8px 24px rgba(11, 42, 43, 0.08)` |

### Motion (ver `animations.md` para detalle completo)

| Token | Valor | Uso |
| --- | --- | --- |
| `--motion-fast`    | `108ms`   | Close/dismiss |
| `--motion-base`    | `324ms`   | **Hover universal — yogamaya signature timing** |
| `--motion-slow`    | `400ms`   | CTA button hover |
| `--motion-draw`    | `3000ms`  | SVG dash draw-on |
| `--motion-marquee` | `14600ms` | Banner infinite scroll |
| `--ease-default`   | `ease`    | Default easing |
| `--ease-linear`    | `linear`  | Dash, marquee, spin |

### Layout / Breakpoints

| Token | Valor |
| --- | --- |
| `--container` | `1440px` (full-bleed editorial) |
| `--gutter`    | `32px` |
| `--bp-sm`     | `640px` |
| `--bp-md`     | `768px` |
| `--bp-lg`     | `960px` |
| `--bp-xl`     | `1200px` |

---

## 4. Componentes observados

### 4.1 Header (top bar)

- Layout: full-width, fondo `cream-50`.
- Contiene: marquee scroll horizontal con "200HR YTT · INDIA RETREAT" + Instagram icon + wordmark "YOGAMAYA NYC".
- Posición: top sticky en desktop, no observada en mobile.
- Tipografía: `Montserrat 12-14px`.

### 4.2 Hero (typographic landing)

- Layout: 1 viewport (no scroll).
- Background: cream + decoración SVG line-art (peacock feather concentric circles).
- Contenido principal: grid de palabras enormes en serif Dahlia-med (CLASSES, RATES, TEACHER TRAINING, YMTV, EVENTS, STUDIO, BLOG) que actúan como nav.
- Cada palabra se dibuja al cargar (SVG dash 3s).
- Hover: probablemente cambio de color forest → algún tinte (no verificable sin interactuar).

### 4.3 Inner page hero

Patrón observado en `/yoga-teacher-training-nyc/`, `/200hr_teacher-training-nyc-yogamaya/`, `/india-retreat-fall-2026/`:

- **Banner top**: marquee con menciones de programas activos.
- **Hero card**: imagen full-bleed con título serif overlay (e.g. "200-Hour Teacher Training", "Teacher Training", "India Retreat").
- **Subtítulo + CTA**: párrafo corto (1-2 líneas) + botón "SEND ME A CLASS INVITE" / "REGISTER" en estilo dark CTA.
- **Tabs/pills**: "ALL", "200 HR", "300 HR", "AYURVEDA", "MENTORSHIP", "ALUMNI" en row uniforme (capturado en teacher-training).
- **Footer mini**: address + phone + Terms.

### 4.4 Botón primario (CTA)

```css
.btn-primary {
  background: #0B2A2B;
  color: #F1E6D5;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  padding: 10px 16px;
  border: 2px solid transparent;
  transition: all 0.4s ease;
}
```

Al hover, probablemente: ligero scale o cambio de sombra.

### 4.5 Marquee banner

- HTML: `<div class="js-marquee-wrapper">` con plugin jQuery.marquee
- CSS animation: `marqueeAnimation-1517584` 14.62s linear infinite
- Contenido: "200HR YTT · INDIA RETREAT" repetido.

### 4.6 Footer

- Layout: full-width, fondo `cream-50`, texto `forest-900`.
- Contenido (3 líneas):
  1. Address ("151 West 19th Street, NYC") + email + teléfono.
  2. Terms & Conditions + copyright "© 2009 - 2026 YOGAMAYA".

---

## 5. Layout & secciones

### 5.1 Patrón "1-page por screen" en desktop

Yogamaya **no scroll-stack en desktop**. Cada URL es una **sola pantalla** que comunica toda su info en 1440×900. Las páginas con más contenido (200hr-ytt, india-retreat) usan **navegación interna por tabs/pills** en vez de scroll, o tienen scroll pero limitado.

Mobile expande verticalmente todo el contenido (mobile screenshots muestran páginas de 8000px+).

**Implicación para acroyoga**: este patrón es **opcional**, no obligatorio. La landing acroyoga puede ser scroll-stack tradicional (más usual y SEO-friendly) y aún replicar el feel editorial vía typography + animations + pace de las secciones.

### 5.2 Secciones que SÍ aplican a un studio acroyoga

De yogamaya, los **patrones secciones** que tienen análogo en una landing acroyoga:

| Yogamaya | Acroyoga equivalent |
| --- | --- |
| Hero typographic ("CLASSES" gigante) | Hero con "ACROYOGA" gigante en serif sobre cream + ilustración del logo |
| Studio doors / atmosphere image | Foto del espacio físico (la "casa") |
| Teacher training pages | Página "Workshops" o "Immersions" |
| India retreat | Página "Retiro" o "Jam mensual" |
| Events | Schedule + próximas fechas |
| Blog | Opcional, depende si el cliente bloggea |
| Contact | Sí, con WhatsApp + Feather embed |

---

## 6. Patrones de uso

### 6.1 Big serif as nav

Muestra (CSS pseudo-código):

```css
.nav-display-link {
  font-family: 'Dahlia-med', serif;
  font-size: clamp(80px, 12vw, 158px);
  text-transform: uppercase;
  color: var(--forest-900);
  text-decoration: none;
  transition: all 0.324s ease;
}
.nav-display-link:hover {
  /* cambio sutil — tinte, opacity, o scale */
}
```

### 6.2 SVG line-art como elemento de fondo

Las decoraciones del home (peacock feather, hand and lotus) son SVGs con `<path>` que usan la animación `dash` para "trazarse" en 3 segundos al cargar. Son el sello visual de yogamaya — equivalente al "logo del cliente que se dibuja" en La Casa del Acroyoga.

### 6.3 Cream + forest = pareja monogámica

Casi todo el sitio es cream con texto forest. **Sin** accent colors saturados. La textura visual viene de las ilustraciones SVG, no de bloques de color.

**Para acroyoga**: respetar la "pareja monogámica" pero con azul cobalto + cream/off-white. Evitar agregar terciarios saturados.

---

## 7. Drift detectado

No aplica — bundle capturado solo desde live, no hay código fuente ni Figma para cruzar. Sin drift posible.

Si yogamaya rediseña en el futuro, este bundle queda como snapshot al **2026-05-07**.

---

## 8. Cómo regenerar

Workflow: [.claude/workflows/shared/design-system-extraction.md](../../../../.claude/workflows/shared/design-system-extraction.md)
Tool: [.claude/tools/design-system-extract/](../../../../.claude/tools/design-system-extract/)

```powershell
python .claude\tools\design-system-extract\pipeline.py `
  --input .tmp\input-yogamaya.json `
  --pillars "Calma editorial,Casa-santuario,Comunidad calida"
```

Para regenerar después de un re-capture (si yogamaya cambia y queremos refrescar la inspiración), agregar `--input` actualizado y bumpear `is_refresh: true`.

---

## Anexo — Lo que NO se replica directamente para acroyoga

| Yogamaya | Por qué no copia directo |
| --- | --- |
| Custom font Dahlia hospedada propia | Es propietaria de yogamaya. Acroyoga necesita su propia tipografía display (Claude Design propone). |
| Body 12px caption-like | Demasiado chico para un sitio moderno; subir a 14-16px. |
| Layout "1-screen por página" en desktop | Patrón editorial específico; landing acroyoga puede usar scroll-stack convencional. |
| WordPress + jQuery + swup stack | Acroyoga usa Next.js. Las page transitions las hacemos con View Transitions API o Framer Motion. |
| Marquee infinite "200HR · INDIA RETREAT" | Concepto válido, pero el contenido cambia (próximos jams, schedule semanal). |

## Anexo — Lo que SÍ replica con prioridad alta

| Yogamaya | Aplicación a acroyoga |
| --- | --- |
| **SVG line-art draw-on (3s linear reverse)** | El logo de la pose acroyoga se dibuja al cargar la home. Sello visual del cliente. |
| **Page transitions suaves (swup-equivalent)** | View Transitions API para fade entre rutas. |
| **Hover transition 324ms ease universal** | Token `--motion-base: 324ms`. |
| **Cream + forest pareja monogámica** | Adaptado: cream/off-white + azul cobalto pareja monogámica. |
| **Display serif enorme** | Tipografía display serif propuesta por Claude Design para wordmark + headings. |
| **Pace editorial — sin scroll-reveals AOS** | No saturar la landing con `data-aos`. La elegancia viene de la restricción. |

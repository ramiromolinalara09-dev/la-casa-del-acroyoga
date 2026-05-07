# Yogamaya · Catálogo de animaciones

**Capturado:** 2026-05-07 desde [yogamaya.com](https://yogamaya.com) (live).
**Stack detectado:** WordPress + tema custom `ym` + jQuery + **swup** (page transitions). Sin GSAP, Framer Motion, AOS, Lenis, Locomotive Scroll, Splitting, Swiper.

Este catálogo le sirve a Claude Design en Fase 5 para replicar el "feel" de yogamaya en La Casa del Acroyoga, con stack moderno equivalente (Next.js + Framer Motion + view-transitions / next-view-transitions, o equivalente).

---

## 1. Page transitions — swup

Yogamaya usa la librería **[swup](https://swup.js.org/)** (con plugin de preload). El `<html>` carga con clase `swup-enabled`.

- **Comportamiento**: al navegar entre páginas, swup hace fetch del HTML de destino, hace fade-out del contenedor `<main>` (~300-400ms), inyecta el contenido nuevo, y hace fade-in. La URL cambia sin reload.
- **Loader**: hay un spinner CSS clase `.first-load img { animation: 2s linear infinite spin; }` que aparece mientras se hace el fetch.
- **Resultado**: navegación que **se siente como una sola app editorial continua** — clave del "feel" de yogamaya.

**Equivalente moderno para acroyoga (Next.js):**
- Usar **View Transitions API** nativa (Next.js 16 con experimental flag) para fade-replace entre rutas, o
- **next-view-transitions** package, o
- **Framer Motion** `<AnimatePresence mode="wait">` con `<motion.main>` que hace `initial/animate/exit` de opacity 0→1.

Duración recomendada: **300-400ms** ease-out.

---

## 2. SVG line-art draw-on-load (signature visual)

El elemento más distintivo de yogamaya: las **patrones de fondo y figuras decorativas SVG** (Peacock Feather Blast, Hand and Lotus, Studio Doors, Dancing Yogis, Lady and Tiger, Yogamaya TV, Blog Animation) se dibujan a sí mismas al cargar la página.

**Implementación CSS observada:**

```css
#matBG svg path.st0,
#innerMatBG svg path.st0 {
  animation: 3s linear 0s 1 reverse none running dash;
  fill: none;
  stroke: rgb(11, 42, 43);
  stroke-width: 1;
  stroke-miterlimit: 10;
  stroke-dasharray: 4000;
}

@keyframes dash {
  to { stroke-dashoffset: 0; }
}
```

- **Duración**: 3 segundos
- **Easing**: linear
- **Dirección**: reverse (la línea se dibuja del final al principio)
- **stroke-dasharray**: 4000 (longitud de path mayor a la real, asegura que el dash cubra toda la línea)

**Resultado**: cada path SVG aparece "trazándose" en pantalla durante 3 segundos. Da al sitio un aire artesanal/yantra.

**Equivalente moderno para acroyoga:**
- Convertir las ilustraciones del logo line-art (la pose acroyoga) a SVG con `<path>` definidos
- Aplicar el mismo `@keyframes dash` con stroke-dasharray ajustado al pathLength real
- Trigger: al cargar la home, y opcionalmente al entrar al viewport en otras secciones (IntersectionObserver)

---

## 3. Marquee infinite scroll (top banner)

El banner superior con "200HR YTT · INDIA RETREAT · 200HR YTT · INDIA RETREAT" hace scroll horizontal infinito.

- **Animación CSS keyframe**: `marqueeAnimation-1517584` (custom name del plugin jQuery.marquee)
- **Duración**: 14.62s
- **Easing**: linear
- **Iteración**: infinite
- **Container**: `<div class="js-marquee-wrapper">`

**Equivalente moderno:**
- CSS-only marquee con `@keyframes` y `transform: translateX(-100%)`, o
- React component como `react-fast-marquee`, o
- Custom con Framer Motion `animate={{ x: '-100%' }} transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}`

Para acroyoga: usar para un banner de **horarios próximos** o **next jam dates** scrolling continuamente.

---

## 4. Hover transitions (universal)

**Toda la interactividad usa una duración común muy específica:**

| Elemento | Property | Duration | Easing |
| --- | --- | --- | --- |
| `<a>` | `all` | **0.324s** | ease |
| `<figure>` | `all` | 0.324s | ease |
| `nav a` | `all` | 0.324s | ease |
| `figure.restart` | `all` | 0.324s | ease |
| `<a>` (color only) | `color` | 0.324s | ease |
| `button` (CTA) | `all` | 0.4s | ease |
| `button.closer` | `all` | 0.108s | ease |

**Observación**: la duración 324ms es load-bearing del feel de yogamaya. Probablemente derivada del módulo áureo o un sistema interno (0.324 × 3 = 0.972 ≈ 1s; 0.108 × 3 = 0.324, una progresión geométrica).

**Equivalente moderno para acroyoga:** podemos respetar los 324ms o redondear a 320ms / 300ms. Lo importante es el **feel** — más lento que el típico 200ms web (que se siente "snappy"), más rápido que 500ms (que se siente "lento"). El 324ms se siente "considerado", "editorial".

**Tokens recomendados para el design system:**
- `--motion-fast`: 108ms (close, dismiss)
- `--motion-base`: 324ms (hover universal)
- `--motion-slow`: 400ms (CTA hover, dropdown open)

---

## 5. Loader spinner (`.first-load img`)

```css
.first-load img { animation: 2s linear 0s infinite normal none running spin; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
```

- **Duración**: 2s
- **Iteración**: infinite linear

Aparece durante el page transition (mientras swup hace fetch).

**Equivalente acroyoga**: usar el rombo/diamond del Logo B simplificado como spinner en transitions de página.

---

## 6. Lo que yogamaya NO usa (intencionalmente)

| Patrón web típico | Yogamaya |
| --- | --- |
| Scroll-reveals (data-aos, IntersectionObserver triggers) | **No** — porque el desktop es 1-screen por página, no necesita reveals |
| Parallax de fondos | **No** |
| Smooth-scroll inertia (Lenis, Locomotive) | **No** — confía en el scroll nativo del browser |
| Hero video loops | **No** — usa imagen estática + figuras SVG line-art |
| Auto-playing carousels (Swiper) | **No** — nav es estática |
| Cursor custom | **No** |

**Implicación para acroyoga**: la elegancia de yogamaya viene de la **restricción**, no del despliegue de animaciones. Una landing acroyoga con animaciones más sutiles que ostentosas estará más alineada con el tono "casa-santuario" del moodboard.

---

## 7. Resumen ejecutivo (para Claude Design)

| Patrón | Implementación recomendada en Next.js |
| --- | --- |
| Page transitions fade ~340ms | View Transitions API o Framer Motion `<AnimatePresence mode="wait">` |
| SVG line-art draw-on (3s linear reverse) | CSS `@keyframes dash` con `stroke-dasharray` calibrado al `pathLength` |
| Marquee horizontal infinite | CSS keyframe `translateX` o `react-fast-marquee` |
| Hover universal `transition: all 324ms ease` | Token `--motion-base: 324ms` aplicado a `a, figure, button:not(.cta), nav a` |
| Hover CTA `transition: all 400ms ease` | Token `--motion-slow: 400ms` aplicado a `.btn-primary` |
| Loader spin 2s linear infinite | Solo en `<Suspense>` fallback durante fetches |

**Lo que NO replicar:**
- IntersectionObserver-based reveals — yogamaya no los usa, el design pierde su elegancia editorial si se llena de "fade-up on scroll".
- Parallax — fuera del lenguaje de yogamaya.

**Lo crítico de replicar**:
1. Page transitions suaves (sin "blink" de carga).
2. SVG line-art que se dibuja al cargar — para el logo de la pose acroyoga, esto es **load-bearing** del feel artesanal/yantra.
3. La duración 324ms en hover es la firma temporal del sitio.

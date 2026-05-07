# La Casa del Acroyoga · Brand Notes

**Capturado:** 2026-05-07
**Cliente:** La Casa del Acroyoga
**Ubicación:** Mérida, Yucatán
**Idioma de operación:** Español (único locale del sitio)

---

## Identidad pública conocida

| Campo | Valor |
| --- | --- |
| Nombre comercial | La Casa del Acroyoga |
| WhatsApp / RSVP | `9999909291` (código Mérida) |
| Booking actual | `feather.rsvp/o/lacasadelacroyoga` |
| Sitio web propio | No existe — vamos a construirlo |
| Schedule actual (a 2026-05-07) | Lunes y miércoles 8 a 10 PM · Sábados 10 AM a 12 PM |

## Propuesta de valor (extraída del flyer)

> "Diversión y seguridad garantizadas. No hace falta experiencia previa o venir en pareja."

Tono: **accesible**, no athletic-extremo. Invita a principiantes y a quien viene solo.

---

## Activos visuales recibidos del cliente

Tres archivos en `brand/raw/`:

| Archivo | Qué es | Status |
| --- | --- | --- |
| `logo-a-pose.jpg` | Logo principal: ilustración line-art de pose acroyoga (base acostado + flyer en throne) en azul cobalto + wordmark stacked "LA CASA DEL / ACROYOGA". Una sola tinta. | **Primario** |
| `logo-b-diamond.jpg` | Logo alterno: rombo de triple línea en gradient cyan→cobalto + wordmark "ACROYOGA" atravesando horizontal + "LA CASA DEL" en triángulo superior. Estilo Art Deco. | **Variante de respaldo** (Ramiro no lo prefiere; mantenido por si el cliente lo exige) |
| `flyer-clase.jpg` | Flyer de clase con la ilustración del Logo A en blanco sobre gradient celeste→azul. Headline "ACRO YOGA" en serif bold all-caps. Diamond del Logo B aparece como elemento. | Referencia tipográfica + composicional |

---

## Decisiones de conservación (Ramiro 2026-05-07)

| Elemento | Decisión |
| --- | --- |
| Ilustración de la pose | Conservar tal cual. Re-vectorizar JPG → SVG limpio. |
| Wordmark composition stacked | Conservar layout ("LA CASA DEL" arriba pequeño + ilustración + "ACROYOGA" abajo grande). |
| Tipografía del wordmark | Abierta a propuesta — Claude Design re-tipografía respetando el lockup stacked. |
| Tipografía del sistema | Todo abierto — display + body propuestos por Claude Design. Permitido inspirarse en serif del flyer y en yogamaya. |
| Brand color (azul cobalto) | **Load-bearing**. Hex sampleado del Logo A (solid-fill del cuerpo): **`#2861B8`** (rgb 40,97,184). Paleta se construye alrededor del azul; surfaces secundarios pueden inclinarse a neutros cálidos (cream/off-white) inspirados en yogamaya. |
| Diamond/rombo (de Logo B) | Isotipo standalone para favicon, badges, accents. Versión simplificada (single line) para web ligera. |
| Logo B completo | Re-vectorizar a SVG y conservar como variante en el bundle. **No se usa** en la landing por default. |
| Gradient celeste→azul | A definir por Claude Design (default conservador: surface opcional, no obligatorio). |

---

## Inspiración para el design system

- **Principal:** [yogamaya.com](https://yogamaya.com) — bundle completo + animaciones (capturado en `inspiration/yogamaya/`).
- **Refs acroyoga:** ver `inspiration/{slug}/` por cada referencia capturada.

## Próximos pasos (fuera de este turno)

1. **Fase 5:** invocar `frontend-design` con `inspiration/` + `brand/` como inputs → produce `clients/la-casa-del-acroyoga/design-system/`.
2. **Fase 6:** build de la landing en `clients/la-casa-del-acroyoga/next/` con Next.js + animaciones de yogamaya, deploy a Vercel.

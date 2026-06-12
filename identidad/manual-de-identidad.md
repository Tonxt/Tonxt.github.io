# Manual de Identidad — Lisandro · Página Personal

> **Concepto:** Editorial / elegante · base oscura · neutro cálido + un único acento violeta (amatista).
> **Versión:** 1.0 — 2026-06-12 · **Autor:** Lisandro

Este manual define cómo se ve y se siente tu página personal: colores, tipografía y
elementos generales. La idea es que cualquier sección que sumemos (perfil, experiencia,
estudios, proyectos) se sienta parte de la misma marca.

---

## 0. Esencia de marca

Una sola frase para guiar cada decisión:

> **Un portfolio de autor: sobrio, preciso y con carácter. Sentís el oficio de los datos,
> presentado con la elegancia de una revista.**

**Atributos** (lo que debe transmitir): elegante · profesional · analítico · confiable · cuidado.

**Qué SÍ** → mucho aire, tipografía protagonista, contraste alto, detalles en violeta puntuales.
**Qué NO** → saturación de color, degradados llamativos, sombras pesadas, "stickers" o ruido visual.

---

## 1. Personalidad y tono visual

| Eje | Posición |
|-----|----------|
| Serio ↔ Divertido | **70% serio** |
| Clásico ↔ Moderno | **60% moderno** (editorial actual, no anticuado) |
| Sobrio ↔ Expresivo | **65% sobrio**, con momentos expresivos en titulares |
| Frío ↔ Cálido | **60% cálido** (neutros con temperatura, acento violeta) |

El protagonismo lo lleva la **tipografía y el espacio en blanco (negativo)**, no el color.
El violeta aparece poco y por eso destaca: titulares clave, enlaces, indicadores y CTAs.

---

## 2. Logotipo y marca personal

No necesitás un logo complejo. En estética editorial, **tu nombre bien tipografiado ES el logo.**

### 2.1 Wordmark (firma principal)
- Texto: **Lisandro Acuña** (versión corta: **Lisandro**).
- Fuente: **Fraunces**, peso 500–600.
- Detalle de marca: un **punto final en violeta** → `Lisandro Acuña.`
- Uso: navbar (versión chica), hero (versión grande), footer.

### 2.2 Monograma (avatar / favicon)
- **LA** en Fraunces dentro de un cuadrado de borde fino (1px) en violeta, fondo `--surface`.
- Versión alternativa con una sola **L** para tamaños muy reducidos.
- Tamaño mínimo legible: 24 px.

### 2.3 Área de protección y mínimos
- Dejá alrededor del wordmark un margen libre = a la altura de la "L".
- Tamaño mínimo del wordmark: 16 px de altura de "x".

### 2.4 Mal uso (no hacer)
- ❌ Cambiar la tipografía del nombre.
- ❌ Aplicar sombra, contorno o degradado al wordmark.
- ❌ Pintar todo el nombre de violeta (el violeta es solo el punto/acento).
- ❌ Deformar, rotar o condensar el monograma.

---

## 3. Paleta de color

Sistema **neutro + 1 acento**. La regla de oro: **60 / 30 / 10**
→ 60% fondo neutro · 30% superficies y texto · 10% acento violeta.

### 3.1 Neutros (base oscura, cálida)

| Token | Hex | Rol |
|-------|-----|-----|
| `--bg` | `#0E0D0B` | Fondo principal ("tinta") |
| `--surface` | `#16130F` | Secciones / tarjetas |
| `--surface-raised` | `#1E1A15` | Tarjetas elevadas, hover |
| `--border` | `#2A251F` | Bordes y divisores |
| `--border-strong` | `#3A342B` | Bordes destacados / focus |

### 3.2 Texto (blancos cálidos)

| Token | Hex | Rol |
|-------|-----|-----|
| `--text` | `#F4EFE6` | Texto principal (hueso) |
| `--text-secondary` | `#B7AE9F` | Texto secundario, descripciones |
| `--text-muted` | `#807766` | Metadatos, captions, deshabilitado |
| `--text-on-accent` | `#F7F4FC` | Texto sobre botones violeta |

### 3.3 Acento — Violeta amatista

| Token | Hex | Rol |
|-------|-----|-----|
| `--accent` | `#8160CC` | Acento principal: enlaces, CTAs, detalles |
| `--accent-hover` | `#9C82DC` | Estado hover / activo |
| `--accent-press` | `#6E4FB0` | Estado pressed |
| `--accent-soft` | `rgba(129,96,204,.12)` | Fondos sutiles, resaltados |
| `--accent-line` | `rgba(129,96,204,.30)` | Bordes y subrayados violeta |

> El acento es **único**. Si algún día querés un segundo color, cambiá una sola variable
> (`--accent`) y toda la página se reconfigura — el sistema está pensado para eso.

### 3.4 Semánticos (usar con moderación, en versión apagada)

| Token | Hex | Uso |
|-------|-----|-----|
| `--success` | `#6FA06A` | Éxito / disponible |
| `--warning` | `#CC9A4A` | Aviso (ámbar) |
| `--danger` | `#C25B4E` | Error / alerta |
| `--info` | `#6E8BA8` | Información neutra |

### 3.5 Accesibilidad
- Texto principal (`--text`) sobre `--bg`: contraste ~16:1 ✅ (AAA).
- El violeta sobre fondo: usalo en **títulos grandes, enlaces, íconos y bordes**; para
  texto chico preferí los blancos cálidos (mejor legibilidad).
- Foco visible siempre: anillo `--accent` de 2px en cualquier elemento interactivo.

---

## 4. Tipografía

Tres familias con roles bien separados. Todas gratuitas (Google Fonts).

| Familia | Rol | Por qué |
|---------|-----|---------|
| **Fraunces** (serif) | Títulos / Display | Carácter editorial, elegante y moderno. La voz de la marca. |
| **Inter** (sans) | Cuerpo / UI | Neutra, legible, perfecta para textos y componentes. |
| **JetBrains Mono** (mono) | Datos / Etiquetas | Guiña a tu perfil técnico: kickers, fechas, tags, código. |

### 4.1 Escala tipográfica (modular, base 16px)

| Token | Tamaño | Uso | Fuente / peso |
|-------|--------|-----|---------------|
| `--text-4xl` | 80px / 5rem | Hero (nombre) | Fraunces 500 |
| `--text-3xl` | 60px / 3.75rem | Título de página | Fraunces 500 |
| `--text-2xl` | 44px / 2.75rem | Título de sección (H2) | Fraunces 500 |
| `--text-xl` | 32px / 2rem | Subtítulo (H3) | Fraunces 500 |
| `--text-lg` | 24px / 1.5rem | Destacado / lead | Fraunces 400 |
| `--text-md` | 18px / 1.125rem | Intro de párrafo | Inter 400 |
| `--text-base` | 16px / 1rem | Cuerpo | Inter 400 |
| `--text-sm` | 14px / .875rem | Secundario | Inter 400 |
| `--text-xs` | 12px / .75rem | Kickers, metadatos, tags | JetBrains Mono 500 |

### 4.2 Detalles de uso
- **Titulares (Fraunces):** interletrado ajustado `-0.02em`, interlínea apretada `1.05–1.15`.
- **Cuerpo (Inter):** interlínea cómoda `1.7`, ancho de lectura máx. **68 caracteres**.
- **Kickers / etiquetas (Mono):** MAYÚSCULAS, tracking amplio `0.12em`. Ej: `EXPERIENCIA / 01`.
- Dos pesos por familia como máximo en una misma vista. Menos es más.

### 4.3 Ejemplo de jerarquía (sección típica)
```
PROYECTOS / 03                ← kicker  · JetBrains Mono 12px · oro · MAYÚS
Cosas que construí.           ← H2      · Fraunces 44px
Una selección de trabajos…    ← lead    · Inter 18px · text-secondary
[cuerpo del proyecto]         ← body    · Inter 16px · text
```

---

## 5. Espaciado y grilla

Sistema de **8 puntos** (con medio paso de 4px).

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

- **Ancho máximo de contenido:** 1180px, centrado.
- **Grilla:** 12 columnas, gutter 24px. En mobile: 1 columna.
- **Aire:** las secciones respiran — padding vertical de 96px (desktop) / 48px (mobile).
- **Ritmo editorial:** usá líneas finas (`--border`, 1px) como reglas para separar bloques.

### Breakpoints
`sm 640 · md 768 · lg 1024 · xl 1280`

### Radios de esquina (sobrios)
`--radius-sm 4px · --radius-md 8px · --radius-lg 14px · --radius-pill 999px`
> En estética editorial, **menos redondeo = más elegante.** Por defecto usá `sm`/`md`.

---

## 6. Iconografía e ilustración
- **Estilo:** íconos de línea, trazo fino **1.5px**, esquinas suaves. Set sugerido: **Lucide** o **Tabler**.
- **Color:** heredan `--text-secondary`; en estado activo/hover pasan a `--accent`.
- **Tamaño:** 16–20px inline · 24px en tarjetas.
- Nada de íconos rellenos, multicolor ni 3D. Coherencia ante todo.

---

## 7. Elementos de interfaz (componentes)

### Botones
| Tipo | Estilo |
|------|--------|
| **Primario** | Fondo `--accent`, texto `--text-on-accent`, radio `md`. Hover → `--accent-hover`. |
| **Secundario (ghost)** | Transparente, borde 1px `--accent-line`, texto `--accent`. Hover → fondo `--accent-soft`. |
| **Terciario (texto)** | Solo texto `--text`, subrayado violeta al hover. |

### Tarjetas (proyectos, experiencia)
- Fondo `--surface`, borde 1px `--border`, radio `lg`, padding 24px.
- Hover: sube a `--surface-raised`, borde `--accent-line`, transición 300ms.
- Sombra mínima: `0 8px 24px rgba(0,0,0,.45)` solo en elementos elevados.

### Etiquetas / tags (skills)
- Mono 12px, MAYÚS, padding `6px 12px`, borde 1px `--border`, radio `pill`.
- Ej: `PYTHON` · `SQL` · `POWER BI` · `PANDAS`.

### Enlaces
- Color `--accent`, subrayado fino que aparece/refuerza al hover.

### Divisores
- Línea 1px `--border` a todo el ancho. Es el recurso editorial estrella: úsalo para separar secciones.

### Navbar
- Fija arriba, fondo `--bg` con leve transparencia al hacer scroll, borde inferior `--border`.
- Izquierda: wordmark `Lisandro.` · Derecha: enlaces en Mono 14px.

### Footer
- Fondo `--surface`, wordmark + íconos de contacto + © año. Sobrio.

---

## 8. Imágenes y tratamiento visual
- **Fotos** (tu retrato, capturas de proyectos): tratamiento **cálido y con contraste**,
  ligeramente desaturado para integrarse al fondo oscuro.
- Bordes con radio `md`/`lg` y borde fino `--border`.
- Evitar fotos frías o muy saturadas que rompan la paleta.
- Para proyectos sin imagen: usá un bloque `--surface` con el monograma + kicker.

---

## 9. Movimiento e interacción
- **Filosofía:** elegante = sutil y lento. Nada rebota ni parpadea.
- **Entrada de secciones:** fade + slide-up de 16px, 400–500ms, al hacer scroll.
- **Hover:** transiciones de 150–300ms.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out suave).
- Respetá `prefers-reduced-motion` para accesibilidad.

---

## 10. Tono de voz y redacción
- **Primera persona, seguro pero sin soberbia.** "Construyo modelos de datos que…", no "El mejor analista…".
- **Conciso.** Frases cortas. Cada palabra suma.
- **Concreto y con resultados.** Números cuando se pueda ("reduje el tiempo de reporte un 40%").
- **Kickers en mayúsculas** para etiquetar secciones; el resto en estilo oración (sentence case).
- Español rioplatense, profesional y cercano.

---

## 11. Aplicación por sección de la página

| Sección | Idea visual |
|---------|-------------|
| **Hero** | Nombre enorme en Fraunces + rol en Inter + kicker mono. CTA primario violeta "Ver proyectos". |
| **Sobre mí** | Texto a 1 columna estrecha (68ch) + retrato a un lado. Mucho aire. |
| **Experiencia** | Timeline con reglas finas; cargo en Fraunces, empresa+fecha en Mono. |
| **Estudios** | Lista limpia con divisores; institución, título y año. |
| **Proyectos** | Grilla de tarjetas. Cada una: kicker `PROYECTO / 0X`, título serif, tags mono, enlace dorado. |
| **Contacto** | Bloque centrado, íconos de línea, email como enlace dorado, CTA "Descargar CV". |

---

## 12. Buenas prácticas

**Hacer ✅**
- Dejar respirar el contenido (espacio en blanco generoso).
- Usar el violeta con cuentagotas para que tenga impacto.
- Mantener máximo 2 pesos por familia tipográfica en pantalla.
- Reglas finas para estructurar, no cajas pesadas.

**No hacer ❌**
- Llenar la página de dorado o de varios colores.
- Mezclar más de 3 tipografías.
- Sombras grandes o degradados llamativos.
- Texto pequeño en violeta sobre fondo oscuro (baja legibilidad).

---

## 13. Referencia rápida de tokens

Todos los valores anteriores están listos para usar en
[`identidad/tokens.css`](tokens.css) — copiá ese archivo a la página y construimos sobre él.

```css
/* Color */   --bg --surface --surface-raised --border --border-strong
              --text --text-secondary --text-muted --text-on-accent
              --accent --accent-hover --accent-press --accent-soft --accent-line
/* Tipo */    --font-display(Fraunces) --font-sans(Inter) --font-mono(JetBrains Mono)
              --text-xs … --text-4xl
/* Espacio */ --space-1 … --space-10  /* 4 → 128px */
/* Radio */   --radius-sm/md/lg/pill
/* Motion */  --ease-out --dur-fast(150) --dur(300) --dur-slow(500)
```

---

*Próximo paso sugerido:* con el apellido (**Acuña**) y el acento violeta ya definidos,
arrancamos a maquetar el `hero` usando estos tokens.

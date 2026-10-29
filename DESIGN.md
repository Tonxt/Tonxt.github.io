---
name: Lisandro Acuña · Página personal
description: Corte transversal de una casa en pixel art lofi, de noche y con luz de lámpara; arriba el escritorio, abajo el sótano con los servidores.
colors:
  orange: "#f08a4b"
  sun: "#ffc477"
  glow: "#ffe2a8"
  lime: "#b9d97a"
  red: "#b8574a"
  red-text: "#8f3d2c"
  teal: "#4f7f7a"
  ink: "#221a26"
  wall: "#4b2e48"
  steel: "#3e2b3d"
  wood: "#8b5a3c"
  wood-dk: "#5e3a2e"
  paper: "#f5e6cc"
  paper-2: "#eed8b6"
  fog: "#c7a99b"
  slate: "#8a6b7a"
  text-2: "#5e4450"
  text-3: "#6e5260"
  text-inv-2: "#d9c3b4"
typography:
  display:
    fontFamily: "Pixelify Sans, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(46px, 5.4vw, 84px)"
    fontWeight: 700
    lineHeight: 0.95
  headline:
    fontFamily: "Pixelify Sans, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(36px, 4.4vw, 52px)"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Pixelify Sans, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1
  subtitle:
    fontFamily: "Pixelify Sans, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.15
  body-lg:
    fontFamily: "Pixelify Sans, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Pixelify Sans, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Pixelify Sans, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  none: "0px"
spacing:
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "24px"
  space-6: "32px"
  space-7: "48px"
  space-8: "64px"
  space-9: "96px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-ghost-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  nav-cta:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 14px"
  nav-cta-hover:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
  dialog:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "26px 28px 28px"
  speaker-plate:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    padding: "4px 12px"
  slot:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  slot-hover:
    backgroundColor: "{colors.glow}"
  slot-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  badge:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "2px 8px"
  badge-wip:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
  chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sun}"
    padding: "2px 8px"
  sheet-head:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sun}"
    padding: "8px 18px"
---

# Design System: Lisandro Acuña · Página personal

## Overview

**Creative North Star: "El cuarto de noche con luz de lámpara"**

La página es un corte transversal de una casa en pixel art: arriba el cuarto donde trabaja el personaje, abajo el sótano con los racks (el backend, "lo que no se ve"). Todo el sistema sale de ese cuarto: la paleta es la de una habitación de noche iluminada por una lámpara (tinta, pared ciruela, madera, ámbar), los paneles de lectura son papel, y las acciones son teclas naranjas que se hunden al apretarlas. La densidad es moderada y legible: el juego decora, nunca tapa el contenido.

El píxel manda en todo: una sola fuente pixel (Pixelify Sans) sin suavizado (`-webkit-font-smoothing: none`), canvas escalados con `image-rendering: pixelated`, íconos SVG con `shape-rendering: crispEdges`, bordes de 4px hechos con sombras sólidas que dejan las esquinas recortadas, y movimiento por pasos (`steps()`), nunca por curvas. No hay radios, no hay sombras difusas, no hay gradientes decorativos.

Las secciones siguen el corte de la casa: cada una se separa de la anterior con una viga de piso (madera con clavos de tinta), alternando papel, papel tostado y tinta, como pisos de una misma construcción.

**Key Characteristics:**
- Pixel art lofi cálido: tinta, ciruela, madera, naranja y ámbar sobre papel.
- Una sola tipografía pixel, sin antialiasing, en todos los roles.
- Bordes de 4px con esquinas recortadas; cero border-radius.
- Profundidad por bloques sólidos desplazados (base de tecla, sombra de texto a 4px), nunca por desenfoque.
- Movimiento en pasos discretos (80ms, `steps(1)`), escena a 12 fps, todo quieto con `prefers-reduced-motion`.
- Mecánicas de RPG como lenguaje de interfaz: caja de diálogo con placa de nombre, inventario de proyectos, ficha de personaje, medallas.

## Colors

Paleta cálida de cuarto nocturno: oscuros violáceos y madera como estructura, papel crema como superficie de lectura, y la luz de la lámpara (naranja y ámbar) como único foco de acción.

### Primary
- **Naranja Lámpara** (orange): el color de la acción. Botón principal, CTA de la nav, placa del hablante en el diálogo, monograma, punto de la bitácora, botón de volver arriba, anillo del slot elegido y outline de foco (`3px dashed`). También es el fondo del favicon.

### Secondary
- **Ámbar de Luz** (sun): la luz que pega en las cosas. Hover del CTA y de volver arriba, subtítulo del héroe sobre la escena, texto de chips y del encabezado de la ficha, link de email sobre tinta, etiquetas de las máquinas en la escena, selección de texto, moneda de las medallas.
- **Resplandor** (glow): hover de los slots del inventario y brillo de las medallas. Solo como superficie clara de estado.

### Tertiary
- **Lima LED** (lime): exclusivo de estado vivo o confirmado. Punto parpadeante de "abierto a oportunidades", badge "Terminado", feedback de email copiado. Es el LED de los racks; no se usa como decoración.
- **Teal** (teal) y **Ciruela** (wall) como cintas alternativas de medalla.

### Neutral
- **Tinta** (ink): el oscuro del mundo. Nav, héroe, sección de contacto, footer, borde pixel de todas las cajas, sombras de texto, chips, slot elegido. Texto principal sobre papel.
- **Papel** (paper): superficie de lectura. Fondo del body, cajas pixel, diálogo, slots, detalle de proyecto. Texto principal sobre tinta.
- **Papel Tostado** (paper-2): fondo de secciones alternas (Experiencia, Proyectos).
- **Pared Ciruela** (wall): la pared del cuarto; fondo del arte de los proyectos en el inventario y sombra del título del 404.
- **Madera** (wood) y **Madera Oscura** (wood-dk): vigas de piso entre secciones y base de la caja de diálogo.
- **Rojo Ladrillo** (red): base sólida (la "parte de abajo" de la tecla) de botones naranjas y cinta de medalla. No es color de texto.
- **Rojo para Texto** (red-text): versión AA del rojo para texto sobre papel: organización en la bitácora y links de proyecto.
- **Niebla** (fog): base del botón fantasma, líneas punteadas (ficha, línea de tiempo), etiqueta atenuada de la escena, nota del sótano.
- **Pizarra** (slate): bordes secundarios sobre tinta (selector de idioma, botón copiar, base del fantasma oscuro), scrollbar.
- **Acero** (steel): borde punteado del footer y del menú móvil.
- **Texto 2 / Texto 3** (text-2, text-3): secundario y terciario sobre papel (fechas, descripciones, metadatos).
- **Texto Inverso 2** (text-inv-2): secundario sobre tinta (links de la nav, leads en secciones oscuras, footer).

### Named Rules
**The Lamp Rule.** El naranja es la única voz de acción; el ámbar es luz y hover; el lima es solo estado vivo. Si algo naranja no se puede apretar ni es el foco, sobra.

**The Paper or Ink Rule.** Todo texto de lectura vive sobre papel (paper / paper-2) o sobre tinta, con los pares de texto AA del token (text / text-2 / text-3 sobre papel; paper / text-inv-2 sobre tinta). Sobre la escena solo va el héroe, y siempre con sombra sólida de tinta.

## Typography

**Display Font:** Pixelify Sans (con ui-monospace, Cascadia Mono, Consolas, monospace)
**Body Font:** Pixelify Sans (la misma)

**Character:** Una sola fuente pixel en todos los roles, cargada en pesos 400 a 700 y renderizada sin suavizado. La jerarquía sale del tamaño y del peso, no de cambiar de familia.

### Hierarchy
- **Display** (700, `clamp(46px, 5.4vw, 84px)`, 0.95): solo el nombre en el héroe, con sombra sólida de tinta a 4px. En móvil baja a 42px.
- **Headline** (700, `clamp(36px, 4.4vw, 52px)`, 1): títulos de sección, con `text-wrap: balance`.
- **Title** (700, 32px, 1): título del proyecto en el detalle del inventario.
- **Subtitle** (600, 26px, 1.15): rol en la bitácora y título de certificaciones.
- **Body grande** (400, 22px, 1.55): texto de "Sobre mí" (máx. 34em) y email de contacto.
- **Body** (400, 19px, 1.5): base del sitio; el diálogo sube a 20px con máximo 46ch; leads con máximo 60ch, descripciones con máximo 62ch.
- **Label** (600, 14px, 1.3): badges, chips, etiquetas de la escena. Los metadatos (fechas, emisor) van a 16px en peso 400.
- Los controles (botones, nav) usan 18px en peso 600; el subtítulo del héroe usa `clamp(19px, 1.95vw, 30px)` en 500 color ámbar.

### Named Rules
**The One Typeface Rule.** Pixelify Sans en todo, sin antialiasing. Nunca una segunda familia ni una fuente del sistema como display.

## Layout

Contenedor centrado de máximo 1180px (`--content-max`) con 32px de padding lateral (0 debajo de 900px). La grilla es de 4px: todos los espacios salen de 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Las secciones tienen 96px de padding vertical (64px en móvil).

La primera vista es la escena canvas a ancho completo; el canvas elige uno de tres encuadres según el ancho (ancho ≥1100px con texto sobre la escena, medio ≥640px, angosto) y escala píxeles enteros (3x a 5x). Desde 1099px para abajo el bloque del héroe (nombre y diálogo) sale de encima de la escena y pasa debajo. A 900px la nav se vuelve menú desplegable, las grillas de dos columnas (Sobre mí, inventario, detalle) colapsan a una, las medallas pasan a una columna y los slots del inventario a dos columnas. A 480px se esconde el segundo párrafo del diálogo.

Las composiciones son asimétricas: Sobre mí en 1.35fr / 1fr (texto + ficha), inventario en 300px de slots + detalle, detalle en arte + cuerpo. Nada de grillas de cards iguales salvo las tres medallas.

### Named Rules
**The Floor Beam Rule.** Cada sección que sigue a otra arranca con una viga de 12px: 8px de madera con clavos de tinta cada 56px y 4px de tinta abajo. Es el corte de la casa que sigue hacia el sótano; no se reemplaza por líneas o márgenes.

## Elevation & Depth

Sin sombras difusas. La profundidad se arma con bloques sólidos desplazados, como en un sprite: las teclas tienen una base de color más oscuro 8px abajo, la caja de diálogo apoya sobre una base de madera oscura, y los textos sobre la escena llevan una copia en tinta desplazada en diagonal. Los bordes también son `box-shadow` sólidos, para lograr la esquina recortada.

### Shadow Vocabulary
- **Borde pixel** (`--px-border`: 4px de tinta en los cuatro lados sin esquinas): borde de toda caja (ficha, medallas, slots, detalle, botones).
- **Borde pixel inverso** (misma forma en paper): botones dentro de secciones de tinta y en el 404.
- **Base de tecla** (`0 8px 0 0` red para naranja, fog para fantasma, slate para fantasma oscuro; `0 6px 0 0` en CTA de nav y volver arriba): lo que hace que un botón se vea apretable.
- **Base de diálogo** (`0 0 0 4px ink, 0 8px 0 0 wood-dk`): doble marco con apoyo de madera.
- **Anillo de etiqueta** (`0 0 0 3px ink`): badges, placa del hablante (4px), etiquetas de escena, punto de la bitácora.
- **Sombra de texto** (`4px 4px 0` ink en el nombre, 3px en el subtítulo, 2px en el estado): legibilidad sobre la escena.

### Named Rules
**The Notched Corner Rule.** Todo borde es de 4px hecho con sombras sólidas en los cuatro lados, de modo que las esquinas quedan recortadas. Ni `border-radius` ni `border` común para el marco de una caja.

**The Key Base Rule.** Lo que se aprieta descansa sobre una base sólida más oscura. Hover sube 4px; active baja 4px y pierde la base. Lo que no se aprieta no tiene base.

## Shapes

Rectángulos puros con esquinas recortadas por el borde pixel; radio cero en todo. Las líneas secundarias son punteadas a la manera pixel: separadores de 2px `dashed` fog en la ficha, línea de tiempo de 4px con trazos de 8px, borde superior del footer de 4px `dashed` steel. Los íconos (flecha externa, cursor de la nav, caret del diálogo, medallas, íconos de inventario) se dibujan en grillas de pocos píxeles y se renderizan con bordes nítidos.

## Components

### Buttons
Teclas físicas: sólidas, con base, que se hunden.
- **Shape:** sin radio (0px), borde pixel de 4px en tinta.
- **Primary:** fondo naranja, texto tinta, 18px peso 600, padding 10px 20px, base de 8px rojo ladrillo, ícono opcional a 18px con 10px de gap.
- **Hover / Active:** sube 4px en hover y baja 4px en active sin base, con `transition: transform 80ms steps(1)`. Foco: outline `3px dashed` naranja con 4px de offset.
- **Ghost:** fondo papel con base niebla. En secciones de tinta se invierte: fondo tinta, texto papel, borde papel y base pizarra; el primario conserva su naranja con borde papel.
- **CTA de nav:** versión compacta (padding 4px 14px, borde de 3px, base de 6px rojo); hover y activo pasan a ámbar.
- **Botones de herramienta** (idioma, copiar email): sin fondo, borde interno de 2px pizarra; hover a ámbar, estado copiado a lima.

### Chips
- **Style:** tecnologías del proyecto, tinta con texto ámbar a 14px, padding 2px 8px, sin borde.
- **Badges de estado:** lima ("Terminado", "Académico") o ámbar (en desarrollo), 14px peso 600, anillo de 3px tinta.

### Cards / Containers
- **Corner Style:** recortadas, sin radio.
- **Background:** papel, con borde pixel de tinta (`.px-box`).
- **Shadow Strategy:** solo el borde pixel; sin base (no se aprietan).
- **Internal Padding:** 18px en medallas, 26px 28px en el detalle de proyecto.
- **Ficha de personaje:** encabezado de tinta con texto ámbar, filas término/valor (96px + resto) separadas por línea punteada fog.

### Navigation
Barra fija de tinta de 56px. Monograma "LA" en cuadrado naranja de 32px más el nombre a 20px. Links a 18px en text-inv-2; hover y sección activa (scroll-spy) pasan a papel y muestran un cursor pixel naranja a la izquierda. En móvil (≤900px) tres barras de 4px abren un panel de tinta a ancho completo con links de 20px y borde inferior acero.

### Caja de diálogo RPG (firma)
Panel de papel con borde pixel, segundo marco de tinta y base de madera oscura; padding 26px 28px 28px. Placa de nombre naranja ("LISANDRO") montada sobre el borde superior a la izquierda, con anillo de tinta. Texto a 20px, máximo 46ch, y un caret pixel que rebota (`steps(2)`) al final. Las acciones van adentro, al pie.

### Inventario de proyectos (firma)
Tablist de slots a la izquierda (300px) y detalle a la derecha. Cada slot es una caja papel con ícono canvas de 8x8 escalado a 32px, nombre a 19px y subtítulo a 14px text-3. Hover: resplandor. Elegido: fondo tinta, texto papel y anillo naranja de 4px por fuera del borde. El detalle combina arte (captura real o viñeta canvas sobre pared ciruela, separada por borde de 4px tinta) y cuerpo con badge, título, descripción, chips y links en rojo para texto.

### Bitácora (firma)
Línea de tiempo: cuadrado naranja de 12px con anillo de tinta como hito, línea vertical punteada fog, columna de fecha de 180px (colapsa en móvil), rol a 26px y organización en rojo para texto.

### Escena canvas (firma)
Canvas de baja resolución escalado por enteros sin suavizado; el personaje, el gato y los racks se dibujan desde mapas de píxeles en scene.js. Animación a 12 fps que se pausa fuera de pantalla y con la pestaña oculta, y no corre con `prefers-reduced-motion`. Las etiquetas sobre las máquinas (JAVA, SPRING, PYTHON, SQLITE) son HTML: ámbar o niebla con anillo de 3px tinta, `aria-hidden`.

## Do's and Don'ts

### Do:
- **Do** enmarcar cada caja con el borde pixel de 4px (`--px-border`), invertido a papel sobre tinta.
- **Do** darle base sólida de 8px a todo lo apretable y hacerlo subir 4px en hover y bajar 4px en active, con `steps(1)` a 80ms.
- **Do** usar el naranja solo para acción y foco, el ámbar para luz y hover, y el lima solo para estado vivo.
- **Do** separar secciones consecutivas con la viga de piso y alternar papel, papel tostado y tinta.
- **Do** dibujar íconos y arte en grillas de pocos píxeles con `crispEdges` o `image-rendering: pixelated`, escalados por enteros.
- **Do** mantener el texto de lectura sobre papel o tinta con los pares AA del token, y usar `red-text` (no `red`) para texto rojo sobre papel.
- **Do** dejar la escena y las animaciones quietas con `prefers-reduced-motion`.

### Don't:
- **Don't** usar `border-radius`, sombras con desenfoque ni gradientes decorativos; las únicas franjas son la viga y las líneas punteadas.
- **Don't** sumar una segunda tipografía ni activar el suavizado de fuente.
- **Don't** animar con curvas de easing; el movimiento es por pasos.
- **Don't** esconder contenido detrás de mecánicas de juego: el inventario, el diálogo y la ficha son lectura directa, sin desbloqueos.
- **Don't** usar el lima ni el naranja como decoración de fondo.

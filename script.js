// ─── Traducciones ───────────────────────────────────────────────────────────
const t = {
  es: {
    "nav.about":    "Sobre mí",
    "nav.exp":      "Experiencia",
    "nav.edu":      "Estudios",
    "nav.projects": "Proyectos",
    "nav.contact":  "Contacto",

    "hero.desc":         "¡Hola! Estudio Ingeniería Informática en UADE y aprendo backend con Java, Python y SQL.",
    "hero.desc2":        "Me atrapa lo que no se ve: cómo un sistema recibe un pedido, lo procesa y guarda la información.",
    "hero.basement":     "SÓTANO · lo que no se ve",
    "hero.scene":        "Lisandro en pixel art, trabajando en su escritorio con un café y un gato durmiendo al lado; debajo del piso, el sótano con los servidores",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.cv":       "Descargar CV",
    "hero.status":       "Abierto a oportunidades trainee · junior",

    "about.title":  "Curiosidad con método",
    "about.body":   "Soy Lisandro, estudiante de primer año de Ingeniería Informática en la UADE. Lo que más me atrapa es lo que no se ve: cómo un sistema recibe un pedido, lo procesa y guarda la información. Hoy estoy aprendiendo backend con Java y Python sobre bases de datos SQL, y en el horizonte tengo la inteligencia artificial y el machine learning. Cada proyecto que encaro es una excusa para aprender algo nuevo.",

    "sheet.title":   "Ficha del personaje",
    "sheet.class":   "Clase",
    "sheet.base":    "Base",
    "sheet.study":   "Estudios",
    "sheet.study.v": "Ing. Informática · UADE",
    "sheet.gear":    "Equipo",
    "sheet.quest":   "Busca",
    "sheet.quest.v": "Primer puesto trainee o junior",

    "exp.title":       "Aprender haciendo",
    "exp.item1.date":  "2026 — Actual",
    "exp.item1.role":  "Proyectos personales de backend y datos",
    "exp.item1.org":   "Independiente",
    "exp.item1.desc":  "Diseño y dirección de SimpleStock, un sistema de caja y stock para kioscos (Java, Spring Boot, SQLite, React) con un piloto real, y desarrollo de punta a punta de dos proyectos de datos en Python y SQL: un análisis y un pipeline automatizado que consume una API.",
    "exp.item2.role":  "Competencia de programación en Python",
    "exp.item2.desc":  "Desarrollo de proyectos en equipo y contra reloj: resolución de problemas, lógica y colaboración sobre código real.",

    "edu.title":            "Formación",
    "edu.item1.date":       "2026 — En curso",
    "edu.item1.role":       "Ingeniería Informática",
    "edu.item1.desc":       "Primer año. Foco personal en backend, bases de datos y programación.",
    "edu.certs.title":      "Certificaciones",
    "edu.certs.python.name":   "Introducción a la programación con Python",
    "edu.certs.python.serial": "N° de serie: OA-2026-0222002281478",
    "edu.certs.d1":         "Mar. 2026",
    "edu.certs.d2":         "Feb. 2026",

    "proj.title":     "Cosas que construí",
    "proj.lead":      "Proyectos personales y académicos. El código vive en GitHub, salvo SimpleStock, que es privado.",
    "proj.github":    "Ver en GitHub",
    "proj.p0.badge":  "En desarrollo · v0.5",
    "proj.p0.alt":    "Pantalla de caja de SimpleStock con una venta de cuatro productos en curso",
    "proj.p0.link":   "Ver el sitio del producto",
    "proj.p0.desc":   "Sistema de caja y stock para kioscos y almacenes, pensado como producto comercial: se instala en la PC del comercio y se usa desde el navegador, también desde otras cajas de la red local. Lo diseñé y lo dirijo yo, usando IA como herramienta de implementación. Decisiones de diseño: dinero en centavos enteros, importes calculados siempre en el servidor, ventas idempotentes, nada se edita ni se borra y auditoría con hash encadenado. Backend en capas con una prueba que vigila las dependencias, más de 900 pruebas automatizadas y un kiosco piloto real. Código privado, disponible para mostrar en entrevista.",
    "proj.p1.badge":  "Terminado",
    "proj.p1.title":  "Análisis de e-commerce · Olist",
    "proj.p1.desc":   "Análisis exploratorio de más de 99.000 órdenes del e-commerce brasileño Olist (2016–2018): evolución de ingresos, categorías más vendidas y distribución regional de las ventas.",
    "proj.p2.badge":  "Terminado",
    "proj.p2.desc":   "Pipeline automatizado que consume una API REST pública, guarda en SQLite el histórico de 7 cotizaciones del dólar en Argentina (oficial, blue, MEP, CCL, cripto, mayorista y tarjeta) y lo sirve en un dashboard interactivo desplegado en la nube.",
    "proj.p2.demo":   "Ver dashboard",
    "proj.p2.alt":    "Dashboard del Dólar Tracker con las siete cotizaciones del día y el gráfico de evolución",
    "proj.p3.badge":  "Académico",
    "proj.p3.title":  "Competencia Python · UADE",
    "proj.p3.short":  "Competencia UADE",
    "proj.p3.desc":   "Proyecto desarrollado en equipo durante la competencia de programación de la universidad.",

    "contact.title":     "Hablemos",
    "contact.lead":      "¿Tenés una oportunidad trainee o junior en desarrollo backend? Me encantaría escucharla.",
    "contact.btn.email": "Escribime",
  },

  en: {
    "nav.about":    "About me",
    "nav.exp":      "Experience",
    "nav.edu":      "Education",
    "nav.projects": "Projects",
    "nav.contact":  "Contact",

    "hero.desc":         "Hi! I study Computer Engineering at UADE and I'm learning backend with Java, Python and SQL.",
    "hero.desc2":        "What draws me in is what you don't see: how a system receives a request, processes it and stores the data.",
    "hero.basement":     "BASEMENT · what you don't see",
    "hero.scene":        "Lisandro in pixel art, working at his desk with a coffee and a cat sleeping next to him; below the floor, the basement with the servers",
    "hero.cta.projects": "View projects",
    "hero.cta.cv":       "Download CV",
    "hero.status":       "Open to trainee · junior opportunities",

    "about.title":  "Curiosity with method",
    "about.body":   "I'm Lisandro, a first-year Computer Engineering student at UADE. What draws me most is what you don't see: how a system receives a request, processes it, and stores the data. I'm currently learning backend development with Java and Python on top of SQL databases, and artificial intelligence and machine learning are next on my horizon. Every project I take on is an excuse to learn something new.",

    "sheet.title":   "Character sheet",
    "sheet.class":   "Class",
    "sheet.base":    "Base",
    "sheet.study":   "Studies",
    "sheet.study.v": "Computer Eng. · UADE",
    "sheet.gear":    "Gear",
    "sheet.quest":   "Seeking",
    "sheet.quest.v": "First trainee or junior role",

    "exp.title":       "Learning by doing",
    "exp.item1.date":  "2026 — Present",
    "exp.item1.role":  "Personal backend and data projects",
    "exp.item1.org":   "Independent",
    "exp.item1.desc":  "Design and direction of SimpleStock, a point-of-sale and inventory system for convenience stores (Java, Spring Boot, SQLite, React) with a real pilot, plus end-to-end development of two data projects in Python and SQL: an analysis and an automated pipeline that consumes an API.",
    "exp.item2.role":  "Python Programming Competition",
    "exp.item2.desc":  "Team-based project development under time constraints: problem solving, logic, and real-code collaboration.",

    "edu.title":            "Education",
    "edu.item1.date":       "2026 — In progress",
    "edu.item1.role":       "Computer Engineering",
    "edu.item1.desc":       "First year. Personal focus on backend, databases, and programming.",
    "edu.certs.title":      "Certifications",
    "edu.certs.python.name":   "Introduction to Python Programming",
    "edu.certs.python.serial": "Serial No.: OA-2026-0222002281478",
    "edu.certs.d1":         "Mar. 2026",
    "edu.certs.d2":         "Feb. 2026",

    "proj.title":     "Things I built",
    "proj.lead":      "Personal and academic projects. Code lives on GitHub, except SimpleStock, which is private.",
    "proj.github":    "View on GitHub",
    "proj.p0.badge":  "In development · v0.5",
    "proj.p0.alt":    "SimpleStock checkout screen with a four-item sale in progress",
    "proj.p0.link":   "See the product site",
    "proj.p0.desc":   "Point-of-sale and inventory system for convenience stores, built as a commercial product: it installs on the shop's PC and runs in the browser, including from other registers on the local network. I designed and direct it, using AI as an implementation tool. Design decisions: money as integer cents, amounts always computed on the server, idempotent sales, nothing is edited or deleted, and a hash-chained audit log. Layered backend with a test that enforces dependencies, 900+ automated tests and a real pilot shop. Private code, available to show in an interview.",
    "proj.p1.badge":  "Done",
    "proj.p1.title":  "E-Commerce Analysis · Olist",
    "proj.p1.desc":   "Exploratory analysis of 99,000+ orders from Brazilian e-commerce platform Olist (2016–2018): revenue trends, top-selling categories, and regional sales distribution.",
    "proj.p2.badge":  "Done",
    "proj.p2.desc":   "Automated pipeline that consumes a public REST API, stores the history of 7 USD exchange rates in Argentina (official, blue, MEP, CCL, crypto, wholesale, and card) in SQLite, and serves it through an interactive dashboard deployed to the cloud.",
    "proj.p2.demo":   "View dashboard",
    "proj.p2.alt":    "Dólar Tracker dashboard with the seven daily exchange rates and the trend chart",
    "proj.p3.badge":  "Academic",
    "proj.p3.title":  "Python Competition · UADE",
    "proj.p3.short":  "UADE Competition",
    "proj.p3.desc":   "Team project developed during the university programming competition.",

    "contact.title":     "Let's talk",
    "contact.lead":      "Do you have a trainee or junior opportunity in backend development? I'd love to hear about it.",
    "contact.btn.email": "Write to me",
  }
};

// ─── Motor de i18n ───────────────────────────────────────────────────────────
let currentLang = "es";
try { currentLang = localStorage.getItem("lang") || "es"; } catch (e) { /* sin storage */ }

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[lang][key] !== undefined) el.textContent = t[lang][key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (t[lang][key] !== undefined) el.alt = t[lang][key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (t[lang][key] !== undefined) el.setAttribute("aria-label", t[lang][key]);
  });

  document.documentElement.lang = lang;
  document.title = "Lisandro Acuña — Backend Developer Trainee";

  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";

  const cvLink = document.getElementById("cv-link");
  if (cvLink) cvLink.href = "assets/cv-lisandro-acuna-" + lang + ".pdf";

  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) { /* sin storage */ }
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

document.addEventListener("DOMContentLoaded", () => {
  // Toggle de idioma
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }
  applyLang(currentLang);

  // Menú mobile (hamburguesa)
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("primary-nav");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Cerrar el menú al tocar un enlace de navegación
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Inventario de proyectos (pestañas accesibles)
  const tabs = Array.from(document.querySelectorAll('#inv [role="tab"]'));
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (keys[e.key]) { e.preventDefault(); select(tabs[(i + keys[e.key] + tabs.length) % tabs.length], true); }
      if (e.key === "Home") { e.preventDefault(); select(tabs[0], true); }
      if (e.key === "End") { e.preventDefault(); select(tabs[tabs.length - 1], true); }
    });
  });
  if (tabs.length) select(tabs[0]);

  // Scroll-spy: resaltar en el navbar el enlace de la sección visible
  const navMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
    navMap[a.getAttribute("href").slice(1)] = a;
  });
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          Object.values(navMap).forEach((a) => a.classList.remove("active"));
          if (navMap[e.target.id]) navMap[e.target.id].classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  // Copiar email al portapapeles con feedback
  const copyBtn = document.getElementById("copy-email");
  const copyFeedback = document.getElementById("copy-feedback");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("lisandrow29@gmail.com");
        copyBtn.classList.add("copied");
        if (copyFeedback) copyFeedback.textContent = currentLang === "es" ? "¡Copiado!" : "Copied!";
        setTimeout(() => {
          copyBtn.classList.remove("copied");
          if (copyFeedback) copyFeedback.textContent = "";
        }, 2000);
      } catch (err) {
        /* Clipboard no disponible */
      }
    });
  }

  // Botón volver arriba
  const toTop = document.getElementById("to-top");
  if (toTop) {
    window.addEventListener(
      "scroll",
      () => { toTop.classList.toggle("visible", window.scrollY > 600); },
      { passive: true }
    );
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});

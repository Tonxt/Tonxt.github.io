<<<<<<< HEAD
/* Animación de entrada de secciones: fade + slide-up sutil al entrar en viewport. El estado inicial oculto
solo se aplica vía CSS bajo prefers-reduced-motion: no-preference, así el contenido nunca queda invisible 
si el JS falla o el usuario pide menos movimiento.
*/
=======
// ─── Traducciones ───────────────────────────────────────────────────────────
const t = {
  es: {
    "nav.about":    "Sobre mí",
    "nav.exp":      "Experiencia",
    "nav.edu":      "Estudios",
    "nav.projects": "Proyectos",
    "nav.contact":  "Contacto",

    "hero.desc":         "Estudiante de Ingeniería Informática apasionado por los datos: los analizo, escribo consultas SQL y construyo dashboards que convierten información cruda en decisiones. Aprendo rápido, documento mejor, y busco mi primera oportunidad como analista de datos, con la mira puesta en crecer hacia la ingeniería de datos.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.cv":       "Descargar CV",
    "hero.status":       "Abierto a oportunidades trainee · junior",

    "about.kicker": "Sobre mí / 01",
    "about.title":  "Curiosidad con método.",
    "about.body":   "Soy Lisandro, estudiante de primer año de Ingeniería Informática en la UADE. Lo que más me atrapa del mundo de los datos es la estadística: esa mezcla de números y preguntas que explica por qué pasan las cosas. Hoy estoy construyendo mis bases con SQL, Python, Excel y Power BI, y cada proyecto que encaro es una excusa para aprender algo nuevo.",

    "exp.kicker":      "Experiencia / 02",
    "exp.title":       "Aprender haciendo.",
    "exp.item1.date":  "2026 — Actual",
    "exp.item1.role":  "Proyectos personales de datos",
    "exp.item1.org":   "Independiente",
    "exp.item1.desc":  "Diseño y desarrollo de dos proyectos propios de punta a punta — uno publicado y otro en curso — aplicando Python, Pandas y visualización de datos.",
    "exp.item2.role":  "Competencia de programación en Python",
    "exp.item2.desc":  "Desarrollo de proyectos en equipo y contra reloj: resolución de problemas, lógica y colaboración sobre código real.",

    "edu.kicker":           "Estudios / 03",
    "edu.title":            "Formación.",
    "edu.item1.date":       "2026 — En curso",
    "edu.item1.role":       "Ingeniería Informática",
    "edu.item1.desc":       "Primer año. Foco personal en datos, estadística y programación.",
    "edu.certs.title":      "Certificaciones",
    "edu.certs.python.name":   "Introducción a la programación con Python",
    "edu.certs.python.serial": "N° de serie: OA-2026-0222002281478",

    "proj.kicker":    "Proyectos / 04",
    "proj.title":     "Cosas que construí.",
    "proj.lead":      "Proyectos personales y académicos. El código vive en GitHub.",
    "proj.github":    "Ver en GitHub →",
    "proj.p1.kicker": "Proyecto / 01",
    "proj.p1.badge":  "Terminado",
    "proj.p1.title":  "Análisis de e-commerce · Olist",
    "proj.p1.desc":   "Análisis exploratorio de más de 99.000 órdenes del e-commerce brasileño Olist (2016–2018): evolución de ingresos, categorías más vendidas y distribución regional de las ventas.",
    "proj.p2.kicker": "Proyecto / 02",
    "proj.p2.badge":  "En curso",
    "proj.p2.desc":   "Herramienta en Python para el seguimiento de la cotización del dólar en Argentina. En desarrollo activo.",
    "proj.p3.kicker": "Proyecto / 03",
    "proj.p3.badge":  "Académico",
    "proj.p3.title":  "Competencia Python · UADE",
    "proj.p3.desc":   "Proyecto desarrollado en equipo durante la competencia de programación de la universidad.",

    "contact.kicker":    "Contacto / 05",
    "contact.title":     "Hablemos.",
    "contact.lead":      "¿Tenés una oportunidad trainee o junior en datos? Me encantaría escucharla.",
    "contact.btn.email": "Escribime",
  },

  en: {
    "nav.about":    "About me",
    "nav.exp":      "Experience",
    "nav.edu":      "Education",
    "nav.projects": "Projects",
    "nav.contact":  "Contact",

    "hero.desc":         "Computer Engineering student passionate about data: I analyze it, write SQL queries, and build dashboards that turn raw information into decisions. I learn fast, document well, and I'm looking for my first opportunity as a data analyst, with my sights set on growing toward data engineering.",
    "hero.cta.projects": "View projects",
    "hero.cta.cv":       "Download CV",
    "hero.status":       "Open to trainee · junior opportunities",

    "about.kicker": "About me / 01",
    "about.title":  "Curiosity with method.",
    "about.body":   "I'm Lisandro, a first-year Computer Engineering student at UADE. What draws me most to the world of data is statistics: that blend of numbers and questions that explains why things happen. I'm currently building my foundations with SQL, Python, Excel, and Power BI — and every project I take on is an excuse to learn something new.",

    "exp.kicker":      "Experience / 02",
    "exp.title":       "Learning by doing.",
    "exp.item1.date":  "2026 — Present",
    "exp.item1.role":  "Personal data projects",
    "exp.item1.org":   "Independent",
    "exp.item1.desc":  "End-to-end design and development of two personal projects — one published and one in progress — applying Python, Pandas, and data visualization.",
    "exp.item2.role":  "Python Programming Competition",
    "exp.item2.desc":  "Team-based project development under time constraints: problem solving, logic, and real-code collaboration.",

    "edu.kicker":           "Education / 03",
    "edu.title":            "Education.",
    "edu.item1.date":       "2026 — In progress",
    "edu.item1.role":       "Computer Engineering",
    "edu.item1.desc":       "First year. Personal focus on data, statistics, and programming.",
    "edu.certs.title":      "Certifications",
    "edu.certs.python.name":   "Introduction to Python Programming",
    "edu.certs.python.serial": "Serial No.: OA-2026-0222002281478",

    "proj.kicker":    "Projects / 04",
    "proj.title":     "Things I built.",
    "proj.lead":      "Personal and academic projects. Code lives on GitHub.",
    "proj.github":    "View on GitHub →",
    "proj.p1.kicker": "Project / 01",
    "proj.p1.badge":  "Done",
    "proj.p1.title":  "E-Commerce Analysis · Olist",
    "proj.p1.desc":   "Exploratory analysis of 99,000+ orders from Brazilian e-commerce platform Olist (2016–2018): revenue trends, top-selling categories, and regional sales distribution.",
    "proj.p2.kicker": "Project / 02",
    "proj.p2.badge":  "In progress",
    "proj.p2.desc":   "Python tool for tracking the USD exchange rate in Argentina. Actively in development.",
    "proj.p3.kicker": "Project / 03",
    "proj.p3.badge":  "Academic",
    "proj.p3.title":  "Python Competition · UADE",
    "proj.p3.desc":   "Team project developed during the university programming competition.",

    "contact.kicker":    "Contact / 05",
    "contact.title":     "Let's talk.",
    "contact.lead":      "Do you have a trainee or junior opportunity in data? I'd love to hear about it.",
    "contact.btn.email": "Write to me",
  }
};

// ─── Motor de i18n ───────────────────────────────────────────────────────────
let currentLang = localStorage.getItem("lang") || "es";

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[lang][key] !== undefined) el.textContent = t[lang][key];
  });

  document.documentElement.lang = lang;
  document.title = "Lisandro Acuña — Data Analyst Trainee";

  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

// ─── Animación de entrada ────────────────────────────────────────────────────
>>>>>>> 05153e759f4dab4bcee2318f9ae845a80bfe0c92
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 }
);

document.addEventListener("DOMContentLoaded", () => {
  // Toggle de idioma
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }

  // Aplicar idioma guardado
  applyLang(currentLang);

  // Animaciones de entrada
  document.querySelectorAll(".hero-inner, .section .container").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});

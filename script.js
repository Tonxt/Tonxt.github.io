/* Animación de entrada de secciones: fade + slide-up sutil al entrar en viewport. El estado inicial oculto
solo se aplica vía CSS bajo prefers-reduced-motion: no-preference, así el contenido nunca queda invisible 
si el JS falla o el usuario pide menos movimiento.
*/
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.hero-inner, .section .container').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

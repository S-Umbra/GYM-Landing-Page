 // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        e.target.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.testimonio, .plan, .stat-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });

  // Elegir plan → scroll a contacto y preseleccionar
  function elegirPlan(nombre) {
    const select = document.getElementById('plan');
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.startsWith(nombre)) {
        select.selectedIndex = i; break;
      }
    }
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  }

  // Enviar formulario
  function enviarFormulario(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.textContent = 'Enviando…';
    btn.disabled = true;

    setTimeout(() => {
      document.getElementById('contactForm').reset();
      btn.textContent = 'Quiero mi semana gratis →';
      btn.disabled = false;

      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }, 1200);
  }

  // Navbar shrink on scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.padding = window.scrollY > 60 ? '0.8rem 4rem' : '1.2rem 4rem';
  });
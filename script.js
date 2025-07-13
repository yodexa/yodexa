document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle mobile nav
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close nav on link click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Form submit
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    contactForm.reset();
  });

  // Animate on scroll
  const fadeElements = document.querySelectorAll('.animate-fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 1.5s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
});

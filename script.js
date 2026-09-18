const logoImage = document.querySelector('.logo img');
const favicon = document.querySelector('#brand-favicon');

if (logoImage && favicon) {
  favicon.href = logoImage.src;
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const updateBackToTop = () => {
    const visible = window.scrollY > 400;
    backToTop.classList.toggle('is-visible', visible);
    backToTop.toggleAttribute('inert', !visible);
    backToTop.setAttribute('aria-hidden', String(!visible));
  };

  window.addEventListener('scroll', updateBackToTop, { passive: true });
  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
  updateBackToTop();
}

if (!reducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

const portfolioCard = document.querySelector('.portfolio-feature');
const portfolioViewer = document.querySelector('.portfolio-viewer');

if (portfolioCard && portfolioViewer) {
  const closeViewer = portfolioViewer.querySelector('.portfolio-viewer-close');

  portfolioCard.addEventListener('click', () => {
    portfolioViewer.showModal();
    const content = portfolioViewer.querySelector('.portfolio-local-content');
    if (content) content.scrollTop = 0;
  });

  closeViewer.addEventListener('click', () => portfolioViewer.close());

  portfolioViewer.addEventListener('click', (event) => {
    if (event.target === portfolioViewer) portfolioViewer.close();
  });
}

const catalogCard = document.querySelector('.catalog-card');
const catalogViewer = document.querySelector('.catalog-viewer');

if (catalogCard && catalogViewer) {
  const closeCatalogViewer = catalogViewer.querySelector('.catalog-viewer-close');

  catalogCard.addEventListener('click', () => {
    catalogViewer.showModal();
    const content = catalogViewer.querySelector('.portfolio-local-content');
    if (content) content.scrollTop = 0;
  });

  closeCatalogViewer.addEventListener('click', () => catalogViewer.close());

  catalogViewer.addEventListener('click', (event) => {
    if (event.target === catalogViewer) catalogViewer.close();
  });
}

const heroSlider = document.querySelector('.hero-slider');

if (heroSlider) {
  const slides = [...heroSlider.querySelectorAll('[data-hero-slide]')];
  const dots = [...heroSlider.querySelectorAll('[data-hero-dot]')];
  let activeSlide = 0;
  let sliderTimer;

  const showSlide = (nextIndex) => {
    if (nextIndex === activeSlide || !slides[nextIndex]) return;

    const previousSlide = slides[activeSlide];
    const nextSlide = slides[nextIndex];

    previousSlide.classList.remove('is-active');
    previousSlide.classList.add('is-previous');
    previousSlide.setAttribute('aria-hidden', 'true');
    nextSlide.classList.remove('is-previous');
    nextSlide.classList.add('is-active');
    nextSlide.setAttribute('aria-hidden', 'false');

    dots.forEach((dot, index) => {
      const isCurrent = index === nextIndex;
      dot.classList.toggle('is-active', isCurrent);
      dot.setAttribute('aria-current', String(isCurrent));
    });

    window.setTimeout(() => previousSlide.classList.remove('is-previous'), 850);
    activeSlide = nextIndex;
  };

  const startSlider = () => {
    window.clearInterval(sliderTimer);
    sliderTimer = window.setInterval(() => {
      showSlide((activeSlide + 1) % slides.length);
    }, 5500);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startSlider();
    });
  });

  heroSlider.addEventListener('mouseenter', () => window.clearInterval(sliderTimer));
  heroSlider.addEventListener('mouseleave', startSlider);
  heroSlider.addEventListener('focusin', () => window.clearInterval(sliderTimer));
  heroSlider.addEventListener('focusout', startSlider);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) window.clearInterval(sliderTimer);
    else startSlider();
  });

  if (slides.length > 1) startSlider();
}

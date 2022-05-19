const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Animation when scrolling
const demosItems = $$('.demos-item');
const header = $('.header');
const ecommerceBg = $('.ecommerce .bg');
const ecommerceFrontBg = $('.ecommerce .front-bg');
const percent = $('.percent');

// Scroll on top button
const scrollOnTopBtn = $('.scroll-on-top');

function listenScroll() {
  const elementVisible = 150;
  const windowHeight = window.innerHeight;

  // Demos items
  for (var i = 0; i < demosItems.length; i++) {
    const demoTop = demosItems[i].getBoundingClientRect().top;
    if (demoTop < windowHeight - elementVisible) {
      demosItems[i].classList.add('active');
    } else {
      demosItems[i].classList.remove('active');
    }
  }

  // Header
  if (window.scrollY > 300) {
    header.classList.add('fixed');
    scrollOnTopBtn.classList.add('active');
  } else {
    header.classList.remove('fixed');
    scrollOnTopBtn.classList.remove('active');
  }

  // Ecommerce background
  const bgTop = ecommerceBg.getBoundingClientRect().top;
  const frontBgTop = ecommerceFrontBg.getBoundingClientRect().top;
  if (bgTop < windowHeight - elementVisible) {
    ecommerceBg.classList.add('active');
  } else {
    ecommerceBg.classList.remove('active');
  }
  if (frontBgTop < windowHeight - elementVisible) {
    ecommerceFrontBg.classList.add('active');
  } else {
    ecommerceFrontBg.classList.remove('active');
  }
}

window.addEventListener('scroll', listenScroll);
listenScroll(); // When refresh page

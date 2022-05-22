const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Animation when scrolling
const demosItems = $$('.demos-item');
const header = $('.header');
const ecommerceBg = $('.ecommerce .bg');
const ecommerceFrontBg = $('.ecommerce .front-bg');
const supports = $$('.author-support__item');
const loadSpeedContent = $('.load-speed__content');

// Scroll on top button
const scrollOnTopBtn = $('.scroll-on-top');

function listenScroll() {
  const elementVisible = 150;
  const windowHeight = window.innerHeight;

  // Demos items
  for (let i = 0; i < demosItems.length; i++) {
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

  // Author suppport section
  for (let i = 0; i < supports.length; i++) {
    const spTop = supports[i].getBoundingClientRect().top;
    if (spTop < windowHeight - elementVisible) {
      supports[i].classList.add('active');
    } else {
      supports[i].classList.remove('active');
    }
  }

  // Load speed's content
  const loadSpeedContentTop = loadSpeedContent.getBoundingClientRect().top;
  if (loadSpeedContentTop < windowHeight - elementVisible) {
    loadSpeedContent.classList.add('active');
  } else {
    loadSpeedContent.classList.remove('active');
  }
}

window.addEventListener('scroll', listenScroll);
listenScroll(); // When refresh page

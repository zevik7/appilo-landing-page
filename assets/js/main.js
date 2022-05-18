const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Navigation responsive
const navToggle = document.querySelector('.mobile-btn');
const navBox = document.querySelector('.nav-box');
const navBack = document.querySelector('.nav-box__responsive-background');

// Events for nav responsive
navToggle.onclick = () => {
  navBox.className = 'nav-box responsive';
};
navBack.onclick = () => {
  navBox.className = 'nav-box';
};

// Animation when scrolling
const demosItems = $$('.demos-item');
const header = $('.header');
const bg = $('.ecommerce .active');
const frontBg = $('.ecommerce .front-bg');

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
  } else {
    header.classList.remove('fixed');
  }

  // Background
  const bgTop = bg.getBoundingClientRect().top;
  const frontBgTop = bg.getBoundingClientRect().top;
  if (bgTop < windowHeight - elementVisible) {
    bg.classList.add('active');
  } else {
    bg.classList.remove('active');
  }
  if (frontBgTop < windowHeight - elementVisible) {
    frontBg.classList.add('active');
  } else {
    frontBg.classList.remove('active');
  }
}

window.addEventListener('scroll', listenScroll);
listenScroll(); // When refresh page

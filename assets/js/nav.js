const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Navigation responsive
const navToggle = $('.mobile-btn');
const navBox = $('.nav-box');
const navBack = $('.nav-box__responsive-background');

// Events for nav responsive
navToggle.onclick = () => {
  navBox.className = 'nav-box responsive';
};
navBack.onclick = () => {
  navBox.className = 'nav-box';
};
// Navigation responsive
const navToggle = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const navBack = document.querySelector('.nav-back')

navToggle.onclick = () => {
  nav.className = 'nav responsive'
  navBack.className = 'nav-back active'
}
navBack.onclick = () => {
  nav.className = 'nav'
  navBack.className = 'nav-back'
}
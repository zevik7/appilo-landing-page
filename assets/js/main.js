// Navigation responsive
const navToggle = document.querySelector('.mobile-btn')
const navBox = document.querySelector('.nav-box')
const navBack = document.querySelector('.nav-box__responsive-background')

navToggle.onclick = () => {
  navBox.className = 'nav-box responsive'
}
navBack.onclick = () => {
  navBox.className = 'nav-box'
}
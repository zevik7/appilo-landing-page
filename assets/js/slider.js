const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let slides = document.getElementsByClassName('slider__item');
const lefBtn = $('.slider-control__left');
const rightBtn = $('.slider-control__right');

let currentSlide = 1;

showSlides(currentSlide);

lefBtn.onclick = () => {
  plusSlides(-1);
};
rightBtn.onclick = () => {
  plusSlides(1);
};

// Next/previous controls
function plusSlides(n) {
  showSlides((currentSlide += n));
}

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].classList.remove('first-thumb');
    slides[i].classList.remove('second-thumb');
  }

  let firstThumb = currentSlide - 1; // Default
  let secondThumb = currentSlide + 1;

  if (n === 1) {
    firstThumb = slides.length;
    secondThumb = currentSlide + 1;
  }

  if (n === slides.length) {
    firstThumb = currentSlide - 1;
    secondThumb = 1;
  }

  if (n > slides.length) {
    currentSlide = 1;
    firstThumb = slides.length;
    secondThumb = currentSlide + 1;
  }

  if (n < 1) {
    currentSlide = slides.length;
    firstThumb = currentSlide - 1;
    secondThumb = 1;
  }

  slides[currentSlide - 1].classList.add('active');
  slides[firstThumb - 1].classList.add('first-thumb');
  slides[secondThumb - 1].classList.add('second-thumb');
}

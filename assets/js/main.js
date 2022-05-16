const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Navigation responsive
const navToggle = document.querySelector(".mobile-btn");
const navBox = document.querySelector(".nav-box");
const navBack = document.querySelector(".nav-box__responsive-background");

navToggle.onclick = () => {
	navBox.className = "nav-box responsive";
};
navBack.onclick = () => {
	navBox.className = "nav-box";
};

// Animation when scrolling
const demosItems = $$(".demos-item");

function listenScroll() {
	for (var i = 0; i < demosItems.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = demosItems[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			demosItems[i].classList.add("active");
		} else {
			demosItems[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", listenScroll);
listenScroll();

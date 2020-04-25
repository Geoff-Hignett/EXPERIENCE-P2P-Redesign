// hamburger
const hamburger = document.querySelector('.navbar__toggle-label');
const heroContent = document.querySelector('.hero__content');
let hamburgerOpen = false;
let heroContentDown = false;

hamburger.addEventListener('click', () => {
	if (!hamburgerOpen) {
		hamburger.classList.add('open');
		heroContent.classList.add('open');
		hamburgerOpen = true;
		heroContentDown = true;
	} else {
		hamburger.classList.remove('open');
		heroContent.classList.remove('open');
		hamburgerOpen = false;
		heroContentDown = false;
	}
});

const hamburger = document.querySelector('.navbar__toggle-label');
let hamburgerOpen = false;

hamburger.addEventListener('click', () => {
	if(!hamburgerOpen){
		hamburger.classList.add('open');
		hamburgerOpen = true;
	} else {
		hamburger.classList.remove('open');
		hamburgerOpen = false;
	}
});

// faqs accordion__button
const accordions = document.querySelectorAll('.accordion__button');
for(let i = 0; i < accordions.length; i++) {
	accordions[i].onclick = function() {
		this.classList.toggle('is-open');
		const content = this.nextElementSibling;
		content.style.maxHeight ?
		content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
	}
}

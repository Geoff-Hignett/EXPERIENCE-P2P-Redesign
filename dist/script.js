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

// slick slider
$('.our-reviews__reviews').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 4005,
  responsive: [
  {
	breakpoint: 768,
	settings: {
		slidesToShow: 1
	}
  },
]
});

// stats counter
const statsCount = document.querySelector('.in-numbers');

const config = {
  threshold: 0.75
};

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp();
    }
  });
}, config);

if(statsCount){
	observer.observe(statsCount);
}

function countUp() {

	$counters = $('.count-up');

	$counters.each((index, el) => {
		let $counter, countTo, time;

		$counter = $(el);

		// If has not fired and on screen
		if (!$counter.hasClass('count-done')) {
			$counter.html("0");

			countTo = $counter.attr('data-to');
			time = parseInt($counter.attr('data-time'));

			$({
				countNum: "0"
			}).animate({
				countNum: countTo
			}, {
				duration: time,
				easing: 'linear',
				step: function() {
					$counter.text(new Number(this.countNum).toLocaleString('en-GB', {
						maximumFractionDigits: 0
					}));
				},
				complete: function() {
					$counter.text(new Number(this.countNum).toLocaleString('en-GB', {
						maximumFractionDigits: 0
					}));
				}

			});
			$counter.addClass('count-done');
		}
	})
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsIm5hdmJhci5qcyIsInNsaWNrLmpzIiwic3RhdHNDb3VudGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmFxcyBhY2NvcmRpb25fX2J1dHRvblxyXG5jb25zdCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fYnV0dG9uJyk7XHJcbmZvcihsZXQgaSA9IDA7IGkgPCBhY2NvcmRpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0YWNjb3JkaW9uc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuXHRcdGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID9cclxuXHRcdGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbCA6IGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcblx0fVxyXG59XHJcbiIsIi8vIGhhbWJ1cmdlclxyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX190b2dnbGUtbGFiZWwnKTtcclxuY29uc3QgaGVyb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fY29udGVudCcpO1xyXG5sZXQgaGFtYnVyZ2VyT3BlbiA9IGZhbHNlO1xyXG5sZXQgaGVyb0NvbnRlbnREb3duID0gZmFsc2U7XHJcblxyXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0aWYgKCFoYW1idXJnZXJPcGVuKSB7XHJcblx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0aGVyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0aGFtYnVyZ2VyT3BlbiA9IHRydWU7XHJcblx0XHRoZXJvQ29udGVudERvd24gPSB0cnVlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0aGVyb0NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0aGFtYnVyZ2VyT3BlbiA9IGZhbHNlO1xyXG5cdFx0aGVyb0NvbnRlbnREb3duID0gZmFsc2U7XHJcblx0fVxyXG59KTtcclxuIiwiLy8gc2xpY2sgc2xpZGVyXHJcbiQoJy5vdXItcmV2aWV3c19fcmV2aWV3cycpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgZG90czogdHJ1ZSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDQwMDUsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gIHtcclxuXHRicmVha3BvaW50OiA3NjgsXHJcblx0c2V0dGluZ3M6IHtcclxuXHRcdHNsaWRlc1RvU2hvdzogMVxyXG5cdH1cclxuICB9LFxyXG5dXHJcbn0pO1xyXG4iLCIvLyBzdGF0cyBjb3VudGVyXHJcbmNvbnN0IHN0YXRzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW4tbnVtYmVycycpO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIHRocmVzaG9sZDogMC43NVxyXG59O1xyXG5cclxub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIGNvdW50VXAoKTtcclxuICAgIH1cclxuICB9KTtcclxufSwgY29uZmlnKTtcclxuXHJcbmlmKHN0YXRzQ291bnQpe1xyXG5cdG9ic2VydmVyLm9ic2VydmUoc3RhdHNDb3VudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50VXAoKSB7XHJcblxyXG5cdCRjb3VudGVycyA9ICQoJy5jb3VudC11cCcpO1xyXG5cclxuXHQkY291bnRlcnMuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XHJcblx0XHRsZXQgJGNvdW50ZXIsIGNvdW50VG8sIHRpbWU7XHJcblxyXG5cdFx0JGNvdW50ZXIgPSAkKGVsKTtcclxuXHJcblx0XHQvLyBJZiBoYXMgbm90IGZpcmVkIGFuZCBvbiBzY3JlZW5cclxuXHRcdGlmICghJGNvdW50ZXIuaGFzQ2xhc3MoJ2NvdW50LWRvbmUnKSkge1xyXG5cdFx0XHQkY291bnRlci5odG1sKFwiMFwiKTtcclxuXHJcblx0XHRcdGNvdW50VG8gPSAkY291bnRlci5hdHRyKCdkYXRhLXRvJyk7XHJcblx0XHRcdHRpbWUgPSBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLXRpbWUnKSk7XHJcblxyXG5cdFx0XHQkKHtcclxuXHRcdFx0XHRjb3VudE51bTogXCIwXCJcclxuXHRcdFx0fSkuYW5pbWF0ZSh7XHJcblx0XHRcdFx0Y291bnROdW06IGNvdW50VG9cclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGR1cmF0aW9uOiB0aW1lLFxyXG5cdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXHJcblx0XHRcdFx0c3RlcDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkY291bnRlci50ZXh0KG5ldyBOdW1iZXIodGhpcy5jb3VudE51bSkudG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywge1xyXG5cdFx0XHRcdFx0XHRtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuXHRcdFx0XHRcdH0pKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCRjb3VudGVyLnRleHQobmV3IE51bWJlcih0aGlzLmNvdW50TnVtKS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7XHJcblx0XHRcdFx0XHRcdG1heGltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkY291bnRlci5hZGRDbGFzcygnY291bnQtZG9uZScpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuIl19

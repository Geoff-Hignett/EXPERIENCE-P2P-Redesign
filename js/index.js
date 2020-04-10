// hamburger
const hamburger = document.querySelector('.navbar__toggle-label');
let hamburgerOpen = false;

hamburger.addEventListener('click', () => {
	if (!hamburgerOpen) {
		hamburger.classList.add('open');
		hamburgerOpen = true;
	} else {
		hamburger.classList.remove('open');
		hamburgerOpen = false;
	}
});


// stats counter
const statsCount = document.querySelector('.stats-banner');

const config = {
  threshold: 0.8
};

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp();
    }
  });
}, config);

observer.observe(statsCount);

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

// slick slider
$('.our-reviews__reviews').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 4000
});

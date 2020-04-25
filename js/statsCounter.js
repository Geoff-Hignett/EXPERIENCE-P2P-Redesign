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

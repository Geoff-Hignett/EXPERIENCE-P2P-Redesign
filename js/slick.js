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

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

function showImages(el) {
    const windowHeight = jQuery( window ).height();
    $(el).each(function(){
        const thisPos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fade-in");
        }
    });
}

$(document).ready(function(){
    showImages('.our-reviews__review');
});

$(window).scroll(function() {
    showImages('.our-reviews__review');
});

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


$(window).on('scroll', function (){
    const scrollTop = $(window).scrollTop();
    const scrollBottom = scrollTop + $(window).height();
    const counterTop = $('.count-start').offset().top;
    const counterBottom = counterTop + $('.count-start').height();
    const offset = 20;

    if(scrollBottom > counterBottom + offset) {
        countUp();
    }

})


function countUp() {

    $counters = $('.count-up');
    $counters.each((index, el) => {
        let $counter, countTo, time;

        $counter = $(el);

        // If has not fired
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsImltYWdlRmFkZS5qcyIsIm5hdmJhci5qcyIsInNsaWNrLmpzIiwic3RhdHNDb3VudGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZhcXMgYWNjb3JkaW9uX19idXR0b25cclxuY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2J1dHRvbicpO1xyXG5mb3IobGV0IGkgPSAwOyBpIDwgYWNjb3JkaW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdGFjY29yZGlvbnNbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblx0XHRjb25zdCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHRjb250ZW50LnN0eWxlLm1heEhlaWdodCA/XHJcblx0XHRjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGwgOiBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG5cdH1cclxufVxyXG4iLCJmdW5jdGlvbiBzaG93SW1hZ2VzKGVsKSB7XHJcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSBqUXVlcnkoIHdpbmRvdyApLmhlaWdodCgpO1xyXG4gICAgJChlbCkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IHRoaXNQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgY29uc3QgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHRvcE9mV2luZG93ICsgd2luZG93SGVpZ2h0IC0gMjAwID4gdGhpc1BvcyApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImZhZGUtaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBzaG93SW1hZ2VzKCcub3VyLXJldmlld3NfX3JldmlldycpO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICBzaG93SW1hZ2VzKCcub3VyLXJldmlld3NfX3JldmlldycpO1xyXG59KTtcclxuIiwiLy8gaGFtYnVyZ2VyXHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX3RvZ2dsZS1sYWJlbCcpO1xyXG5jb25zdCBoZXJvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19jb250ZW50Jyk7XHJcbmxldCBoYW1idXJnZXJPcGVuID0gZmFsc2U7XHJcbmxldCBoZXJvQ29udGVudERvd24gPSBmYWxzZTtcclxuXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRpZiAoIWhhbWJ1cmdlck9wZW4pIHtcclxuXHRcdGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcblx0XHRoZXJvQ29udGVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcblx0XHRoYW1idXJnZXJPcGVuID0gdHJ1ZTtcclxuXHRcdGhlcm9Db250ZW50RG93biA9IHRydWU7XHJcblx0fSBlbHNlIHtcclxuXHRcdGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRoZXJvQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRoYW1idXJnZXJPcGVuID0gZmFsc2U7XHJcblx0XHRoZXJvQ29udGVudERvd24gPSBmYWxzZTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvLyBzbGljayBzbGlkZXJcclxuJCgnLm91ci1yZXZpZXdzX19yZXZpZXdzJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBkb3RzOiB0cnVlLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgYXV0b3BsYXlTcGVlZDogNDAwNSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAge1xyXG5cdGJyZWFrcG9pbnQ6IDc2OCxcclxuXHRzZXR0aW5nczoge1xyXG5cdFx0c2xpZGVzVG9TaG93OiAxXHJcblx0fVxyXG4gIH0sXHJcbl1cclxufSk7XHJcbiIsIlxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgY29uc3QgY291bnRlclRvcCA9ICQoJy5jb3VudC1zdGFydCcpLm9mZnNldCgpLnRvcDtcclxuICAgIGNvbnN0IGNvdW50ZXJCb3R0b20gPSBjb3VudGVyVG9wICsgJCgnLmNvdW50LXN0YXJ0JykuaGVpZ2h0KCk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAyMDtcclxuXHJcbiAgICBpZihzY3JvbGxCb3R0b20gPiBjb3VudGVyQm90dG9tICsgb2Zmc2V0KSB7XHJcbiAgICAgICAgY291bnRVcCgpO1xyXG4gICAgfVxyXG5cclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBjb3VudFVwKCkge1xyXG5cclxuICAgICRjb3VudGVycyA9ICQoJy5jb3VudC11cCcpO1xyXG4gICAgJGNvdW50ZXJzLmVhY2goKGluZGV4LCBlbCkgPT4ge1xyXG4gICAgICAgIGxldCAkY291bnRlciwgY291bnRUbywgdGltZTtcclxuXHJcbiAgICAgICAgJGNvdW50ZXIgPSAkKGVsKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaGFzIG5vdCBmaXJlZFxyXG4gICAgICAgIGlmICghJGNvdW50ZXIuaGFzQ2xhc3MoJ2NvdW50LWRvbmUnKSkge1xyXG4gICAgICAgICAgICAkY291bnRlci5odG1sKFwiMFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvdW50VG8gPSAkY291bnRlci5hdHRyKCdkYXRhLXRvJyk7XHJcbiAgICAgICAgICAgIHRpbWUgPSBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLXRpbWUnKSk7XHJcblxyXG4gICAgICAgICAgICAkKHtcclxuICAgICAgICAgICAgICAgIGNvdW50TnVtOiBcIjBcIlxyXG4gICAgICAgICAgICB9KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIGNvdW50TnVtOiBjb3VudFRvXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aW1lLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRjb3VudGVyLnRleHQobmV3IE51bWJlcih0aGlzLmNvdW50TnVtKS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvdW50ZXIudGV4dChuZXcgTnVtYmVyKHRoaXMuY291bnROdW0pLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRjb3VudGVyLmFkZENsYXNzKCdjb3VudC1kb25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4iXX0=

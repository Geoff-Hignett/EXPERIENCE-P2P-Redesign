
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

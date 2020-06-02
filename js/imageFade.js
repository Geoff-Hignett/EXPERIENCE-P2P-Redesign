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

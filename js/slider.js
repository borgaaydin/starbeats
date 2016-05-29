/**
 * Created by borga on 29/05/16.
 */
$(document).ready(function(){
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    var centerPaddingCalc = ($(window).width()-945)/2;
    var slider = $('.mainSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: centerPaddingCalc+'px',
        arrows: true
    });

//        $(window).resize(function() {
//            delay(function(){
//                location.reload();
//            }, 500);
//        });
});
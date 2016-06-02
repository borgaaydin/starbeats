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
        variableWidth: true,
        arrows: true
    });

    $('.artistPhotosSlider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true
    });
});
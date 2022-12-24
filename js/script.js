$(document).ready(function(){
    $('.products').slick({
        dots: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        appendDots:$('.dots-products'),
    }
    );
});



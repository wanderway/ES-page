$('.structure-block__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    asNavFor: '.structure-block__list'
});

$('.structure-block__list').slick({
    dots: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.structure-block__items',
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000
});
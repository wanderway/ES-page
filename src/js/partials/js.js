var headerRegister = document.querySelector('.header__register-btn');
var registerPopup = document.querySelector('.register-popup');
var overlayPopup = document.querySelector('.popup-overlay');
var registerPopupClose = document.querySelector('.register-popup__close');

headerRegister.addEventListener('click', function () {
    if (registerPopup.classList.contains('register-popup--hidden')) {
        registerPopup.classList.remove('register-popup--hidden');
        registerPopup.classList.add('register-popup--showed');
    }
});

headerRegister.addEventListener('click', function () {
    if (overlayPopup.classList.contains('popup-overlay--hidden')) {
        overlayPopup.classList.remove('popup-overlay--hidden');
        overlayPopup.classList.add('popup-overlay--showed');
    }
});

registerPopupClose.addEventListener('click', function () {
    if (registerPopup.classList.contains('register-popup--showed')) {
        registerPopup.classList.remove('register-popup--showed');
        registerPopup.classList.add('register-popup--hidden');
    }
});

registerPopupClose.addEventListener('click', function () {
    if (overlayPopup.classList.contains('popup-overlay--showed')) {
        overlayPopup.classList.remove('popup-overlay--showed');
        overlayPopup.classList.add('popup-overlay--hidden');
    }
});

$('.news__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true
});

$('.customer-block__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.structure-block__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    asNavFor: '.structure-block__list'
});

$(document).ready(function() {
    // slick carousel
    $('.structure-block__list').slick({
        dots: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.structure-block__items',
        infinite: true,
        arrows: false

    });
});

var headerRegister = document.querySelector('.header__register-btn');
var registerPopup = document.querySelector('.register-popup');
var overlayPopup = document.querySelector('.popup-overlay');
var registerPopupClose = document.querySelector('.register-popup__close');

headerRegister.addEventListener('click', function () {
    registerPopup.classList.remove('register-popup--hidden');
    registerPopup.classList.add('register-popup--showed');
});

headerRegister.addEventListener('click', function () {
    overlayPopup.classList.remove('popup-overlay--hidden');
    overlayPopup.classList.add('popup-overlay--showed');
});

registerPopupClose.addEventListener('click', function () {
    registerPopup.classList.remove('register-popup--showed');
    registerPopup.classList.add('register-popup--hidden');
});

registerPopupClose.addEventListener('click', function () {
    overlayPopup.classList.remove('popup-overlay--showed');
    overlayPopup.classList.add('popup-overlay--hidden');
});
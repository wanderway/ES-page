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
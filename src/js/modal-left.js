var buttonOpenMenu = document.querySelector('.nav__button-burger');
var modalLeft = document.querySelector('.left-side-menu');
var buttonCloseMenu = document.querySelector('.header-menu__button-left');
var menu = document.querySelector('.left-side');
var body = document.querySelector('.body');
var fon = document.querySelector('.fon');

buttonCloseMenu.addEventListener("click", function(){
    modalLeft.style.left = '-400px';
    fon.style.position = 'static';
    fon.style.height = '0';
    body.style.height = '100%';
    body.style.overflow = 'visible';
});

buttonOpenMenu.addEventListener("click", function(){
    modalLeft.style.left = '0';
    fon.style.position = 'absolute';
    fon.style.height = '1024px';
    body.style.height = '1024px';
    body.style.overflow = 'hidden';
});
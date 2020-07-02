var buttonOpenMenu = document.querySelector('.nav__button-burger');
var modalLeft = document.querySelector('.left-side-menu');
var buttonCloseMenu = document.querySelector('.header-menu__button-left');
var menu = document.querySelector('.left-side');

buttonCloseMenu.addEventListener("click", function(){
    modalLeft.style.heigth = '0';
    modalLeft.style.width = '0';
    modalLeft.style.left = '-400px';
});

buttonOpenMenu.addEventListener("click", function(){
    modalLeft.style.position = 'absolute';
    modalLeft.style.left = '0';
    modalLeft.style.width = '100%';
    modalLeft.style.heigth = '1024px';

});
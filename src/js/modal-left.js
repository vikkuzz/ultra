var buttonOpenMenu = document.querySelector('.nav__button-burger');
var modalLeft = document.querySelector('.left-side-menu');
var buttonCloseMenu = document.querySelector('.header-menu__button-left');
var menu = document.querySelector('.left-side');
var body = document.querySelector('.body');
var heightBody = document.querySelector('.wrapp-body')

buttonCloseMenu.addEventListener("click", function(){
    modalLeft.style.left = '-400px';
    modalLeft.style.width = '0';
    heightBody.classList.remove('wrapp-body-height');
});

buttonOpenMenu.addEventListener("click", function(){
    modalLeft.style.left = '0';
    modalLeft.style.width = '100%';
    heightBody.classList.add('wrapp-body-height');
});
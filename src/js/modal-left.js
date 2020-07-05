var buttonOpenMenu = document.querySelector('.nav__button-burger');
var modalLeft = document.querySelector('.left-side-menu');
var buttonCloseMenu = document.querySelector('.header-menu__button-left');
var menu = document.querySelector('.left-side');
var body = document.querySelector('.body');
var heightBody = document.querySelector('.wrapp-body')

var closeMenu = function(className){
    modalLeft.style.display = 'none';
}

buttonOpenMenu.onclick = function() {
    modalLeft.style.display = "block";
    heightBody.classList.add('wrapp-body-height');
    modalLeft.classList.remove('closed-menu');
}

buttonCloseMenu.onclick = function() {
    heightBody.classList.remove('wrapp-body-height');
    modalLeft.classList.add('closed-menu');
    setTimeout(closeMenu, 300);
}

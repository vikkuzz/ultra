var buttonOpenMenu = document.querySelector('.nav__button-burger');
var modalLeft = document.querySelector('.left-side-menu');
var buttonCloseMenu = document.querySelector('.header-menu__button-left');
var menu = document.querySelector('.left-side');
var heightBody = document.querySelector('.wrapp-body')

buttonOpenMenu.addEventListener('click',function() {
    heightBody.classList.add('wrapp-body-height');
    modalLeft.classList.remove('left-side-menu-hide');
    modalLeft.classList.add('left-side-menu-open');
});

buttonCloseMenu.onclick = function() {
    heightBody.classList.remove('wrapp-body-height');
    modalLeft.classList.add('left-side-menu-hide');
    modalLeft.classList.remove('left-side-menu-open');
}
modalLeft.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !buttonCloseMenu.contains(e.target)) {
        heightBody.classList.remove('wrapp-body-height');
        modalLeft.classList.add('left-side-menu-hide');
        modalLeft.classList.remove('left-side-menu-open');
        console.log('modal-left');
    }
});
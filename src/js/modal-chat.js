var modalChat = document.querySelector('.footer-menu__button-middle');
var buttonOpenMenu = document.querySelector('.nav__button-chat');
var modal = document.querySelector('.wrap-menu');
var buttonCloseMenu = document.querySelector('.menu__close-button');
var menu = document.querySelector('.menu');
var heightBody = document.querySelector('.wrapp-body');
var modalLeft = document.querySelector('.left-side-menu');

var closeMenu = function(className){
    modal.style.display = 'none';
}

buttonOpenMenu.onclick = function() {
    modal.style.display = "flex";
    heightBody.classList.add('wrapp-body-height');
    modal.classList.remove('closed-menu');
}
modalChat.onclick = function() {
    modal.style.display = "flex";
    heightBody.classList.add('wrapp-body-height');
    modal.classList.remove('closed-menu');
    modalLeft.classList.add('left-side-menu-hide');
    modalLeft.classList.remove('left-side-menu-open');
}

buttonCloseMenu.onclick = function() {
    heightBody.classList.remove('wrapp-body-height');
    modal.classList.add('closed-menu');
    setTimeout(closeMenu, 300);
}
modal.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !buttonCloseMenu.contains(e.target)) {
        heightBody.classList.remove('wrapp-body-height');
        modal.classList.add('closed-menu');
        setTimeout(closeMenu, 300);
    }
});
var buttonOpenMenu = document.querySelector('.nav__button-burger');
var modalLeft = document.querySelector('.left-side-menu');

buttonOpenMenu.addEventListener("click", function(){
    modalLeft.style.display = 'flex';
});
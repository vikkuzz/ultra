var wrap = document.querySelector('.swiper-wrapper');
var changeText = document.querySelector('.swiper-wrapper--height');
var buttonShowAll = document.querySelector('.body-slyder__read-more-button');
var isSlideView = true;

buttonShowAll.addEventListener("click", function() {
    if (isSlideView)
{
    wrap.classList.add('swiper-wrapper--height');
    buttonShowAll.classList.add('arrowUp');
    buttonShowAll.textContent = 'Скрыть';
    isSlideView  = false;
}
else
{
    wrap.classList.remove('swiper-wrapper--height');
    buttonShowAll.classList.remove('arrowUp');
    buttonShowAll.textContent = 'Показать всё';
    isSlideView  = true;
}
});











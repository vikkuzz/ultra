var wrapp = document.querySelector('.main__wrap-text');
var height = wrapp.style.height;
var buttonViewAll = document.querySelector('.read-more-button');

var isTextShow = true;
buttonViewAll.addEventListener("click", function() {
    if (isTextShow)
{
    wrapp.style.height = '200px';
    buttonViewAll.classList.add('arrowUp');
    buttonViewAll.textContent = 'Скрыть текст';
    isTextShow  = false;
}
else
{
    wrapp.style.height = height;
    buttonViewAll.classList.remove('arrowUp');
    buttonViewAll.textContent = 'Читать далее';
    isTextShow  = true;
}
});

    


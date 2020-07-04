var arrOfLabels = [
  {
    imgUrl: '../img/lenovo.png',
    text: 'lenovo',
  },
  {
    imgUrl: '../img/samsung.png',
    text: 'samsung',
  },
  {
    imgUrl: '../img/apple.png',
    text: 'apple',
  },
  {
    imgUrl: '../img/viewsonic.png',
    text: 'viewsonic',
  },
  {
    imgUrl: '../img/bosch.png',
    text: 'bosch',
  },
  {
    imgUrl: '../img/hp.png',
    text: 'hp',
  },
  {
    imgUrl: '../img/acer.png',
    text: 'acer',
  },
  {
    imgUrl: '../img/sony.png',
    text: 'sony',
  },
  {
    imgUrl: '../img/lenovo.png',
    text: 'lenovo',
  },
  {
    imgUrl: '../img/samsung.png',
    text: 'samsung',
  },
  {
    imgUrl: '../img/apple.png',
    text: 'apple',
  }
];

var createElem = function (tagName, className) {
  var elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
};

var createArrCard = function (pictures) {

  for(var i = 0; i < pictures.length; i++) {
      var swiper = document.querySelector('.swiper-wrapper');
  
      // Получаем шаблон карточки
      var template = document.querySelector('.slide').content;
      var element = template.querySelector('div');
  
      // Клонируем элемент
      var clonedElement = element.cloneNode(false);
      swiper.appendChild(clonedElement); 
  }
  var labels = document.querySelectorAll('.card');
  return labels;
};

var addLabel = function (arrLabels){
    var sliders = createArrCard(arrLabels);
     for(var j = 0; j < sliders.length; j++) {
       
         var pic = createElem('img', 'label-image');
         pic.src = arrLabels[j].imgUrl;
         pic.alt = arrLabels[j].text;
         sliders[j].appendChild(pic);
     }
}
addLabel(arrOfLabels);

import Swiper from 'swiper';
const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesOffsetAfter: 0,
      setWrapperSize: true,
      width: 240,
      spaceBetween: 16,
      loop: true,
      loopedSlides: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    slider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
})


var wrap = document.querySelector('.swiper-wrapper');
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

var wrap2 = document.querySelector('.swiper-wrapper2');
var buttonShowAll2 = document.querySelector('.body-slyder__read-more-button2');
var isSlideView2 = true;

buttonShowAll2.addEventListener("click", function() {
    if (isSlideView2)
{
    wrap2.classList.add('swiper-wrapper2__height');
    buttonShowAll2.classList.add('arrowUp');
    buttonShowAll2.textContent = 'Скрыть';
    isSlideView2  = false;
}
else
{
    wrap2.classList.remove('swiper-wrapper2__height');
    buttonShowAll2.classList.remove('arrowUp');
    buttonShowAll2.textContent = 'Показать всё';
    isSlideView2  = true;
}
});











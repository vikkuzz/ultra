var arrOfItems = [
    {
      usluga: 'Тестирование с выдачей технического заключения',
      price: 'Бесплатно',
      time: '30-120 мин',
    },
    {
      usluga: 'Диагностика',
      price: 'Бесплатно',
      time: '30 мин',
    },
    {
      usluga: 'Замена дисплея',
      price: '1 000 ₽',
      time: '30-120 мин',
    },
    {
      usluga: 'Замена полифонического динамика',
      price: '1 000 ₽',
      time: '30-120 мин',
    },
    {
      usluga: 'Замена программного обеспечения',
      price: '1 000 ₽',
      time: '30-120 мин',
    }
  ];
  
  var createElem = function (tagName, className) {
    var elem = document.createElement(tagName);
    elem.classList.add(className);
    return elem;
  };
  
  var createArrCard = function (pictures) {
  
    for(var i = 0; i < pictures.length; i++) {
        var swiper3 = document.querySelector('.swiper-wrapper3');
    
        // Получаем шаблон карточки
        var template = document.querySelector('.slide3').content;
        var element = template.querySelector('div');
    
        // Клонируем элемент
        var clonedElement = element.cloneNode(true);
        swiper3.appendChild(clonedElement); 
    }
    var labels = document.querySelectorAll('.card3');
    return labels;
  };
  
  var addText = function (arrLabels){
      var sliders3 = createArrCard(arrLabels);
      var arrTextUslugi = document.querySelectorAll('.card3__text-uslugi');
      var arrTextPrice = document.querySelectorAll('.card3__text-price');
      var arrTextTime = document.querySelectorAll('.card3__text-time');
       for(var j = 0; j < sliders3.length; j++) {
        arrTextUslugi[j].textContent = arrLabels[j].usluga;
        arrTextPrice[j].textContent = arrLabels[j].price;
        arrTextTime[j].textContent = arrLabels[j].time;
       }
  }
  addText(arrOfItems);
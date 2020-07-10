var arrOfText = [
    {
      text: 'Ремонт ноутбуков',
    },
    {
      text: 'Ремонт планшетов',
    },
    {
      text: 'Ремонт ПК',
    },
    {
      text: 'Ремонт мониторов',
    },
    {
      text: 'Ремонт ноутбуков',
    },
    {
      text: 'Ремонт планшетов',
    },
    {
      text: 'Ремонт ПК',
    },
    {
      text: 'Ремонт мониторов',
    },
    {
      text: 'Ремонт ноутбуков',
    },
    {
      text: 'Ремонт планшетов',
    },
    {
      text: 'Ремонт ПК',
    }
  ];
  
  var createElem = function (tagName, className) {
    var elem = document.createElement(tagName);
    elem.classList.add(className);
    return elem;
  };
  
  var createArrCard = function (pictures) {
  
    for(var i = 0; i < pictures.length; i++) {
        var swiper2 = document.querySelector('.swiper-wrapper2');
    
        // Получаем шаблон карточки
        var template = document.querySelector('.slide2').content;
        var element = template.querySelector('div');
    
        // Клонируем элемент
        var clonedElement = element.cloneNode(false);
        swiper2.appendChild(clonedElement); 
    }
    var arrCards = document.querySelectorAll('.body-slyder__card2');
    return arrCards;
  };
  
  var addLabel = function (arrLabels){
      var sliders = createArrCard(arrLabels);
       for(var j = 0; j < sliders.length; j++) {
         
           var text = createElem('span', 'slide-text');
           text.textContent = arrLabels[j].text;
           sliders[j].appendChild(text);
       }
  }
  addLabel(arrOfText);

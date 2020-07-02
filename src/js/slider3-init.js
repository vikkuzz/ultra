import Swiper from 'swiper';

const slider3 = document.querySelector('.swiper-container3');

let mySwiper3;

function mobileSlider3() {
    if (window.innerWidth <= 767 && slider3.dataset.mobile == 'false') {
      mySwiper3 = new Swiper(slider3, {
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
      slider3.dataset.mobile = 'true';
    }
    if (window.innerWidth > 767) {
      slider3.dataset.mobile = 'false';
      if (slider3.classList.contains('swiper-container-initialized')) {
        mySwiper3.destroy();
      }
    }
  }
  
  mobileSlider3();
  
  window.addEventListener('resize', () => {
    mobileSlider3();
  })
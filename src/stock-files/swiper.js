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

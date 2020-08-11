import Swiper from "swiper";

const slider2 = document.querySelector(".swiper-container2");

let mySwiper2;

function mobileSlider2() {
  if (window.innerWidth <= 767 && slider2.dataset.mobile == "false") {
    mySwiper2 = new Swiper(slider2, {
      slidesOffsetAfter: 0,
      setWrapperSize: true,
      width: 240,
      spaceBetween: 16,
      loop: true,
      loopedSlides: 3,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    slider2.dataset.mobile = "true";
  }
  if (window.innerWidth > 767) {
    slider2.dataset.mobile = "false";
    if (slider2.classList.contains("swiper-container-initialized")) {
      mySwiper2.destroy();
    }
  }
}

mobileSlider2();

window.addEventListener("resize", () => {
  mobileSlider2();
});

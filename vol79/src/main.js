$(document).ready(function () {
  $.support.cors = true;

  // 헤더 로드
  $("#header").load("header.html", function () {
    document.getElementById("header").classList.add("fixed");
  });
});
// 홈 화면 TOGETHER 코너 슬라이드
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

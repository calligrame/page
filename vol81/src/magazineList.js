$(document).ready(function () {
  // 헤더 로드
  $("#header").load("header.html", function () {
    document.getElementById("header").classList.add("fixed");
  });
  // 지난호 보기
  $(".magazine-cover-big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".magazine-thumb-nav",
  });

  $(".magazine-thumb-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".magazine-cover-big",
    appendArrows: $(".thumb-pagenation"),
    prevArrow:
      '<button class="btn-pagenation prev"><svg class="icon-arrow" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg></button>',
    nextArrow:
      '<button class="btn-pagenation next"><svg class="icon-arrow"  dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></button>',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  // 초기 로딩시 맨 처음 슬라이드에 다운로드 링크 삽입
  const firstSlide = $(".magazine-thumb-nav").slick("getSlick").$slides.get(0);
  $("#btn_download").attr("href", firstSlide.dataset.download);
  $("#btn_enter").attr("href", firstSlide.dataset.link);

  $(".magazine-thumb-nav").on(
    "afterChange",
    function (event, slick, currentSlide) {
      console.log(slick);
      $("#btn_download").attr(
        "href",
        $(slick.$slides.get(currentSlide)).data("download")
      );
      $("#btn_enter").attr(
        "href",
        $(slick.$slides.get(currentSlide)).data("link")
      );
      // console.log(slick);
    }
  );
});

$(document).ready(function () {
  // 풀페이지 활성화
  $("#fullpage").fullpage({
    scrollingSpeed: 1000,
    scrollOverflow: true,
    keyboardScrolling: true,
    responsiveWidth: 1200,
    scrollOverflow: true,
    scrollingSpeed: 1000, //스크롤 속도
  });

  // 서브페이지 안에서는 풀페이지 스크롤링 막기. 단, scroll top이 0일 경우에는 다시 활성화.
  $(".content_wrap, #right_contents").on("scroll", function () {
    $.fn.fullpage.setAllowScrolling(false);
    if ($(this).scrollTop() === 0) {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });

  // $(".content_wrap, #right_contents").on("touchmove", function () {
  //   fullpage_api.setAutoScrolling(false);
  // });
  if ($(window).width() < 1024) {
  }
});

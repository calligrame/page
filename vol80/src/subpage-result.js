$(document).ready(function () {
  //prev, next 버튼 링크 생성
  const popBox = document.getElementById("pop");

  // 헤더 로드
  $("#header").load("../header.html", function () {
    document.getElementById("header").classList.add("fixed");
  });

  // 최상위 이동
  $("#btn_top, #side_btn_top, #btn_top_circle").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // 현재 페이지 링크 복사
  $("#side_btn_link, #bottom_btn_link").on("click", function () {
    let currentLink = window.location.href;
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = currentLink;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.");
    // showToast("URL이 복사되었습니다.");
  });

  const showToast = (content) => {
    /** 토스트 메시지 출력 */
    $("#toast-box > span").text(content);
    $("#toast-box").addClass("show");
    setTimeout(() => {
      $("#toast-box").removeClass("show");
    }, 2500); //DOM을 충분히 읽어올 수 있도록 시간 주기
  };

  //주석 팝업
  const popCaption = (posX, posY, index) => {
    const height = popBox.getBoundingClientRect().height;
    popBox.style.left = posX + "px";
    popBox.style.top = posY - height + "px";
    $("#pop > p").text($(`.caption-text-${index}`).text());
  };
  $(".annotation").hover(function (e) {
    $("#pop").toggleClass("active");
    const index = $(this).data("caption-index");
    popCaption(e.pageX, e.pageY, index);
  });

  // 현재 페이지 인쇄
  let initBody;
  const beforePrint = () => {
    initBody = document.body.innerHTML;
    document.body.innerHTML = document.querySelector(".container").innerHTML;
  };
  const afterPrint = () => {
    document.body.innerHTML = initBody;
  };
  $("#side_btn_print").on("click", function () {
    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    setTimeout(() => {
      window.print();
    }, 250); //DOM을 충분히 읽어올 수 있도록 시간 주기
  });

  // $(".pic-origin-wrap").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: ".pic-thumb",
  // });

  // $(".pic-thumb").slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   asNavFor: ".pic-origin-wrap",
  //   appendArrows: $(".thumb-pagenation"),
  //   prevArrow:
  //     '<button class="btn-pagenation prev"><svg class="icon-arrow" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg></button>',
  //   nextArrow:
  //     '<button class="btn-pagenation next"><svg class="icon-arrow"  dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></button>',
  //   focusOnSelect: true,
  // });
});

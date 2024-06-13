$(document).ready(function () {
  $(".btn-example").click(function () {
    var $href = $(this).attr("href");
    layer_popup($href);
  });

  function getCookie(c_name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let x, y;
    let ca = decodedCookie.split(";");
    for (i = 0; i < ca.length; i++) {
      x = ca[i].substr(0, ca[i].indexOf("="));
      y = ca[i].substr(ca[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
        // unescape로 디코딩 후 값 리턴
      }
    }
  }

  function Mobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  if (Mobile()) {
    // 모바일일 경우
    layer_popup("#layer2");
  } else {
    // 모바일 외
    layer_popup("#layer1");
  }

  function isCookieExist(el) {
    console.log(el);
    var x,
      y,
      cookiedata = document.cookie.split(";");
    for (i = 0; i < cookiedata.length; i++) {
      cookiedata[i] = cookiedata[i].replace(/^\s+|\s+$/g, "");
    }
    console.log(cookiedata.indexOf("popup=done"));
    if (cookiedata.indexOf("popup=done") < 0) {
      $(el).show();
      return true;
    } else {
      $(el).hide();
      return false;
    }
  }

  function setCookie(key, value, exDay) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + exDay);
    document.cookie =
      key +
      "=" +
      escape(value) +
      "; path=/; expires=" +
      todayDate.toGMTString() +
      ";";
  }

  function layer_popup(el) {
    if (isCookieExist(el) === false) {
      return;
    } else {
      var $el = $(el); //레이어의 id를 $el 변수에 저장

      var isDim = $el.prev().hasClass("dimBg"); //dimmed 레이어를 감지하기 위한 boolean 변수

      isDim ? $(".dim-layer").fadeIn() : $el.fadeIn();

      var $elWidth = ~~$el.outerWidth(),
        $elHeight = ~~$el.outerHeight(),
        docWidth = $(document).width(),
        docHeight = $(document).height();

      // 화면의 중앙에 레이어를 띄운다.
      if ($elHeight < docHeight || $elWidth < docWidth) {
        if ($el === "#layer2") {
          $el.css({
            marginTop: -$elHeight / 2,
            marginLeft: -$elWidth / 2,
          });
        } else {
          $el.css({
            marginTop: -$elHeight / 2,
            marginLeft: -$elWidth / 2,
          });
        }
      } else {
        $el.css({ top: 0, left: 0 });
      }

      $el.find("a.btn-layerClose").click(function () {
        console.log("click!");
        isDim ? $(".dim-layer").fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        return false;
      });

      $el.find("a.btn-todayClose").click(function () {
        setCookie("popup", "done", 1);

        isDim ? $(".dim-layer").fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        return false;
      });

      $(".layer .dimBg").click(function () {
        $(".dim-layer").fadeOut();
        return false;
      });
    }
  }
});

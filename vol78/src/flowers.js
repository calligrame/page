$(document).ready(function () {
  const container = document.querySelector(".container");
  const GRAVITY_SCALE = 9.8;

  const gravity = (element, posY) => {
    // TODO
    /**
     * 1. 요소, 초기Y값 받아오기
     * 2. update 돌면서 시간마다 중력 적용해주기
     * 3. 화면 밖으로 나가거나 스크롤로 따라갈 경우 화면 끝에 닿으면 destroy
     */
    setInterval(function () {
      element.style.top += posY + 0.1;
    });
  };

  $(window).mouseup(function (e) {
    let flowerDiv = document.createElement("div");
    let flowerImg = document.createElement("img");
    const flowerIndex = Math.floor(Math.random() * (9 - 1) + 1);
    flowerDiv.className = "flower";

    flowerImg.src = `../img/sub8/f${flowerIndex}.png`;
    flowerDiv.style.left = e.pageX + "px";
    flowerDiv.style.top = e.pageY + "px";
    flowerDiv.appendChild(flowerImg);
    container.appendChild(flowerDiv);
    gravity(flowerDiv, e.pageY);

    e.pageY;
    setTimeout(function () {
      flowerDiv.classList.add("disable");
      setTimeout(function () {
        flowerDiv.remove();
      }, 2000);
    }, 2000);
  });
});

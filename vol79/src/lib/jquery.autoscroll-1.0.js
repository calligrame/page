//////// 전역변수 구역 //////////////////
var pno=0;// 현재 페이지 번호(첫페이지 0)
var totpno=6;//전체 페이지개수
var prot=0;//막기상태값(0-허용,1-막기)

var winW=$(window).width();
var mobsts=0;//0-DT, 1-mob
if(winW<1000)mobsts=1;//폭이 1000보다작으면 mobile임!
// console.log(mobsts);
////////////////////////////////////

$(function(){/// jQB ///////////////////////////

$(document)// 이벤트를 다중 사용가능함!
	.on("mousewheel DOMMouseScroll",
	function(e){

		// 모바일일때 작동안함
		if(mobsts===1)return true;//true 값을 리턴해야 스크롤이됨!
		////////////////////////////////
		// 1. 스크롤 기본이동 막기(파라미터e를 써야함!)
		e.preventDefault();
		///////// 스크롤이동중 잠금장치!!!/////////
		if(prot===1){return false;}// 돌아가!
		prot=1;// 처음들어온 신호가 잠금!
		////////////////////////////////////////////////
		// 2. ie 구버전 구분하기
		var evt = window.event || e;
		// 변수 = 변수1 || 변수2		// 둘중에 true인 변수가 할당된다.
		// window.event - ie8 이전버전용임.

		// 3. 마우스휠 이벤트에서 가장 중요한 개념!
		/* -> wheelDelta 란?		(ie,chrome용), opera는 detail을 사용
		-마우스 이벤트에 따라 발생하는 이벤트 횟수 및 방향과 이동거리 등을 리턴해주는 속성
		- 만약에 wheelDelta를 click이벤트에 적용하면 클릭횟수를 리턴함
		- 마우스 휠이벤트일 경우 스크롤 방향과 이동거리를 리턴해 준다.(+는 윗방향, -는 아랫방향)
		*/
		var delta=evt.detail?evt.detail:evt.wheelDelta;
		// 조건연산자를 사용하여 detail이 treu면 (opera면) 그대로 쓰고, false이면 (opera가 아니면) wheelDelta를 변수에 할당하라!
		//console.log(delta);

		//// 파이어폭스를 위한 별도처리 /////////
		// 1. 파이어폭스는 스크롤처리시 방향이반대	// 2. 파이어폭스는 detail처리시		//    originalEvent.detail 로 사용함!
		if(/Firefox/i.test(navigator.userAgent)){
			delta=-evt.originalEvent.detail;
		}

		////////////////////////////////////
		if(delta>0){// 윗방향(양수)
			//페이지번호 감소
			pno--;
			//첫페이지고정!
			if(pno===-1){pno=0;}
		}/// if문///////////////////////
		else{// 아랫방향(음수)
			// 페이지번호 증가
			pno++;
			//끝페이지고정!
			if(pno===totpno){pno=totpno-1;}
		}/// else문 //////////////////////
		//////////////////////////////////
		// console.log(pno);

		///// 4. 해당순번 페이지 높이값 구하기 //////
		var pagepos=$("section").eq(pno).offset().top;

		//// 5. 페이지 이동 애니메이션 설정하기 /////
		$("html,body").animate({
			scrollTop: pagepos+"px"
		},600,"easeInOutCirc",function(){
			prot=0;//이동애니후 잠금풀기!
		});///// ani ////////

		/// 6.GNB메뉴, 블릿메뉴 class변경하기 함수호출
		// chgMenu();
		///// 페이지 액션 함수 호출!!!!
		// pageAction();


	});


});

$(document).ready(function () {

  //풀페이지
  $('.fullpage-wrap').fullpage({

    navigation: true,
    lockAnchors: false,
    swipe: true,
    resetSliders: false,
     //scrollBar:true,
    //브라우저 창의 크기가 바뀐 뒤에 콜백
    afterResize: function (width, height) {
      //일단 패쓰
    },
    //구역을 불러오고 나서 스크롤이 끝나면 콜백
    afterLoad: function (origin, direction) {
      // 첫번째 섹션 일 때,
      if (origin == 'slide1') {
        $('.js-header').removeClass('hd-white');
        $('.js-header').mouseenter(function () {
          $(this).addClass('hd-white');
        }).mouseleave(function () {
          $(this).removeClass('hd-white');
        });
      }
      // 첫번째 섹션이 아닐 때,
      else if (origin != 'slide1' || direction == 'down') {
        $('.js-header').addClass('hd-white');
      }
    },
    //사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백
    onLeave: function (index, origin, direction) {
      //첫번째 섹션일 때,
      if (origin == '1') {
        $('.js-header').removeClass('hd-white');
      }
      //첫번째 섹션이 아닐 때,
      else if (origin != '1') {
        $('.js-header').mouseleave(function () {
          $(this).addClass('hd-white');
        });
      }
    }
  });


  var hdMenu = $('.hd-menu-area').hasClass('hidden');

  //모바일메뉴 열기 버튼
  $('.js-hd-menu-btn').click(function () {
    if (hdMenu == false) {
      $('.js-header, .hd-menu-area').addClass('active');
    }
  });
  //모바일 메뉴 닫기 버튼
  $('.js-hd-close-btn').click(function () {
    if (hdMenu == false) {
      $('.js-header, .hd-menu-area, .hd-white').removeClass('active');
    }
  });

  //모바일메뉴에서 펼치고 접기
  $('.js-depth').click(function () {
    event.preventDefault();
    //슬라이드
    $(this).find($('.hd-menu__child')).siblings().next().stop().slideToggle();
    //화살표 방향 변경
    $(this).find($('.arrow__icon')).toggleClass('next');
  })

  //언어 선택 드롭다운
  $('.hd-lang .ui.dropdown').dropdown();

  //모바일 언어 드롭다운
  $('.mo-hd-lang.ui.dropdown').dropdown();

  //패밀리사이트 드롭다운
  $('.family-site__list .ui.dropdown').dropdown();
});


$(document).ready(function () {

  //풀페이지
  $('.fullpage-wrap').fullpage({
    navigation: true,
    lockAnchors: false,
    swipe: true,
    resetSliders: false,
    //구역을 불러오고 나서 스크롤이 끝나면 콜백
    afterLoad: function (origin, direction) {
      // 첫번째 섹션 일 때,
      if (origin == 'slide1') {
        $(window).on('load resize', function () {
          var winWidth = $(window).width();
          if (winWidth > 990) {
            $('.js-header').removeClass('hd-white');
            $('.js-header').mouseenter(function () {
              $(this).addClass('hd-white');
            }).mouseleave(function () {
              $(this).removeClass('hd-white');
            });
          } else if (winWidth < 990) {
            $('.js-header').removeClass('hd-white');
            $('.js-header').mouseenter(function () {
              $(this).removeClass('hd-white');
            }).mouseleave(function () {
              $(this).removeClass('hd-white');
            });
          }
        })

        $('section.active .animation.from-left-out').removeClass('from-left-out').addClass('from-left-in');
        $('section.active .animation.from-right-out').removeClass('from-right-out').addClass('from-right-in');
        $('section.active .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
      }
      // 첫번째 섹션이 아닐 때,
      else if (origin != 'slide1') {
        $('.js-header').addClass('hd-white');
        if (origin == 'slide2') {
          $('section.active .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('section.active .animation.from-left-out').removeClass('from-left-out').addClass('from-left-in');
        }
        else if (origin == 'slide3') {
          $('section.active .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('section.active .animation.from-right-out').removeClass('from-right-out').addClass('from-right-in');
        }
        else if (origin == 'slide4') {
          $('section.active .animation.scale-down-out').removeClass('scale-down-out').addClass('scale-down-in');
          $('section.active .animation.from-right-out').removeClass('from-right-out').addClass('from-right-in');
        }
        else if (origin == 'slide5') {
          $('section.active .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('section.active .animation.scale-down-out').removeClass('scale-down-out').addClass('scale-down-in');

        }
        else if (origin == 'slide6') {
          $('section.active .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('section.active .animation.from-left-out').removeClass('from-left-out').addClass('from-left-in');
        }
      }
    },
    //사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백
    onLeave: function (index, origin, direction) {
      //첫번째 섹션일 때,
      if (origin == '1') {
        $('.js-header').removeClass('hd-white');
        $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out');
        $('section.active .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out');
      }
      //첫번째 섹션이 아닐 때,
      else if (origin != '1') {
        //헤더
        $('.js-header').mouseleave(function () {
          $(this).addClass('hd-white');
        });

        //애니메이션
        if (origin == '2') {
          $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
          $('section.active .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
          $('section.active .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out').addClass('from-right-in');
        }
        else if (origin == '3') {
          // section 3
          if (direction == 'up') {
            $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out');
            $('section.active .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out');
          }
          // section 2
          $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
          $('section.active .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
        }
        else if (origin == '4') {
          // section 4
          if (direction == 'up') {
            $('section.active .animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out');
            $('section.active .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out');
          }
          // section 3
          $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out');
          $('section.active .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out');

        }
        else if (origin == '5') {
          // section 5
          if (direction == 'up') {
            $('section.active .animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out');
            $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
          }
          // section 4
          $('section.active .animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out');
          $('section.active .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out');
        }
        else if (origin == '6') {
          // section 6
          if (direction == 'up') {
            $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
            $('section.active .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
          }
          // section 5
          $('section.active .animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out');
          $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
        }
        //풋터
        else if (origin == '7') {
          // section 6
          // $('section.active .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
          // $('section.active .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
        }
      }
    }
  });

  //모바일 메뉴
  var hdMenu = $('.hd-menu-area').hasClass('hidden');
  var menuDepth = $('.hd-menu__item').children().hasClass('hd-menu__child');
  //열기
  $('.js-hd-menu-btn').click(function () {
    if (hdMenu == false) {
      $('.js-header, .hd-menu-area').addClass('active');
    }
  });
  //닫기
  $('.js-hd-close-btn').click(function () {
    if (hdMenu == false) {
      $('.js-header, .hd-menu-area').toggleClass('active');
    }
  });
  //펼치고 접기
  if (menuDepth == true) {
    $('.hd-menu__item').addClass('js-depth');
    $('.js-depth').click(function () {
      event.preventDefault();
      //슬라이드
      $(this).find($('.hd-menu__child')).siblings().next().stop().slideToggle();
      //화살표 방향 변경
      $(this).find($('.arrow__icon')).toggleClass('next');
    });
  }

//언어 선택 드롭다운
  $('.hd-lang .ui.dropdown').dropdown();
//모바일 언어 드롭다운
  $('.mo-hd-lang.ui.dropdown').dropdown();
//패밀리사이트 드롭다운
  $('.family-site__list .ui.dropdown').dropdown();

});


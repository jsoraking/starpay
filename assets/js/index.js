$(document).ready(function () {

  //풀페이지
  $('.fullpage-wrap').fullpage({
    navigation: true,
    lockAnchors: false,
    swipe: true,
    resetSliders: false,
    //구역을 불러오고 나서 스크롤이 끝나면 콜백
    afterLoad: function (origin, direction) {
      //delay, duration 쓰는 곳 class 삭제
      $('.block-chain .animation').removeClass('ani-delay-2 ani-delay-3 ani-delay-4');
      $('.star-wallet .animation').removeClass('ani-delay-2 ani-delay-3 ani-delay-4 ani-delay-5');
      $('.face-recog .animation').removeClass('ani-delay-2 ani-delay-3');
      $('.easy-everywhere .animation').removeClass('ani-delay-2');
      $('.safety-fintech .animation').removeClass('ani-delay-2 ani-delay-3');
      $('.starpay-use .animation').removeClass('ani-delay-2 ani-delay-3 ani-delay-4');

      // 첫번째 섹션 일 때,
      if (origin == 'slide1') {
        $(window).on('load resize', function () {
          var winWidth = $(window).width();
          if (winWidth > 990) {
            $('.js-header').addClass('hd-white');
            $('.js-header').mouseenter(function () {
              $(this).addClass('hd-white');
            }).mouseleave(function () {
              $(this).addClass('hd-white');
            });
          }
          else if (winWidth < 990) {
            $('.js-header').addClass('hd-white');
            $('.js-header').mouseenter(function () {
              $(this).addClass('hd-white');
            }).mouseleave(function () {
              $(this).addClass('hd-white');
            });
          }
        });
        $('.block-chain .animation.from-left-out').removeClass('from-left-out').addClass('from-left-in ani-delay-3');
        $('.block-chain .animation.from-right-out').removeClass('from-right-out').addClass('from-right-in ani-delay-4');
        $('.block-chain .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in ani-delay-2');
      }
      // 첫번째 섹션이 아닐 때,
      else if (origin != 'slide1') {
        $('.js-header').addClass('hd-white');
        if (origin == 'slide2') {
          $('.star-wallet .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('.star-wallet .animation.from-left-out.first').removeClass('from-left-out').addClass('from-left-in ani-delay-2');
          $('.star-wallet .animation.from-left-out.second').removeClass('from-left-out').addClass('from-left-in ani-delay-3');
          $('.star-wallet .animation.from-left-out.three').removeClass('from-left-out').addClass('from-left-in ani-delay-4');
          $('.star-wallet .animation.from-left-out.five').removeClass('from-left-out').addClass('from-left-in ani-delay-5');
        }
        else if (origin == 'slide3') {
          $('.face-recog .animation.from-bottom-out.first').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('.face-recog .animation.from-bottom-out.second').removeClass('from-bottom-out').addClass('from-bottom-in ani-delay-2');
          $('.face-recog .animation.from-right-out').removeClass('from-right-out').addClass('from-right-in ani-delay-3');
        }
        else if (origin == 'slide4') {
          $('.easy-everywhere .animation.scale-down-out').removeClass('scale-down-out').addClass('scale-down-in');
          $('.easy-everywhere .animation.from-right-out').removeClass('from-right-out').addClass('from-right-in ani-delay-2');
        }
        else if (origin == 'slide5') {
          $('.safety-fintech .animation.from-bottom-out.first').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('.safety-fintech .animation.from-bottom-out.second').removeClass('from-bottom-out').addClass('from-bottom-in ani-delay-2');
          $('.safety-fintech .animation.scale-down-out').removeClass('scale-down-out').addClass('scale-down-in ani-delay-3');
        }
        else if (origin == 'slide6') {
          $('.starpay-use .animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
          $('.starpay-use .animation.from-left-out.first').removeClass('from-left-out').addClass('from-left-in ani-delay-2');
          $('.starpay-use .animation.from-left-out.second').removeClass('from-left-out').addClass('from-left-in ani-delay-3');
          $('.starpay-use .animation.from-left-out.three').removeClass('from-left-out').addClass('from-left-in ani-delay-4');
        }
      }
    },
    //사용`자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백
    onLeave: function (index, origin, direction) {
      //첫번째 섹션일 때,
      if (origin == '1') {
        $('.js-header').removeClass('hd-white');
        $('.block-chain .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out');
        $('.block-chain .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out');
        $('.block-chain .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out');
      }

      //첫번째 섹션이 아닐 때,
      else if (origin != '1') {
        //헤더
        $('.js-header').mouseleave(function () {
          $(this).addClass('hd-white');
        });

        //애니메이션
        if (origin == '2') {
          if (direction == 'up' || direction == 'down') {
            $('.star-wallet .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
            $('.star-wallet .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
            $('.star-wallet .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out').addClass('from-right-in');
          }
        }
        else if (origin == '3') {
          // section 3
          if (direction == 'up' || direction == 'down') {
            $('.face-recog .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
            $('.face-recog .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out').addClass('from-right-in');
          }
        }
        else if (origin == '4') {
          // section 4
          if (direction == 'up' || direction == 'down') {
            $('.easy-everywhere .animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out').addClass('scale-down-in');
            $('.easy-everywhere .animation.from-right-in').removeClass('from-right-in').addClass('from-right-out').addClass('from-right-in');
          }
        }
        else if (origin == '5') {
          // section 5
          if (direction == 'up' || direction == 'down') {
            $('.safety-fintech .animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out').addClass('scale-down-in');
            $('.safety-fintech .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
          }
        }
        else if (origin == '6') {
          // section 6
          if (direction == 'up' || direction == 'down') {
            $('.starpay-use .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
            $('.starpay-use .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');

          }
        }
        //풋터
        else if (origin == '7') {
          // section 6
          //$('.starpay-use .animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
          //$('.starpay-use .animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
        }
      }
    }
  });

  var hdMenu = $('.hd-menu-area').hasClass('hidden');
  var menuDepth = $('.hd-menu__item > ul').length;
  var hdMenuLeft = $('.js-header').css('left').replace(/[^-\d\.]/g, '');

  //메뉴 열기
  $('.js-hd-menu-btn').click(function () {
    if (hdMenu == false) {
      $('.js-header').addClass('mo-menu');
      $('.hd-menu-area').css({
        'left': '0',
        'transition': 'all .3s ease'
      });
      $('.mo-menu__bg').css({
        'display': 'block',
        'left': '0'
      });
    }
  });
  //메뉴>하위메뉴 펼치고 접기
  if (menuDepth > 0) {
    $('.hd-menu__child').parent().addClass('js-depth');
    $('.js-depth > a').click(function () {
      event.preventDefault();
      $(this).parent().find($('.hd-menu__child')).stop().siblings().next().slideToggle();
      //하위 메뉴 있는 경우 화살표 방향 변경
      $(this).parent().find($('.arrow__icon')).toggleClass('next');
    });
  }
  //메뉴 닫기
  $('.js-hd-close-btn').click(function () {
    if (hdMenu == false) {
      $('.hd-menu-area').css({
        'left': '100%'
      });
      //left값이 0 일때 (없어졌을 때)
      if (hdMenuLeft == 0) {
        $('.mo-menu__bg').css({
          'left': '100%',
          'transition': 'all .3s ease'
        });
      }
    }
  });
  //리사이징 될때 마다,
  $(window).resize(function () {
    var winMainWidth = $(window).width();
    if (winMainWidth > 990) {
      //메뉴>하위메뉴 없앰
      $('.hd-menu__child').hide();
    }
    else if (winMainWidth <= 990) {
      //메뉴>하위메뉴 보이기
      $('.hd-menu__child').show();
    }
  });
});

//언어 선택 드롭다운
$('.hd-lang .ui.dropdown').dropdown();
//모바일 언어 드롭다운
$('.mo-hd-lang.ui.dropdown').dropdown();
//패밀리사이트 드롭다운
$('.family-site__list .ui.dropdown').dropdown();


$(document).ready(function () {
  //풀페이지
  $('.fullpage-wrap').fullpage({
    navigation: true,
    lockAnchors: false,
    swipe: true,
    resetSliders: false,
    //구역을 불러오고 나서 스크롤이 끝나면 콜백
    afterLoad: function (origin, direction) {
      var winWidth = $(window).width();
      //헤더 화이트 부분
      function hdWhiteCheck() {
        // 1번째 섹션, 사이즈가 990 미만일때
        if (origin == 'slide1' && winWidth > 990) {
          $('.js-header').on({
            mouseenter: function(){
              $(this).addClass('hd-white');
            },
            mouseleave: function () {
              $(this).addClass('hd-white');
            }
          });

        } else if (origin == 'slide1' && winWidth <= 990) {
          $('.js-header').addClass('hd-white');
          $('.js-header').on({
            mouseenter: function(){
              $(this).removeClass('hd-white');
            },
            mouseleave: function () {
              $(this).removeClass('hd-white');
            }
          });
        } else if (origin != 'slide1') {
          $('.js-header').addClass('hd-white');
        }
      }

      $(window).on('load resize', function () {
        hdWhiteCheck();
      });

      if (origin == 'slide1') {
        $('.js-header').removeClass('hd-white');
        $('.block-chain .right-first, .block-chain .right-second').addClass('from-right-in');
        $('.block-chain .bottom-first, .block-chain .bottom-second, .block-chain .bottom-three').addClass('from-bottom-in');
        $('.block-chain .left-first').addClass('from-left-in');
      } else if (origin != 'slide1') {
        $('.js-header').addClass('hd-white');
        hdWhiteCheck();
        if (origin == 'slide2') {
          $('.star-wallet .bottom-first, .star-wallet .bottom-second, .star-wallet .bottom-three').addClass('from-bottom-in');
          $('.star-wallet .left-first, .star-wallet .left-second, .star-wallet .left-three, .star-wallet .left-five').addClass('from-left-in');
        } else if (origin == 'slide3') {
          $('.face-recog .bottom-first, .face-recog .bottom-second').addClass('from-bottom-in');
          $('.face-recog .right-first').addClass('from-right-in');
        } else if (origin == 'slide4') {
          $('.easy-everywhere .scale-down-first').addClass('scale-down-in');
          $('.easy-everywhere .right-first').addClass('from-right-in');
        } else if (origin == 'slide5') {
          $('.safety-fintech .bottom-first, .safety-fintech .bottom-second').addClass('from-bottom-in');
          $('.safety-fintech .scale-down-first').addClass('scale-down-in');
        } else if (origin == 'slide6') {
          $('.starpay-use .bottom-first').addClass('from-bottom-in');
          $('.starpay-use .left-first, .starpay-use .left-second, .starpay-use .left-three').addClass('from-left-in');
        }
      }
    },
    //사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백
    onLeave: function (index, origin, direction) {
      $('.js-header').addClass('hd-white');
      // 애니메이션 in 있으면 삭제
      $('.animation.from-left-in').removeClass('from-left-in');
      $('.animation.from-right-in').removeClass('from-right-in');
      $('.animation.from-bottom-in').removeClass('from-bottom-in');
      $('.animation.scale-down-in').removeClass('scale-down-in');
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
    if ($(window).width() > 990) {
      //메뉴>하위메뉴 없앰
      $('.hd-menu__child').hide();
    }
    else if ($(window).width() <= 990) {
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
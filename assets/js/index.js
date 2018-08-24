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

      function hdWhiteCheck() {
        if (origin == 'slide1' && winWidth > 990) {
          $('.js-header').mouseenter(function () {
            $(this).addClass('hd-white');
          }).mouseleave(function () {
            $(this).addClass('hd-white');
          });
        }
        else if (origin == 'slide1' && winWidth <= 990) {
          $('.js-header').addClass('hd-white');
          $('.js-header').mouseenter(function () {
            $(this).removeClass('hd-white');
          }).mouseleave(function () {
            $(this).removeClass('hd-white');
          });
        }

        else if (origin != 'slide1') {
          $('.js-header').addClass('hd-white');
        }
      }

      $(window).on('load resize', function () {
        hdWhiteCheck();
      });

      //delay, duration 쓰는 곳 class 삭제
      $('.animation').removeClass('ani-delay-2 ani-delay-3 ani-delay-4 ani-delay-5');
      // 첫번째 섹션 일 때,
      if (origin == 'slide1') {
        $('.js-header').removeClass('hd-white');
        $('.block-chain .from-left-out').attr('class', 'animation from-left-in ani-delay-3');
        $('.block-chain .from-bottom-out.first').attr('class', 'animation from-bottom-in ani-delay-2 first');
        $('.block-chain .from-bottom-out.second').attr('class', 'img-shadow animation from-bottom-in ani-delay-2 second');
        $('.block-chain .from-bottom-out.three').attr('class', 'block-chain__aside animation from-bottom-in ani-delay-2 three');
        $('.block-chain .from-right-out').attr('class', 'silde__title animation from-right-in ani-delay-4');
      }
      // 첫번째 섹션이 아닐 때,
      else if (origin != 'slide1') {
        $('.js-header').addClass('hd-white');
        hdWhiteCheck();
        if (origin == 'slide2') {
          $('.star-wallet .from-bottom-out.first').attr('class', 'animation from-bottom-in star-wallet__icon first');
          $('.star-wallet .from-bottom-out.second').attr('class', 'animation from-bottom-in star-wallet__txt second');
          $('.star-wallet .from-bottom-out.three').attr('class', 'animation from-bottom-in star-wallet__aside ani-delay-2 three');
          $('.star-wallet .from-left-out.first').attr('class', 'animation from-left-in ani-delay-2 first');
          $('.star-wallet .from-left-out.second').attr('class', 'animation from-left-in ani-delay-3 second');
          $('.star-wallet .from-left-out.three').attr('class', 'animation from-left-in ani-delay-4 three');
          $('.star-wallet .from-left-out.five').attr('class', 'animation from-left-in ani-delay-5 five');
        }
        else if (origin == 'slide3') {
          $('.face-recog .from-bottom-out.first').attr('class', 'animation from-bottom-in first');
          $('.face-recog .from-bottom-out.second').attr('class', 'animation from-bottom-in ani-delay-2 second');
          $('.face-recog .from-right-out').attr('class', 'face-recog__img animation from-right-in ani-delay-3');
        }
        else if (origin == 'slide4') {
          $('.easy-everywhere .scale-down-out').attr('class', 'everywhere__img animation scale-down-in');
          $('.easy-everywhere .from-right-out').attr('class', 'everywhere__content animation from-right-in ani-delay-2');
        }
        else if (origin == 'slide5') {
          $('.safety-fintech .from-bottom-out.first').attr('class', 'safety-fintech__tit animation from-bottom-in first');
          $('.safety-fintech .from-bottom-out.second').attr('class', 'safety-fintech__dsc animation from-bottom-in ani-delay-2 second');
          $('.safety-fintech .scale-down-out').attr('class', 'safety-fintech__img animation scale-down-in ani-delay-3');
        }
        else if (origin == 'slide6') {
          $('.starpay-use .from-bottom-out').attr('class', ' starpay-use__tit animation from-bottom-in');
          $('.starpay-use .from-left-out.first').attr('class', 'animation from-left-in ani-delay-2 first');
          $('.starpay-use .from-left-out.second').attr('class', 'animation from-left-in ani-delay-3 second');
          $('.starpay-use .from-left-out.three').attr('class', 'animation from-left-in ani-delay-4 three');
        }
      }
    },
    //사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백
    onLeave: function (index, origin, direction) {
      // ..in으로 된 class들 out으로 변경
      $('.animation.from-left-in').removeClass('from-left-in').addClass('from-left-out');
      $('.animation.from-right-in').removeClass('from-right-in').addClass('from-right-out');
      $('.animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out');
      $('.animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out');
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


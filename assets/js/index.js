$(document).ready(function () {
  $('.js-fullpage-wrap').fullpage({
    navigation: true,
    lockAnchors: false,
    //섹션을 이동할때 마다, 콜백
    onLeave: function (index, nextIndex, direction) {
      var headerColor = $('.js-header').hasClass('hd-white');
      //header 색상이 흰색이 아닐때 (첫번째 섹션일 때)
      if (headerColor == false) {
        // 두번째 섹션으로 내릴 경우
        if (nextIndex == 2 && direction == 'down') {
          $('.js-header').toggleClass('hd-white');
        }
      }
    }
  });

  var hdMenu = $('.hd-menu').hasClass('active');
  var hdColor = $('.js-header').hasClass('hd-white');
  var firstSection = $('.section.active').hasClass('first');
  var winWidth = $(window).width();
  //var hdMenuArea = $('.hd-menu-area').hasClass('active');

  //첫번째 섹션일때만
  if (hdColor == true && firstSection == true) {
    $('.js-header').removeClass('hd-white');

    $(window).on('load resize', function () {
      if (winWidth < 990) {
        $(this).addClass('hd-white');
      }
      else if (winWidth > 990) {
        $(this).removeClass('hd-white');
        $('.js-header').mouseenter(function () {
          $(this).addClass('hd-white');
        }).mouseleave(function () {
          $(this).removeClass('hd-white');
        });
      }
    });

  }
  //첫번째 섹션 이후로는~
  else if (firstSection == false) {
    $('.js-header').addClass('hd-white');
    //첫번째 섹션 아닐때는 mouse leave white add
    $('.js-header').mouseleave(function () {
      $(this).addClass('hd-white');
    })
  }

  //모바일메뉴 열기 버튼
  $('.ui.js-hd-btn').click(function () {
    if (hdMenu == false) {
      $('.header').addClass('active');
      //$('.hd-menu-area').addClass('active');
    }
  });
  //모바일 메뉴 닫기 버튼
  $('.user-btn__item.close').click(function () {
    if (hdMenuArea == true) {
      $('.header').removeClass('active');
      $('.hd-menu-area').removeClass('active');
    }
  });

  //리사이즈될때마다,
  $(window).on('load resize', function () {
    if (winWidth > 990) {
      $('.hedaer').removeClass('active');
    }
    else if (winWidth < 990) {
      $('.hedaer').addClass('active');
    }
  })

  //언어 선택 드롭다운
  $('.hd-lang .ui.dropdown').dropdown();

  //모바일 언어 드롭다운
  $('.mo-hd-lang.ui.dropdown').dropdown();

  //패밀리사이트 드롭다운
  $('.family-site__list .ui.dropdown').dropdown();
});


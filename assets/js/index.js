$(document).ready(function () {
  $('.js-fullpage-wrap').fullpage({
    navigation: true,
    lockAnchors: false,

    //섹션을 불러오기 전에 콜백
    afterLoad: function (origin, destination, direction) {
      //메뉴가 흰색일 때 (true)
      var hdColor = $('.js-header').hasClass('hd-white');
      //보고있는 섹션이 첫번째 섹션인지 체크
      var firstSection = $('.section.active').hasClass('first');
      //첫번째 섹션일때만
      if (hdColor == true && firstSection == true) {
        $('.js-header').removeClass('hd-white');
        //header hover, white add/remove
        $('.js-header').mouseenter(function () {
          $(this).addClass('hd-white');
        }).mouseleave(function () {
          $(this).removeClass('hd-white');
        });
      }
      //첫번째 섹션 이후로
      else if (firstSection == false) {
        $('.js-header').addClass('hd-white');
        //첫번째 섹션 아닐때는 mouse leave white add
        $('.js-header').mouseleave(function () {
          $(this).addClass('hd-white');
        })
      }
    },
    //섹션을 이동할때 마다, 콜백
    onLeave: function (index, nextIndex, direction) {
      var headerColor = $('.js-header').hasClass('hd-white');
      if (headerColor == false) {
        // 두번째 섹션으로 내릴 경우
        if (nextIndex == 2 && direction == 'down') {
          $('.js-header').toggleClass('hd-white');
        }
      }
    }
  });

  //언어 선택 드롭다운
  $('.hd-lang .ui.dropdown')
    .dropdown();
  //패밀리사이트 드롭다운
  $('.family-site__list .ui.dropdown')
    .dropdown();
});


$(document).ready(function () {

    //풀페이지
    $('.fullpage-wrap').fullpage({
        navigation: true,
        lockAnchors: false,
        swipe: true,
        resetSliders: false,
        //scrollBar: true,


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
                //애니메이션(첫번째 섹션만 해당)
                $('.animation.from-right-out').removeClass('from-right-out').addClass('from-right-in');
                $('.animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
            }
            // 첫번째 섹션이 아닐 때,
            else if (origin != 'slide1' || direction == 'down') {
                $('.js-header').addClass('hd-white');
                //두번째 섹션에서만
                if (origin == 'slide2') {
                    $('.animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.from-left-out').removeClass('from-left-out').addClass('from-left-in');
                }
                else if (origin == 'slide3') {
                    $('.animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.from-right-out').removeClass('from-right-out').addClass('from-right-in');
                }
                else if (origin == 'slide4') {
                    $('.animation.scale-down-out').removeClass('scale-down-out').addClass('scale-down-in');
                    $('.animation.from-right-out').removeClass('from-right-out').addClass('from-right-in');
                }
                else if (origin == 'slide5') {
                    $('.animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.scale-down-out').removeClass('scale-down-out').addClass('scale-down-in');

                }
                else if (origin == 'slide6') {
                    $('.animation.from-bottom-out').removeClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.from-left-out').removeClass('from-left-out').addClass('from-left-in');
                }
            }
        },
        //사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백
        onLeave: function (index, origin, direction) {
            //첫번째 섹션일 때,
            if (origin == '1') {
                $('.js-header').removeClass('hd-white');
                //첫번째 섹션으로 스크롤을 올렸을 때,
                if (direction == 'up') {
                    $('.animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.from-right-in').removeClass('from-right-in').addClass('from-right-out').addClass('from-right-in');
                }
            }
            //첫번째 섹션이 아닐 때,
            else if (origin != '1') {
                $('.js-header').mouseleave(function () {
                    $(this).addClass('hd-white');
                });

                if (origin == '2') {
                    $('.animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
                }
                else if (origin == '3') {
                    $('.animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.from-right-in').removeClass('from-right-in').addClass('from-right-out').addClass('from-right-in');
                }
                else if (origin == '4') {
                    $('.animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out').addClass('scale-down-in');
                    $('.animation.from-right-in').removeClass('from-right-in').addClass('from-right-out').addClass('from-right-in');
                }
                else if (origin == '5') {
                    $('.animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.scale-down-in').removeClass('scale-down-in').addClass('scale-down-out').addClass('scale-down-in');
                }
                else if (origin == '6') {
                    $('.animation.from-bottom-in').removeClass('from-bottom-in').addClass('from-bottom-out').addClass('from-bottom-in');
                    $('.animation.from-left-in').removeClass('from-left-in').addClass('from-left-out').addClass('from-left-in');
                }
            }
        }
    });

    var hdMenu = $('.hd-menu-area').hasClass('hidden');

    //모바일메뉴 열기 버튼l
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


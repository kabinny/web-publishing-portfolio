//javascript

//header search
$('.gnb button').on('click', searchFadeIn);

function searchFadeIn () {
    $('.search').fadeIn(500);
}

$('#close-btn').on('click', searchFadeOut);

function searchFadeOut () {
    $('.search').fadeOut(500);
}

$(document).on('keydown', pushEscKey);

function pushEscKey(event) {
    if(event.which=='27') { // ESC KEY
        $('.search').fadeOut(500);
    };
};

//scrollHandler
function scrollHandler() {
    var windowBottom = $(window).scrollTop() + $(window).height();

    //메인 섹션-첫번째 섹션에 아이디 값을 주었다- 넘어가거나 페이지 끝에 도착하면 go to top 버튼 보이기
	if ( $(window).scrollTop() > $('#main').outerHeight() || windowBottom == $(document).height() ) {
		$('.go_to_top').fadeIn();
	} else {
		$('.go_to_top').fadeOut();
	}
}

$(window).on('scroll', scrollHandler);

// 처음 로딩될 때 호출
scrollHandler();

//go to top 눌렀을 때 위로 스르륵 올라가기
$('.go_to_top').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000);
});


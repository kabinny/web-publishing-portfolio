//scroll
function scrollJoin() {
	var windowBottom = $(window).scrollTop() + $(window).height();
    
    //teas
    var teasHalf = $('.teas').position().top + $('.teas').outerHeight()/4;
    if (teasHalf < windowBottom) {
        $('.teas ul li').addClass('active');
        $('.teas ul li').css('opacity',1);
    };
};

$(window).on('scroll', scrollJoin);

// 처음 로딩될 때 호출
scrollJoin();
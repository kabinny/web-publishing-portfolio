//scroll event start
//each unit ready -> active
function scrollHandler() {
    'use strict';
    var delayposition = 200,
        windowBottom = $(window).scrollTop() + $(window).height() - delayposition;
    
	$('.unit.ready').each(function () {
        var unitReady = $(this),
            unitHalf = unitReady.offset().top;
		if (unitHalf < windowBottom) {
			$(this).addClass('active');
            $(this).removeClass('ready');
		}
	});
    
    //main object falling
    if ($(window).scrollTop() === 0) {
        $('#main p.img, #main .link button').addClass('show');
    } else {
        $('#main p.img, #main .link button').removeClass('show');
    }

}

$(window).on('scroll', scrollHandler);

scrollHandler();

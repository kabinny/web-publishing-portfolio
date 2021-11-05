//common script

//menu slide
$(document).ready(function () {
    'use strict';
    var mainWidth = $(window).width();
    if (mainWidth > 1024) {
        $('.gnb>ul>li:nth-child(2)').mouseover(function() {
            $(this).children('.submenu').stop().slideDown();
        });
        $('.gnb>ul>li:nth-child(2)').mouseleave(function() {
            $(this).children('.submenu').stop().slideUp();
        });
    } else {
        $('.gnb button.mobile').click(function() {
            $('.submenu').slideToggle();
            $('.gnb button.mobile').toggleClass('up');
        });
    }  
});

//scrollHandler
function scrollHandler() {
    var windowBottom = $(window).scrollTop() + $(window).height();

    //show go-to-top,go-back button / header size
	if ( $(window).scrollTop() > $('#main').outerHeight()/2 || windowBottom == $(document).height() ) {
		$('.go_to_top').fadeIn();
        $('.go_back').fadeIn();
        $('header').addClass('on_scroll');
	} else {
		$('.go_to_top').fadeOut();
        $('.go_back').fadeOut();
        $('header').removeClass('on_scroll');
	}
    
    //header scroll bar
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    
    //scrollTop==0 : active->ready
    //when screen capture, comment this
    if ($(window).scrollTop() == 0) {
        $('.unit').removeClass('active');
        $('.unit').addClass('ready');
    }
};

$(window).on('scroll', scrollHandler);
scrollHandler(); //call first loading

//index .gnb scroll
$('.gnb>ul>li>a').on('click', function() {
    var id_text = '#' + $(this).text().toLowerCase();
    $('html,body').animate({scrollTop: $(id_text).offset().top}, 800);
});

//go-to-top
$('.go_to_top, #index_h1').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 800);
});

//mobile menu
$('.open').on('click', function (){
    'use strict';
    $('.open').toggleClass('on');
    $('.gnb_mo').toggleClass('on');
});
$('header .gnb_mo button.mobile').on('click', function(){
    'use strict';
    $('header .gnb_mo button.mobile').toggleClass('up'); 
    $('header .gnb_mo>ul .submenu').slideToggle();
});

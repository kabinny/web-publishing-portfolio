//index .gnb scroll
$('.gnb>ul>li>a').on('click', function() {
    'use strict';
    var id_text = '#' + $(this).text().toLowerCase();
    $('html,body').animate({scrollTop: $(id_text).offset().top}, 900);
});

//main object click
$(function () {
    'use strict';
    $('.frame').on('click', function() {
        $('html,body').animate({scrollTop: $('#about').offset().top}, 500);
    });
    $('.pc').on('click', function () {
        $('html,body').animate({scrollTop: $('#gallery').offset().top}, 900);
    });
    $('.phone').on('click', function () {
        $('html,body').animate({scrollTop: $('#contact').offset().top}, 1000);
    });
    
    
    //mouseover img change
    $('.mug, .frame, .pc, .phone, .light').on('mouseover', function() {
        var thisDiv = $(this),
            attrClass = thisDiv.attr('class');
        thisDiv.find('img').attr('src', 'img/' + attrClass + '_h.svg');
    });
    $('.mug, .frame, .pc, .phone, .light').on('mouseout', function() {
        var thisDiv = $(this),
            attrClass = thisDiv.attr('class');
        thisDiv.find('img').attr('src', 'img/' + attrClass + '.svg');
    });

});

//h2 effect
//textAni('.h2-effect', 'fly-in');

function textAni(selector, className) {
    'use strict';
    var text = $(selector).text(),
        numText = text.length, 
        newHtml = '',
        effectType = className;
    
    for (var i = 0; i < numText; i++) {
        if (text[i] === ' ') {
            newHtml += '<span class="blank"></span>';
        } else {
            newHtml += '<span>' + text[i] + ' </span>';
        }
    }
    $(selector).html(newHtml);
    $(selector).find('span').each(function(i) {
        setTimeout(function() {$(selector).find('span:eq(' + i + ')').addClass(effectType);}, (i * 20));
    });
}


//about h2 once
function scrollAboutH2() {
  var hT = $('#about h2').offset().top,
      hH = $('#about h2').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
      $('#about h2').addClass('h2-effect');
      textAni('#about .h2-effect', 'fly-in');
      window.removeEventListener("scroll", scrollAboutH2);
  }
}
window.addEventListener("scroll", scrollAboutH2);
scrollAboutH2();

//gallery h2 once
function scrollGalleryH2() {
  var hT = $('#gallery h2').offset().top,
      hH = $('#gallery h2').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
      $('#gallery h2').addClass('h2-effect');
      textAni('#gallery .h2-effect', 'fly-in');
      window.removeEventListener("scroll", scrollGalleryH2);
  }
}
window.addEventListener("scroll", scrollGalleryH2);
scrollGalleryH2();

//contact h2 once
function scrollConatactH2() {
  var hT = $('#contact h2').offset().top,
      hH = $('#contact h2').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
      $('#contact h2').addClass('h2-effect');
      textAni('#contact .h2-effect', 'fly-in');
      window.removeEventListener("scroll", scrollConatactH2);
  }
}
window.addEventListener("scroll", scrollConatactH2);
scrollConatactH2();


//index gallery swiper
//first loading 
$(function() {
        new Swiper('.swiper-container', {
            slidesPerView : 3, 
            spaceBetween : 40, 
            slidesPerGroup : 3, 
            loopFillGroupWithBlank : true,

            loop : true, 

            pagination : { 
            el : '.swiper-pagination',
            clickable : true, 
            },
            navigation : { // 네비게이션
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    slidesPerGroup : 1,
                },
                425: {
                    slidesPerView: 2,
                    slidesPerGroup : 2,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup : 3,
                },
              }
        });
});


//gallery web_page hover
$(function() {
    $('#web_page .swiper-slide .box').on('mouseover', function(){
        var imgSrc = $(this).find('img').attr('src').substr(0,10) + '_m.png';
        $(this).find('img').attr('src', imgSrc);
    });
    $('#web_page .swiper-slide .box').on('mouseout', function(){
        var imgSrcOrg = $(this).find('img').attr('src').substr(0,10) + '.svg';
        $(this).find('img').attr('src', imgSrcOrg);
    });
});

//gallery graphic click more
$(document).ready(function (e){

    $("#graphic .new_p").on("click", function(){
       var path = $(this).parent().find('.box img').attr('src').substr(0,13) + '_o.png';
        showImage(path);
    });

    function showImage(fileCallPath){

        $(".bigPictureWrapper").css("display","flex").show();


        $(".bigPicture").css({
            "background-image":"url(" + fileCallPath + ")",
            "background-size":"contain",
            "background-repeat":"no-repeat",
            "background-position":"center"
        }).animate({width:'100%', height: '100%'}, 500);


      };//end fileCallPath

    $(".bigPictureWrapper").on("click", function(e){
        $(".bigPicture").animate({width:'0%', height: '0%'}, 500);
        setTimeout(function(){
          $('.bigPictureWrapper').hide();
        }, 500);
      });//end bigWrapperClick event
});


//////////////////////////////////////////
//scroll event start
//each unit ready -> active
function scrollHandler() {
    var delayposition = 180;
	var windowBottom = $(window).scrollTop() + $(window).height() - delayposition;
    
	$('.unit.ready').each(function() {
        var unitReady = $(this);
        var unitHalf = unitReady.offset().top;
		if (unitHalf < windowBottom) {
			$(this).addClass('active');
            $(this).removeClass('ready');
		}
	});
    
    //main object falling
    if ($(window).scrollTop() == 0) {
        $('.mug, .frame, .pc, .phone, .light').find('img').addClass('falling');
    } else {
        $('.mug, .frame, .pc, .phone, .light').find('img').removeClass('falling');
    }
    //#about .education .bar
    if ( windowBottom > $('.education .bar').offset().top && $('#main').width() > 425 ) {
        $('.education .bar').css('width','100%');
    }
    if ( windowBottom > $('.education .bar').offset().top && $('#main').width() < 426 ) {
        $('.education .bar').css('height','80%');
    }
    //#about .certificate :after
    if ( windowBottom > $('.certificate h3').offset().top ) {
        $('.certificate').addClass('vertical-line');
    };
    //#gallery .pj3 :after
    if ( windowBottom > $('.pj3 h3').offset().top ) {
        $('.pj3').addClass('vertical-line');
    }
}

$(window).on('scroll', scrollHandler);

scrollHandler();
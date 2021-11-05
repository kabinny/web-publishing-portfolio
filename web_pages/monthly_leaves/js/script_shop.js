//script shop

//airplane
$('.free').on('mouseenter',mouseEnterFree);
$('.free').on('mouseleave',mouseLeaveFree);
$('.free').on('click',mouseEnterFree);

function mouseEnterFree() {
    $('.free i').removeClass('fa-flip-horizontal');
    $('.free i').css('margin-left','70%');
    $('.free i').css('transition','all 0.8s');
}

function mouseLeaveFree() {
    $('.free i').addClass('fa-flip-horizontal');
    $('.free i').css('transition','all 0.2s');
    setTimeout(reset, 200);
};
function reset () {
    $('.free i').css('margin-left','-70%');
    $('.free i').css('transition','all 0.8s');
    setTimeout(function(){
        $('.free i').removeClass('fa-flip-horizontal');
        $('.free i').css('transition','all 0.2s');
    }, 800);
}

//sns, shop
function scrollShop() {
	var windowBottom = $(window).scrollTop() + $(window).height();
    
    //sns image
    var snsHalf = $('.sns').position().top + $('.sns ul li:first-child').outerHeight();
    if (snsHalf < windowBottom) {
        $('.sns ul li').addClass('active');
        $('.sns ul li').css('opacity',1);
    };
    
    //product li
    $('.product .row').each(function() {
        var rowNow = $(this);
        //각각ul에서 이미지 높이만큼 지나면 클래스 추가
        var productHalf = rowNow.position().top + rowNow.find('p.img').outerHeight();
        if (productHalf < windowBottom) {
                $(this).find('li').addClass('active');
                $(this).find('li').css('opacity',1);
            };
    });
};

$(window).on('scroll', scrollShop);

// 처음 로딩될 때 호출
scrollShop();
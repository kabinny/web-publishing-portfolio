//index main title typewriter effect
var i = 0;
var txt = 'TEA OF THE MONTH - MONTHLY LEAVES'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


//scroll
function scrollIndex() {
	var windowBottom = $(window).scrollTop() + $(window).height();
    
    //.works 모바일에서도 바로 보이게 하려고 첫번째 li높이만큼만 지나면 실행.
    var workHalf = $('.works').position().top + $('.works ul li:first-child').outerHeight();
    if (workHalf < windowBottom) {
        $('.works ul li').addClass('active');
        $('.works ul li').css('opacity',1);
    };
    
    //each
    var eachHalf = $('.each').position().top + $('.each ul li:first-child').outerHeight()/2;
    if (eachHalf < windowBottom) {
        $('.each ul li').addClass('active');
        $('.each ul li').css('opacity',1);
    };
    
    //price
    var priceHalf = $('.price').position().top + $('.price ul li:first-child').outerHeight()/2;
    if (priceHalf < windowBottom) {
        $('.price ul li').addClass('active');
        $('.price ul li').css('opacity',1);
    };
    
    //teas
    var teasHalf = $('.teas').position().top + $('.teas').outerHeight()/4;
    if (teasHalf < windowBottom) {
        $('.teas ul li').addClass('active');
        $('.teas ul li').css('opacity',1);
    };
};

$(window).on('scroll', scrollIndex);

// 처음 로딩될 때 호출
scrollIndex();

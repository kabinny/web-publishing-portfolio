//circle start
var el = $('.circle'),
    inited = false;

el.appear({ force_process: true });

el.on('appear', function() {
  if (!inited) {
//    el.circleProgress({ value: 0.7 });
      
    //--------------------------------
//    $('.circle').circleProgress({
//
//        size: 134,
//        fill: '#ec8456',
//        startAngle: -Math.PI / 2,
//        thickness: 12,
//        duration: 3200
//    });
    
    var mainWidth = $('#main').width();
    if ( mainWidth > 1024 ) {
        $('.circle').circleProgress({
            size: 134,
            fill: '#ec8456',
            startAngle: -Math.PI / 2,
            thickness: 12,
            duration: 3200
        });
    } else if ( mainWidth > 768 ) {
         $('.circle').circleProgress({
            size: 100,
            fill: '#ec8456',
            startAngle: -Math.PI / 2,
            thickness: 10,
            duration: 3200
        });
    } else if ( mainWidth > 425 ) {
         $('.circle').circleProgress({
            size: 80,
            fill: '#ec8456',
            startAngle: -Math.PI / 2,
            thickness: 7,
            duration: 3200
        });
    } else {
        $('.circle').circleProgress({
            size: 134,
            fill: '#ec8456',
            startAngle: -Math.PI / 2,
            thickness: 12,
            duration: 3200
        });
    }
  
    $(window).resize(function() { 
        if($(window).width() > 1024) {
            $('.circle').circleProgress({
                size: 134,
                fill: '#ec8456',
                startAngle: -Math.PI / 2,
                thickness: 12,
                duration: 3200
            });
        } else if ($(window).width() > 768) {
            $('.circle').circleProgress({
                size: 100,
                fill: '#ec8456',
                startAngle: -Math.PI / 2,
                thickness: 10,
                duration: 3200
            });
        } else if ($(window).width() > 425) {
            $('.circle').circleProgress({
                size: 80,
                fill: '#ec8456',
                startAngle: -Math.PI / 2,
                thickness: 7,
                duration: 3200
            });
        } else {
            $('.circle').circleProgress({
                size: 134,
                fill: '#ec8456',
                startAngle: -Math.PI / 2,
                thickness: 12,
                duration: 3200
            });
        };
    });
      
    var circleSelect = $('.skill .row .circle');
      
    $(circleSelect).eq(0).circleProgress({
        value: 0.8,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<span>%</span>');
    });
      
      $(circleSelect).eq(1).circleProgress({
        value: 0.95,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(95 * progress) + '<span>%</span>');
    });

    $(circleSelect).eq(2).circleProgress({
        value: 0.8,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<span>%</span>');
    });

    $(circleSelect).eq(3).circleProgress({
        value: 0.8,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<span>%</span>');
    });

    $(circleSelect).eq(4).circleProgress({
        value: 0.9,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<span>%</span>');
    });

    $(circleSelect).eq(5).circleProgress({
        value: 0.8,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<span>%</span>');
    });

    $(circleSelect).eq(6).circleProgress({
        value: 0.5,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(50 * progress) + '<span>%</span>');
    });

    $(circleSelect).eq(7).circleProgress({
        value: 0.8,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<span>%</span>');
    });

   //--------------------------------   
      
      
    inited = true;
  }
});


// fade in out
$(function(){
	$('body').fadeMover();
});

// menu hover func
$(function(){
	$('#nav a').hover(function(){
		$(this).css("color", "black");
	}, function(){
		$(this).css("color", "#4c4c4c");
		});
});

// fixed menu
$(function() {
  var $win = $(window),
      $main = $('.container'),
      $nav = $('#nav'),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';
  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
    } else {
      $nav.removeClass(fixedClass);
    }
  });
});

// smooth scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 50;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// lazy load
$(function(){
	$('.works-img').lazyload({
		effect: 'fadeIn',
		effectspeed: 1000,
		threshold: 1
	});
});

// instagram
(function($){
    var responsive = function(){
        $('.oembed-instagram iframe').each(function(){
            var vertical = 114;
            var horizontal = 16;
            var height = $(this).width() - horizontal + vertical;
            $(this).css('height', height);
        });
    }

    $(window).resize(function(){
        responsive();
    });

    responsive();
})(jQuery);


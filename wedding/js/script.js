
$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});

$(function() {
  
  // contact form animations
  $('#contact1').click(function() {
    $('#contactForm1').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container1 = $("#contactForm1");

    if (!container1.is(e.target) // if the target of the click isn't the container...
        && container1.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container1.fadeOut();
    }
  });
  
});

$(function() {
  
  // contact form animations
  $('#contact2').click(function() {
    $('#contactForm2').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container2 = $("#contactForm2");

    if (!container2.is(e.target) // if the target of the click isn't the container...
        && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container2.fadeOut();
    }
  });
  
});

$(function() {
  
  // contact form animations
  $('#contact3').click(function() {
    $('#contactForm3').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container3 = $("#contactForm3");

    if (!container3.is(e.target) // if the target of the click isn't the container...
        && container3.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container3.fadeOut();
    }
  });
  
});



(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -57
    });



    // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + 500 && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
            });
        } else if ($(this).scrollTop() <= pos.top + 500 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
            });
        }
    });




    // Hero resize

    function mainHeroResize() {
        $(".main-slider .slides li").css('height', $(window).height());
        $(".main-slider-video .slides li").css('height', $(window).height());
    }

    $(function() {
            mainHeroResize()
        }),
        $(window).resize(function() {
            mainHeroResize()
        });




    // Slider

    $('.main-slider').flexslider({
        animation: "fade",
        slideshow: true,
        directionNav: true,
        controlNav: false,
        pauseOnAction: false,
        animationSpeed: 500
    });
    
    $('.main-slider-video').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: true,
        controlNav: false,
        pauseOnAction: false,
        animationSpeed: 500
    });


    $('.review-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: false,
        controlNav: true,
        pauseOnAction: false,
        animationSpeed: 500
    });




    // Mobile menu

    var mobileBtn = $('.mobile-but');
    var nav = $('.main-nav ul');
    var navHeight = nav.height();

    $(mobileBtn).on("click", function() {
        $(".toggle-mobile-but").toggleClass("active");
        nav.slideToggle();
        $('.main-nav li a').addClass('mobile');
        return false;


    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && nav.is(':hidden')) {
            nav.removeAttr('style');
            $('.main-nav li a').removeClass('mobile');
        }

    });

    $('.main-nav li a').on("click", function() {
        if ($(this).hasClass('mobile')) {
            nav.slideToggle();
            $(".toggle-mobile-but").toggleClass("active");
        }

    });



    // Append images as css background

    $('.background-img').each(function() {
        var path = $(this).children('img').attr('src');
        $(this).css('background-image', 'url("' + path + '")').css('background-position', 'initial');
    });




    // Gallery filter

	var filterNav = $('.block-filter li a'); 
    filterNav.on("click", function() {

        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');



        var filters = $(this).attr('data-filter');
        $(this).closest('.gallery').find('.block-gallery').removeClass('disable');

        if (filters !== 'all') {




            var selected = $(this).closest('.gallery').find('.block-gallery');

            for (var i = 0; i < selected.length; i++) {

                if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
                }

            }

        }
        
        return false;


    });


    // Instagram photo rotator

    var instaFeed = new Instafeed({
        get: 'user',
        userId: '6363411553',
        accessToken: '6363411553.27b3393.c0e709a294df490c97c0252c2418ef74',
        limit: 30,
        resolution: 'standard_resolution',
        template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}"/></a></li>',
        after: function() {
            $('#block-stream').gridrotator({
                rows: 2,
                columns: 9,
                interval: 3000,
                preventClick: false,
                w1024: {
                    rows: 2,
                    columns: 4
                },
                w768: {
                    rows: 2,
                    columns: 4
                },
                w480: {
                    rows: 2,
                    columns: 2
                },
                w320: {
                    rows: 2,
                    columns: 4
                },
                w240: {
                    rows: 2,
                    columns: 4
                },
            });
        }
    });

    instaFeed.run();


})(jQuery);
(function($) {

    "use strict";

    // caching selectors
    var mainWindow           = $(window),
        mainHeader           = $('.logo-nav-col'),
        mainBody             = $('body'),
        preLoader            =  $('#preloader'),
        mainStatus           = $('#status'),
        scrollToUp           = $('.scrollup'),
        mainPreloader        = $('#preloader'),
        defaultCarousel      = $('.slider-carousel-col'),
        domainCarousel       = $('.domain-carousel'),
        counter              = $('.counter'),
        sfMenu               = jQuery(".sf-menu"),
        sfMenuExample        = jQuery("#sf-example"),
        accordionToggle      = $('.accordion-toggle'),
        testMonialCarousel   = $('.main-carousel');

    mainWindow.on('load', function() {

        // Preloader
        mainStatus.fadeOut(); // will first fade out the loading animation
            preLoader.delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            mainBody.delay(350).css({
            'overflow': 'visible'
        });

        //Sticky header
         mainWindow.on("scroll", function() {
            if ($(this).scrollTop() > 98){  
                mainHeader.addClass("sticky");
                mainBody.addClass("sticky");
                scrollToUp.show();
            }
            else{
                mainHeader.removeClass("sticky");
                mainBody.addClass("sticky");
                scrollToUp.hide();
            }
        });

         //Super-Fish  Menu
        sfMenu.slicknav({
            delay:       1000,                            // one second delay on mouseout
            animation:   {opacity:'show', height:'show'},  // fade-in and slide-down animation
            speed:       'fast',                          // faster animation speed
            autoArrows:  false
        });

        //Default Slider
        defaultCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            responsiveClass: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });

        //Slider Animation Script
        defaultCarousel.on('translate.owl.carousel', function () {
            $('.text-item h2').removeClass('fadeInRight animated').hide();
            $('.text-item h3').removeClass('fadeInLeft animated').hide();
            $('.text-item p').removeClass('fadeInDown animated').hide();
        });

        defaultCarousel.on('translated.owl.carousel', function () {
            $('.text-item h2').addClass('fadeInRight animated').show();
            $('.text-item h3').addClass('fadeInLeft animated').show();
            $('.text-item p').addClass('fadeInDown animated').show();
        });
        // Counter Script
        counter.counterUp({
         delay: 10,
         time: 1000
        });

         // Superfish Menu
        sfMenuExample.superfish({
            pathLevels: 1,
            delay: 1000,
            animation: {opacity: 'show'},
            animationOut: {opacity: 'hide'},
            speed: 'fast',
            speedOut: 'fast',
            cssArrows: true,
            disableHI: false,
        });

        // accordian
        accordionToggle.on('click', function(){
            $(this).closest('.panel-group').children().each(function(){
            $(this).find('>.panel-heading').removeClass('active');
             });
            $(this).closest('.panel-heading').toggleClass('active');
        });

        // Testimonial Crousel
        testMonialCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            navigation:true, 
            responsiveClass: true,
            margin: 25,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true

                },
                600: {
                    items: 2,
                    nav: false,
                    dots: true
                },
                992: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots: false,
                },               
                1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    dots: false
                }
            }
        });

        //scrollTop
        mainWindow.on("scroll",function() {
            if ($(this).scrollTop() > 100) {
                scrollToUp.fadeIn();
            }else {
                scrollToUp.fadeOut();
            }
        });

        scrollToUp.on("click",function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });

})(jQuery);
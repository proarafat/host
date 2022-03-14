(function ($) {
    "use strict";

    var langIcon = $('header .langIcon'),
        lang = $('header .lang');

    langIcon.on('click', function () {
        lang.toggleClass('clicked');
    });
    $('header .lang li').on('click', function () {
        lang.removeClass('clicked');
    });
    $('header .lang').on('mouseleave', function () {
        lang.removeClass('clicked');
    });



    var loginBtn = $('header .clientAreaLi, .clientLogin .closeBtn'),
        clientForm = $('header .clientLogin form');

    loginBtn.on('click', function () {
        clientForm.toggleClass('clicked');
        window.getSelection().removeAllRanges();
    });



    var domainFormH = $('.domainForm').height(),
        domainTxt = $('.domainTxt'),
        domainTxtH = domainTxt.height(),
        domainTxtP = (domainFormH - domainTxtH) / 2;
    domainTxt.css('padding-top', domainTxtP + 'px');

    $(window).on('load', function () {
        var ctaImgOne = $('.ctaImgOne'),
            ctaImgOneH = ctaImgOne.height(),
            ctaRight = $('.ctaRight');
        ctaRight.height(ctaImgOneH);

        var ctaImgTwo = $('.ctaImgTwo'),
            ctaImgTwoH = ctaImgTwo.height(),
            ctaLeft = $('.ctaLeft');
        ctaLeft.height(ctaImgTwoH);
    });

    var langOpt = $('.lang li'),
        langTxt = $('.langIcon .langCode');
    langOpt.on('click', function () {
        var langCode = $(this).attr('data-code');
        langTxt.text(langCode);
    });




    var subMenu = $('nav .sub-menu');

    if ($(subMenu.length)) {
        subMenu.closest('li').addClass('subPar');
    }

    var megaMenu = $('nav .mega-menu');

    if ($(megaMenu.length)) {
        megaMenu.closest('li').addClass('subPar');
    }



    $('.subPar a').each(function () {
        $(this).on('click', function () {
            $(this).parent('.subPar').toggleClass('active');
        })
    });



    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });


    $('.singleDomain a.cartBtn').on('click', function () {
        $(this).parent('.singleDomainRight').parent('li.singleDomain').toggleClass('active');
        $(this).toggleClass('added');
    });


    $('.btnCart.Btn').on('click', function () {
        $(this).toggleClass('added');
    });


    var windowWidth = $(window).width();
    if (windowWidth > 767) {
        var cursorWidthxx = "14px";
    } else {
        var cursorWidthxx = "10";
    }



    $('.duration span').on('click', function () {
        $(this).siblings('ul').toggleClass('active');
        $(this).siblings('ul').mouseleave(function () {
            $(this).removeClass('active');
        });
    });


    $('ul.cartOpt li').on('click', function () {
        $(this).parent('ul').removeClass('active');
        var cartCode = $(this).attr('data-code');
        var cartPrice = $(this).attr('data-price');
        $(this).parent('ul').siblings('span').text(cartCode);
        $(this).parent('ul').parent('.duration').siblings('.total').text(cartPrice);
    });


    $('span.closeIcon').on('click', function () {
        $(this).parent('.product').parent('li').remove();
    });



    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


    //	accrodion

    var dd = $('dd');
    dd.filter(':nth-child(n+4)').hide();
    $('dl.accordion').on('click', 'dt', function () {
        $(this)
            .addClass('active')
            .siblings('dt')
            .removeClass('active');

        $(this)
            .next()
            .slideDown(200)
            .siblings('dd')
            .slideUp(300);

    });



    if ($.fn.waypoint) {
        $('.animated').css('opacity', '0');
        $('.animated').waypoint(function () {
            $(this).addClass('fadeInUp');
            $('.animated.fadeInUp').css({
                opacity: 1
            });
        }, {
            offset: '90%'
        });
    }


    $(window).on('load', function () {
        if ($.fn.owlCarousel) {
            $('.tstSlider').owlCarousel({
                items: 2,
                loop: true,
                navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
                nav: true,
                dots: false,
                smartSpeed: 600,
                autoplayTimeout: 7000,
                responsive: {
                    0: {
                        items: 1
                    },
                    991: {
                        items: 2
                    }
                }
            });

            var homeSlider1 = $('.homeSlider1');
            homeSlider1.owlCarousel({
                items: 1,
                autoplay: true,
                loop: true,
                navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
                nav: true,
                dots: false,
                smartSpeed: 50,
                responsive: {
                    0: {
                        smartSpeed: 500
                    },
                    992: {
                        smartSpeed: 50
                    }
                }
            });

            if (windowWidth > 991) {
                homeSlider1.on('translate.owl.carousel', function () {
                    homeSlider1.find('.owl-item .homeImgTable').removeClass('fadeInLeft animated').fadeOut(0);
                    homeSlider1.find('.owl-item .homeContent > *').removeClass('fadeInRight animated').css('opacity', '0');
                });
                homeSlider1.on('translated.owl.carousel', function () {
                    homeSlider1.find('.owl-item.active .homeImgTable').addClass('fadeInLeft animated').fadeIn(0);
                    homeSlider1.find('.owl-item.active  .homeContent > *').addClass('fadeInRight animated').css('opacity', '1');
                });
            }


            if (windowWidth > 1199) {
                var arrowPos = (windowWidth - 1140) / 2;
            } else if (windowWidth > 991 && windowWidth < 1200) {
                var arrowPos = (windowWidth - 940) / 2;
            } else if (windowWidth > 767 && windowWidth < 992) {
                var arrowPos = (windowWidth - 720) / 2;
            } else {
                $('.homeSlider1 .owl-nav div').remove();
            }

            $('.homeSlider1 .owl-nav div.owl-next i').css('right', '-' + arrowPos + 'px');
            $('.homeSlider1 .owl-nav div.owl-prev i').css('left', '-' + arrowPos + 'px');

        }

    });


    $(document).ready(function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
//        //OnePage Nav for Section smooth Scroll when click the menu.
//        $('#preview-hero-btn').onePageNav({
//            currentClass: 'current',
//            changeHash: false,
//            scrollSpeed: 1000,
//        });


        // this code is for isotope 
        var preview_project = $(".filter-tabs li");
        preview_project.on('click', function () {

            preview_project.removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".items-container").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                }
            });

            //            $(".load-more-projects-wrap").hide();
        });
        if ($.fn.imagesLoaded) {
            $('.items-container').imagesLoaded(function () {
                // images have loaded
            });
        }

        //        $("#light-all-projects-filter").on('click', function () {
        //            $(".load-more-projects-wrap").show();
        //        });


    });

})(jQuery);
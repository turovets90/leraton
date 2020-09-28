$(document).ready(function(){


    /* перевод картинки svg в код */
    $('.icon img, img.icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    /* end перевод картинки svg в код */


    $('.nav .arrow').click(function(){
        $(this).toggleClass('act');
        $(this).next().slideToggle();
    });

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            //fade:true,
            //autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
            //dotsClass: 'custom_paging',
            responsive: [
                {
                    breakpoint: 767,

                    settings: {
                        vertical:false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });
    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });



    $('.amount .down').click(function () {
        var $input = $(this).parent().prev();
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().prev();
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $('.desktop_hits_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
    });

    $('.hits_prev_d').click(function(){
        $('.desktop_hits_slider').slick('slickPrev');
    });
    $('.hits_next_d').click(function(){
        $('.desktop_hits_slider').slick('slickNext');
    });


    $('.mobile_hist_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.hits_prev_m').click(function(){
        $('.mobile_hist_slider').slick('slickPrev');
    });
    $('.hits_next_m').click(function(){
        $('.mobile_hist_slider').slick('slickNext');
    });



    $('.desktop_new_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
    });

    $('.new_prev_d').click(function(){
        $('.desktop_new_slider').slick('slickPrev');
    });
    $('.new_next_d').click(function(){
        $('.desktop_new_slider').slick('slickNext');
    });


    $('.mobile_new_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.new_prev_m').click(function(){
        $('.mobile_new_slider').slick('slickPrev');
    });
    $('.hits_next_m').click(function(){
        $('.mobile_new_slider').slick('slickNext');
    });


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        var header_bottom = $('.header_bottom').outerHeight();
        $('header').next().css({'margin-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height-header_bottom) {
                $('header').addClass('fixed');
            } else /*if($(this).scrollTop() < 1)*/{
                $('header').removeClass('fixed');
            }
        });

    });
    $(window).resize();

});



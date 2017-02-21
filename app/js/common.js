$(document).ready(function() {

    /* Fixed navigation */

    $(window).scroll(function () {

        if ($(window).scrollTop() > 20) {
            $('#header').addClass('header-fixed');
        } else {
            $('#header').removeClass('header-fixed');
        }
    });

    /* Smooth scroll to the sections */

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {

        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 40;
        $('body, html').animate({scrollTop: bl_top}, 1000);
        return false;
    });


    /* Tabs */

    $('.person').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.person').removeClass('current');
        $('.person-about').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });


    /* CounterUp */

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});

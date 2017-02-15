$(document).ready(function() {

    /* Fixed navigation */

    $(window).scroll(function () {

        if ($(window).scrollTop() > 80) {
            $('#header').addClass('header-fixed');
        } else {
            $('#header').removeClass('header-fixed');
        }
    });


    /* Tabs */

    $('.person').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.person').removeClass('current');
        $('.person-about').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });


});

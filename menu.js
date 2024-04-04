$(document).ready(function () {


    $(window).on('scroll', function () {

        var scroll2 = document.documentElement.scrollTop;

        if (scroll2 > 90) {
            $('.optionsInferioir').addClass('menu-fixed');
        } else if (scroll2 < 90) {
            $('.optionsInferioir').removeClass('menu-fixed');
        }
    });

});


$(document).ready(function () {
    $('#menu_on').click(function () {
        $('body').toggleClass('visible_menu');
    })
});
$(document).ready(function () {
    $('.menu').click(function () {
        $('body').toggleClass('visible_menu');
    })
});
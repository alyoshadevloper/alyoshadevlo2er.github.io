$(document).ready(function () {
    ////// ========== navbar--close-bars ==========
    var bars = $(".closes")
    var menu = $(".nav")
    var logo = $(".logo")
    bars.click(function (e) {
        e.preventDefault()
        if (logo.parent().css("display") == "block") {
            logo.parent().css("display", "none")
            menu.css("display", "flex")
        } else {
            logo.parent().css("display", "block")
            menu.css("display", "none")
        }

    })
    /// ==========  header owl-carousel ==========

    $("header .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true
    });

    /// ==========  header scroll-menu ==========

    var $links = $('header .navbar .link')

    $links.on('click', function (e) {
        e.preventDefault()
        var href = $(this).attr('href')
        var id = $(href).offset().top - 10
        console.log(href);
        $('html , body').animate({
            scrollTop: id
        }, 500)
    })

    /// ==========  header>.scroll-top ==========
    var top = $('.scroll-top')
    $(window).scroll(function () {
        var sizeTop = $(this).scrollTop()
        if (sizeTop >= 700) {
            top.show(500)
        } else {
            top.hide(500)
        }
    })
    top.click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 500)
    })

    /// ==========  section>product owl-carousel ==========

    $(".product .owl-carousel").owlCarousel({
        items: 6,
        nav: true,
        loop: true,
        autoplay: true,

    });


});
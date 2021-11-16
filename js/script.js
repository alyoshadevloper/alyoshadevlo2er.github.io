$(document).ready(function () {
    /// ==========  header header-menubar ==========
    var closes

    function check() {
        var heightmenu = $(".nav-menu-list ul").innerHeight()
        if ($(window).width() < 767) {
            $(".nav-menu-list").css("height", heightmenu)
        }
    }

    $('.nav-menu .sort').hover(
        function () {
            clearTimeout(closes);
            $(".nav-menu-list").addClass('active-block')
            check()
        },

        function () {
            closes = setTimeout(function () {
                $(".nav-menu-list").removeClass("active-block");
                check()
            }, 1000);
        })

    $(".nav-menu-list").hover(
        function () {
            clearTimeout(closes);
            $(".nav-menu-list").addClass("active-block");
            check()
        },

        function () {
            closes = setTimeout(function () {
                $(".nav-menu-list").removeClass("active-block");
                check()
            }, 0);
        });

    /// ==========  header nav-fixed ==========
    var $header = $('header')
    var $nav = $('.header-menubar')
    var flag = false

    function fixed() {
        if (scrollY >= $header.innerHeight() && !flag) {
            $nav.addClass('fixed-nav').css('opactiy', 0).animate({
                opacity: 1
            }, 1000)
            flag = true
        } else if (scrollY < $header.innerHeight() && flag) {
            $nav.animate({
                opacity: 0
            }, 1000, function () {
                $nav.removeClass('fixed-nav').css('opacity', 1)
            })
            flag = false
        }
    }
    $(window).on('scroll', fixed)
    fixed()
    /// ==========  header owl-carousel ==========

    $("header .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true
    });

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
        items: 7,
        nav: true,
        loop: true,
        autoplay: true,
        responsive: {
            992: {
                items: 5,
                margin: 0
            },
            1200: {
                items: 7
            },


        }
    });
    document.querySelectorAll('.price .sum').forEach(element => {
        element.textContent = new Intl.NumberFormat('uz-Uz', {
            currency: "UZS",
            style: 'currency'
        }).format(element.textContent)
    });;
});
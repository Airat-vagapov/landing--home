$(document).ready(function () {

    // Меню
    $('[data-modal="menu"]').on('click', function () {

        $('.modal__menu.triangle').each(function () {
            var elem = $(this)
            elem.addClass('open')
        })
        setTimeout(function () {
            $('.modal__menu[data-modal="menu__main"]').css('display', 'flex')
        }, 800)


        $("body").css("overflow", "hidden");

        $('.modal__menu').css('overflow', 'auto')
    })

    $('[data-modal="menu-close"]').on('click', function () {
        $('.modal__menu.triangle.left').css('display', 'flex')
        $('.modal__menu.triangle.right').css('display', 'flex')


        $('.modal__menu.triangle').each(function () {
            var elem = $(this)
            elem.removeClass('open')
        })

        $('.modal__menu[data-modal="menu__main"]').css('display', 'none')

        $("body").css("overflow", "auto");
    })

    // Заказать звонок
    // // Открытие
    $('[data-modal="callback"]').on('click', function () {
        $('.modal__background').animate({ left: '-100%', opacity: 1 }, 600);
        $('.modal__body').animate({ left: '50%', opacity: 1 }, 600);
        $('.modal__callback').addClass('active')

        $("body").css("overflow", "hidden");
    })

    // // Открытие
    $('[data-modal="callback-close"]').on('click', function () {
        $('.modal__background').animate({ left: '0', opacity: 0 }, 600);
        $('.modal__body').animate({ left: '200%', opacity: 0 }, 600);
        $('.modal__callback').removeClass('active')
        $("body").css("overflow", "auto");
    })

    $('.modal__background').on('click', function () {
        setTimeout(function () {
            $('.modal__callback').removeClass('active')
            $('.modal__background').animate({ left: '0', opacity: 0 }, 600);
            $('.modal__body').animate({ left: '200%', opacity: 0 }, 600);
            $("body").css("overflow", "auto");
        }, 300)
        
    })

})
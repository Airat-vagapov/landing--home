$(document).ready(function () {
    // Слайдер на блок 8
    $('.slider').slick({
        arrows: false,
        dots: false,
        prevArrow: $('.button__customArrow--prev--small'),
        fwdArrow: $('.button__customArrow--fwd')
    });

    $('.button__customArrow--prev--small').click(function () {
        $('.slider').slick('slickPrev');
    });

    $('.button__customArrow--fwd').click(function () {
        $('.slider').slick('slickNext');
    });

    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        var counter = $(this).find('.slider__customCounter');
        counter.find('.slider__customCounter--current').text('0' + (currentSlide + 1));
        counter.find('.slider__customCounter--all').text('/' + '0' + slick.slideCount);
    });

    // Слайдер на блок 9
    $('.slider--2').slick({
        arrows: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        infinite: false,
        // afterChange: function (event, slick, currentSlide, nextSlide) {
        //     console.log('yes')
        //     var textBlock = $('.textBlock[data-slide="1"]')
        //     console.log(textBlock)

        //     textBlock.fadeOut(200, function () {
        //         textBlock.text('New slide: ' + (nextSlide + 1));
        //         textBlock.fadeIn(200);
        //     })
        // }
    })

    $('.slider--2').on('afterChange', function (event, slick, currentSlide, nextSlide) {

        var textBlock = $(`.textBlock--2[data-slide="${currentSlide}"]`)

        textBlock.slideUp(200, function () {
            var nextBlock = $(`.textBlock--2[data-slide="${currentSlide + 1}"]`)
            nextBlock.removeClass('slider__text--hidden')
            nextBlock.addClass('slider__text--active')
            nextBlock.slideUp(200)
        })
    })

    $(document).on('mousewheel', function (event) {
        // event.preventDefault();

        if (scrolling) return;

        scrolling = true;

        if (event.deltaY > 0) {
            $('.slider--2').slick('slickPrev');

        } else {
            $('.slider--2').slick('slickNext');
        }

        setTimeout(function () {
            scrolling = false;
        }, 500);
    });




});
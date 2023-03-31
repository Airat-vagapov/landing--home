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
        var counter = $('.slider__container .slider__customCounter');
        counter.find('.slider__customCounter--current').text('0' + (currentSlide + 1));
        counter.find('.slider__customCounter--all').text('/' + '0' + slick.slideCount);
    });

    // Слайдер на блок 9
    gsap.registerPlugin(ScrollTrigger);

    let slideTimeline = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            trigger: ".verticalSlider--trigger",
            scrub: true,
            pin: true,
            start: "top",
        }
    })
    slideTimeline
        .fromTo(`[data-slide="1"]`, { opacity: 1, y: 0 }, { opacity: 0, yPercent: -10, delay: 0.5 })
        .fromTo(('[data-slide="2"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0 })
        .to('[data-slide="2"]', { opacity: 0, yPercent: -10, delay: 0.5 })
        .fromTo(('[data-slide="3"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0 })
        .to('[data-slide="3"]', { opacity: 0, yPercent: -10, delay: 0.5 })
        .fromTo(('[data-slide="4"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0 })

})
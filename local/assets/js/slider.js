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

    // const slides = gsap.utils.toArray('.verticalSlider__slide');

    // slides.forEach((slide, index) => {
    //     const slideTimeline = gsap.timeline({
    //         defaults: { duration: 1 }
    //     })
    //     // slideTimeline.fromTo(slide, { yPercent: -100 }, { yPercent: 0 })
    //     //     .to(slide, { yPercent: 100, duration: 0.5, delay: 1 });

    //     slideTimeline
    //         .fromTo(`.verticalSlider__slide:first-child`, { opacity: 1, y: 0 }, { opacity: 0, yPercent: -100 }, `silde${index}`)
    //         .fromTo(('.verticalSlider__slide'), { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 }, `silde${index}`)

    let slideTimeline = gsap.timeline({
        scrollTrigger: {
            markers: true,
            trigger: ".verticalSlider--trigger",
            scrub: true,
            pin: true,
            start: "top",
        }
    })
    slideTimeline
        .fromTo(`[data-slide="1"]`, { opacity: 1, y: 0 }, { opacity: 0, yPercent: -100 }, `slide1`)
        .fromTo(('[data-slide="2"]'), { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: -100 }, `slide2`)
        .fromTo(('[data-slide="3"]'), { opacity: 0, yPercent: 0 }, { opacity: 1, yPercent: 0 }, `slide3`)
        .fromTo(('[data-slide="4"]'), { opacity: 0, yPercent: 0 }, { opacity: 1, yPercent: 0 }, `slide4`)

    // ScrollTrigger.create({
    //     trigger: ".verticalSlider--trigger",
    //     // start: `+=${index * 800}px`,
    //     start: `top top`,
    //     end: `3200px`,
    //     animation: slideTimeline,
    //     // scrub: true,
    //     pin: true,
    //     pinSpacing: false,
    //     snap: "labels"
    // });

    // var tl = gsap.timeline({
    //     scrollTrigger: {
    //         markers: true,
    //         trigger: ".planets_anim_container",
    //         scrub: true,
    //         pin: true,
    //         start: "top 10%",
    //     }
    // });
    // tl
    //     .add('animation1')
    //     .to(".planets_anim__dots", { scale: 1, duration: 3, opacity: 1 }, 'animation1')
    //     .to(".planets_anim__circles", { scale: 1, duration: 3 }, 'animation1')
    //     .add('animation2')
    //     .to(".planets_anim__dots>span", { skewX: 51, skewY: -24, duration: 3, scale: 0.63 }, 'animation2')
    //     .to(".planets_anim__dots", { skewX: -51, skewY: 24, duration: 3 }, 'animation2')
    //     .to(".planets_anim__circles", { skewX: -51, skewY: 24, duration: 3 }, 'animation2')
})
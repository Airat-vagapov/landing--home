$(document).ready(function () {
    // Слайдер на блок 8

    // $('.slider').each(function () {
    //     var slider = $(this);
    //     $(this).slick({
    //         arrows: false,
    //         dots: false,
    //         prevArrow: $('.button__customArrow--prev--small'),
    //         fwdArrow: $('.button__customArrow--fwd')
    //     });
    //     var parent = $(this).closest('.slider__container')


    //     parent.find('.button__customArrow--prev--small').click(function () {
    //         slider.slick('slickPrev');
    //     });

    //     parent.find('.button__customArrow--fwd').click(function () {
    //         slider.slick('slickNext');
    //     });

    //     slider.on('init', function (event, slick, currentSlide) {
    //         var counter = parent.find('.slider__customCounter');
    //         counter.find('.slider__customCounter--current').text('0' + (currentSlide + 1));
    //         counter.find('.slider__customCounter--all').text('/' + '0' + slick.slideCount);
    //     });
    //     slider.on('afterChange', function (event, slick, currentSlide) {
    //         var counter = parent.find('.slider__customCounter');
    //         counter.find('.slider__customCounter--current').text('0' + (currentSlide + 1));
    //         counter.find('.slider__customCounter--all').text('/' + '0' + slick.slideCount);
    //     });
    // })

    var interleaveOffset = 0.5;

    var swiperOptions = {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        navigation: {
            nextEl: ".button__customArrow--fwd",
            prevEl: ".button__customArrow--prev--small"
        },
        on: {
            progress: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function (speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // document.querySelector('[data-toggle]').addEventListener('click', function(){
    //   if (swiper.realIndex == 0) {
    //     swiper.slideTo(swiper.slides.length - 1);
    //   } else {
    //     swiper.slideTo(0);
    //   }
    // });

    // function logIndex () {
    //   requestAnimationFrame(logIndex);
    //   console.log(swiper.realIndex);
    // }
    // logIndex();




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
        .fromTo(`[data-slide="1"]`, { opacity: 1, y: 0 }, { opacity: 0, yPercent: -10, delay: 2 })
        .fromTo(('[data-slide="2"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0 })
        .to('[data-slide="2"]', { opacity: 0, yPercent: -10, delay: 2 })
        .fromTo(('[data-slide="3"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0 })
        .to('[data-slide="3"]', { opacity: 0, yPercent: -10, delay: 2 })
        .fromTo(('[data-slide="4"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0 })

    // Слайдер блок 18

    let slideTimeline18 = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            trigger: ".verticalSlider--trigger--2",
            scrub: true,
            pin: true,
            start: "top",
        }
    })
    slideTimeline18
        .fromTo(`[data-slide-2="1"]`, { opacity: 1, y: 0 }, { opacity: 0, yPercent: -10, delay: 2, duration: 2 })
        .fromTo(('[data-slide-2="2"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, duration: 2 })
        .to('[data-slide-2="2"]', { opacity: 0, yPercent: -10, delay: 2, duration: 1 })
        .fromTo(('[data-slide-2="3"]'), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, duration: 2 })

})
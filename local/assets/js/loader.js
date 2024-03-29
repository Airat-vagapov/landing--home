$(document).ready(function () {
    // Hide the content until everything is loaded
    // $('.all__content').hide();

    // Show the preloader
    $('.preloader').fadeIn(100);

    // Use jQuery to load all the necessary assets
    $.when(
        $.get('/local/assets/css/styles.css'),
        $.get('/local/assets/css/components/header.css'),
        $.get('/local/assets/css/components/buttons.css'),
        $.get('/local/assets/img/banner.jpeg'),
        $.get('/local/assets/img/old_city.png'),
        $.get('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'),
        $.getScript('https://code.jquery.com/jquery-3.3.1.min.js'),
        $.getScript('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js'),
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js'),
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js'),
        $.getScript('/local/assets/js/slider.js'),
        $.getScript('/local/assets/js/modal.js'),
        
    ).done(function () {
        // Hide the preloader
        $('.preloader').fadeOut(200);

        // Show the content
        // $('.all__content').fadeIn(200);
    });
})
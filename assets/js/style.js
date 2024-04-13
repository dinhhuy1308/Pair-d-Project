// Slider  
var swiper = new Swiper(".parid-slider-content", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

// Popup modal Register now
jQuery(document).ready(function ($) {
    jQuery('a[href="#register"]').click(function () {
        jQuery('#register-now').modal('show');
    })
});
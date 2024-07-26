document.addEventListener('DOMContentLoaded', function () {
var swiper1 = new Swiper("#slider1", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: "#slider1 .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: "#slider1 .swiper-button-next",
        prevEl: "#slider1 .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
    },
});

var swiper2 = new Swiper("#slider2", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: "#slider2 .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: "#slider2 .swiper-button-next",
        prevEl: "#slider2 .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
    },
});

var swiper3 = new Swiper("#slider3", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: "#slider3 .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: "#slider3 .swiper-button-next",
        prevEl: "#slider3 .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
    },
});

var swiper4 = new Swiper("#slider4", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: "#slider4 .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: "#slider4 .swiper-button-next",
        prevEl: "#slider4 .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
    },
});
});
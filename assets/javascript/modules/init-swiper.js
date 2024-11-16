function initSwiper() {
    const swiper = new Swiper(".swiper", {
        // настройки слайдера
        loop: true, 
        slidesPerView: 1,
        navigation: {
            nextEl: "[data-slider-next]",
            prevEl: "[data-slider-prev]",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    })
}

export default initSwiper;
function swiperTechnologes() {
    const swiper = new Swiper(".swiper.technologes__swiper", {
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
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    })
}

export default swiperTechnologes;
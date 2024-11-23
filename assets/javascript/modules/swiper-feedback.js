function swiperFeedback() {
    const swiper = new Swiper(".swiper.feedback__swiper", {
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
                spaceBetween: 30,
            }
        }
    })
}

export default swiperFeedback;
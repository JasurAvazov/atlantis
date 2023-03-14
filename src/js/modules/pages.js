import Swiper, { Mousewheel, Pagination } from 'swiper';

export function init() {
    let pages = new Swiper('.pagesSwiper', {
        modules: [Pagination, Mousewheel],
        slidesPerView: 1,
        direction: 'vertical',
        speed: 1000,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // window.addEventListener('wheel', function(event) {
    //     if (event.deltaY > 0) {
    //         pages.slideNext();
    //     }
    //     // если прокрутка вверх
    //     else if (event.deltaY < 0) {
    //         pages.slidePrev();
    //     }
    // });
}
import Swiper, { Navigation, Pagination }from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';


const swiper = new Swiper(".swiper", {
    loop:true,
    pagination: {
        el: '.swiper-pagenation'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
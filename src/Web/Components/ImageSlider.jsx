import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const slide_image_1 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const slide_image_2 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const slide_image_3 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const slide_image_4 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const slide_image_5 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const slide_image_6 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;
const slide_image_7 = new URL('../../imagenes/Foto2.jpg', import.meta.url).href;

const Slides = () => {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide className='slide1'>
                    <img className='slider_img' src={slide_image_1} alt="slide_image" />
                    <div className="slide-content">
                        <h2>Slide 1 Title</h2>
                        <p>This is some description for slide 1.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide1'>
                    <img className='slider_img' src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide1'>
                    <img className='slider_img' src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide1'>
                    <img className='slider_img' src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide1'>
                    <img className='slider_img' src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide1'>
                    <img className='slider_img' src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide1'>
                    <img className='slider_img' src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slides;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const slide_image_1 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const slide_image_2 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const slide_image_3 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const slide_image_4 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const slide_image_5 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const slide_image_6 = new URL('../../imagenes/Perfil.png', import.meta.url).href;
const slide_image_7 = new URL('../../imagenes/Perfil.png', import.meta.url).href;

const TeamSlides = () => {
    return (
        <div className="Teamcontainer">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}  
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 75,
                    modifier: 3,
                    slideShadows:true,
                }}           
                pagination={{ el: '.Teamswiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.Teamswiper-button-next',
                    prevEl: '.Teamswiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="Teamswiper_container"
            >
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={slide_image_1} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>Slide 1 Title</h2>
                        <p>This is some description for slide 1.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={slide_image_2} alt="Teamslide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={slide_image_3} alt="Teamslide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={slide_image_4} alt="Teamslide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={slide_image_5} alt="Teamslide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={slide_image_6} alt="Teamslide_image" />
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={slide_image_7} alt="Teamslide_image" />
                </SwiperSlide>

                <div className="Teamslider-controler">
                    <div className="Teamswiper-button-prev slider-arrow">
                        <ion-icon name="Teamarrow-back-outline"></ion-icon>
                    </div>
                    <div className="Teamswiper-button-next slider-arrow">
                        <ion-icon name="Teamarrow-forward-outline"></ion-icon>
                    </div>
                    
                </div>
            </Swiper>
        </div>
    );
};

export default TeamSlides;
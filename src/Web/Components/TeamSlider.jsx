import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Uruguay = new URL('../../imagenes/uruguay.png', import.meta.url).href;
const Argentina = new URL('../../imagenes/argentina.png', import.meta.url).href;

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Ale = new URL('../../imagenes/Ciclistas/ale.jpg', import.meta.url).href;
const Calvo = new URL('../../imagenes/Ciclistas/Calvo.jpg', import.meta.url).href;
const Coro = new URL('../../imagenes/Ciclistas/Coro.jpg', import.meta.url).href;
const Martin = new URL('../../imagenes/Ciclistas/Martin.jpg', import.meta.url).href;
const Lucas = new URL('../../imagenes/Ciclistas/Perfil.jpg', import.meta.url).href;
const Seba = new URL('../../imagenes/Ciclistas/Seba.jpg', import.meta.url).href;
const Tato = new URL('../../imagenes/Ciclistas/Tato.jpg', import.meta.url).href;
const Toto = new URL('../../imagenes/Ciclistas/Toto.jpg', import.meta.url).href;


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
                    <img className='teamSlider_img' src={Seba} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>SEBASTIAN CASTRO</h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={Martin} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>MARTIN CASTRO</h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={Tato} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>STEFANO URAN</h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={Calvo} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>MARTIN CALVO</h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={Coro} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>DIEGO PEREYRA</h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={Lucas} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>LUCAS GADAY</h2>
                        <img src={Argentina} alt="Nacionalidad" className="nationality-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={Ale} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>ALEXANDER GUISOLI</h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <img className='teamSlider_img' src={Toto} alt="Teamslide_image" />
                    <div className="Teamslide-content">
                        <h2>RODRIGO MARR</h2>
                        <img src={Uruguay} alt="Nacionalidad" className="nationality-image" />
                    </div>
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
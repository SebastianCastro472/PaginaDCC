import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Sitios from '../Components/Sitios';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const Ruta = new URL('../../imagenes/Carreras/Ruta.jpg', import.meta.url).href;
const Nacionales = new URL('../../imagenes/Carreras/Nacionales.jpg', import.meta.url).href;
const Vuelta = new URL('../../imagenes/Carreras/Vuelta.jpg', import.meta.url).href;
const Chana = new URL('../../imagenes/Carreras/Chana.jpg', import.meta.url).href;


const Slides = () => {

    const handleSlideClick = (url) => {
        window.open(url, '_blank');
    };

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
                <SwiperSlide className='slide1' onClick={() => handleSlideClick({Sitios})}>
                    <img className='slider_img' src={Ruta} alt="slide_image" />
                    <div className="slide-content">
                        <h2>RUTAS DE AMERICA 2024</h2>
                        <button>Leer Mas</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide1' onClick={() => handleSlideClick({Sitios})}>
                    <img className='slider_img' src={Vuelta}  alt="slide_image" />
                    <div className="slide-content">
                        <h2>VUELTA CICLISTA DEL URUGUAY 2024</h2>
                        <button>Leer mas</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide1' onClick={() => handleSlideClick({Sitios})}>
                    <img className='slider_img' src={Chana}  alt="slide_image" />
                    <div className="slide-content">
                        <h2>VUELTA CICLISTA CHANA  2024</h2>
                        <button>Leer mas</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide1' onClick={() => handleSlideClick({Sitios})}>
                    <img className='slider_img' src={Nacionales}  alt="slide_image" />
                    <div className="slide-content">
                        <h2>NACIONALES DE RUTA 2024</h2>
                        <button>Leer mas</button>
                    </div>
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



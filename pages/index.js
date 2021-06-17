import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel, HashNavigation, Parallax, EffectFade } from 'swiper'
import SplashScreen from '../components/Group/SplashScreen';
import SubsidiariesSection from '../components/Group/SubsidiariesSection';
import BuildingSection from '../components/Group/BuildingSection';
import CoreValuesSection from '../components/Group/CoreValuesSection';
import Footer from '../components/shared/Footer/Footer';

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, A11y, HashNavigation, Parallax, EffectFade]);

const newPage = () => {
    const easing = [0.6, -0.05, 0.01, 0.99];
    return (
        <Swiper
            spaceBetween={500}
            slidesPerView={1}
            direction="vertical"
            speed={1000}
            mousewheel={true}
            cssMode={true}
            style={{'--swiper-navigation-color': 'green','--swiper-pagination-color': 'green'}} 
            parallax={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiper-container1"
        >
            <div slot="container-start" data-swiper-parallax="-13%"></div>
            <SwiperSlide className="swiper-slide1" data-hash="top"><SplashScreen easing={easing} /></SwiperSlide>
            <SwiperSlide className="swiper-slide1" data-hash="subsidiaries"><SubsidiariesSection easing={easing} /></SwiperSlide>
            <SwiperSlide className="swiper-slide1" data-hash=""><BuildingSection easing={easing} /></SwiperSlide>
            <SwiperSlide className="swiper-slide1" data-hash=""><CoreValuesSection easing={easing} /></SwiperSlide>
            <SwiperSlide style={{background: "#F0F4F8", display: "flex", flexDirection: "column-reverse"}} className="swiper-slide1"><Footer /></SwiperSlide>
    </Swiper>
    );
};

export default newPage;
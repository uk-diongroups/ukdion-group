import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel, HashNavigation, Parallax, EffectFade } from 'swiper'
import SplashScreen from '../components/Group/SplashScreen';
import SubsidiariesSection from '../components/Group/SubsidiariesSection';
import BuildingSection from '../components/Group/BuildingSection';
import CoreValuesSection from '../components/Group/CoreValuesSection';
import Footer from '../components/shared/Footer/Footer';
import { useAnimation } from "framer-motion"

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, A11y, HashNavigation, Parallax, EffectFade]);

const newPage = () => {
    const easing = [0.6, -0.05, 0.01, 0.99];
    const animation = useAnimation();
    const headerAnimation = useAnimation();
    const imageAnimation = useAnimation();
    const renderAnimations = inView => {
        if(inView === true) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 3,
                    bounce: 0.5,
                    ease: easing,
                    delay: 0.8
                }
            })
            headerAnimation.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 2.5,
                    bounce: 0.5,
                    ease: easing,
                    delay: 0.2
                }
            })
            imageAnimation.start({
                opacity: 1,
                transition: {
                    duration: 3,
                    bounce: 0.5,
                    ease: easing,
                    delay: 0.8
                }
            })
        }
        if(inView === false){
            animation.start({
                opacity: 0,
                y: "100vh"
            })
            headerAnimation.start({
                opacity: 0,
                y: "100vh"
            })
            imageAnimation.start({
                opacity: 0
            })
        } 
    }
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
            <SwiperSlide className="swiper-slide1" data-hash="top"><SplashScreen animation={animation} renderAnimations={renderAnimations} headerAnimation={headerAnimation} imageAnimation={imageAnimation} easing={easing} /></SwiperSlide>
            <SwiperSlide className="swiper-slide1" data-hash="subsidiaries"><SubsidiariesSection animation={animation} renderAnimations={renderAnimations} headerAnimation={headerAnimation} imageAnimation={imageAnimation} easing={easing} /></SwiperSlide>
            <SwiperSlide className="swiper-slide1" data-hash=""><BuildingSection animation={animation} renderAnimations={renderAnimations} headerAnimation={headerAnimation} imageAnimation={imageAnimation} easing={easing} /></SwiperSlide>
            <SwiperSlide className="swiper-slide1" data-hash=""><CoreValuesSection animation={animation} renderAnimations={renderAnimations} headerAnimation={headerAnimation} imageAnimation={imageAnimation} easing={easing} /></SwiperSlide>
            <SwiperSlide style={{background: "#F0F4F8", display: "flex", flexDirection: "column-reverse"}} className="swiper-slide1"><Footer /></SwiperSlide>
    </Swiper>
    );
};

export default newPage;
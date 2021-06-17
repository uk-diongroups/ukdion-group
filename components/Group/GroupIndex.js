// import Link from 'next/link';
import { motion } from "framer-motion"
// import GroupNavbar from '../shared/Navbar/Group.navbar';
import SubsidiariesSection from './SubsidiariesSection';
import BuildingSection from './BuildingSection';
import CoreValuesSection from './CoreValuesSection';
import SplashScreen from './SplashScreen';
import { useState, createRef } from "react";
import Footer from "../shared/Footer/Footer";
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
// import { useScrollPosition } from '@n8tb1t/use-scroll-position'

SwiperCore.use([Navigation, Pagination])
const GroupIndex = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [subsidiaryPosition, setSubsidiaryPosition] = useState(null)
    const [screenHeight, setScreenHeight] = useState('')
    const subsidiary = createRef(null)
    const { ref, inView} = useInView();

    const easing = [0.17, 0.67, 0.83, 0.67];
    const fadeInUp = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                bounce: 0.5,
                ease: easing
            }
        },
        exit: {
            opacity: 0,
            transition: {
                bounce: 0.5,
                ease: easing
            }
        }
    }
    const fadeInRight = {
        initial: {
            x:"-50vw",
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }
    const stagger = {
        animate: {
            transition: {
                staggerChildren: 2,
                // delay: 0.2
            }
        }
    }
    const scrollTo = () => {
        window.scroll({
          top: 729,
          behavior: "smooth",
        });
    }
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            direction="vertical"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            tag="div"
            className="bdc_container container-fluid p-0" id="groupIndex"
        >
            
            <SwiperSlide className="groupSection" id="swiper1" tag="section">
                <SplashScreen showDottedImages={inView} subsidiaryPosition={subsidiaryPosition} scrollTo={scrollTo} contentRef={ref} setPage={setCurrentPage} easing={easing} stagger={stagger} fadeInRight={fadeInRight} fadeInUp={fadeInUp} />    
            </SwiperSlide>
            <SwiperSlide className="groupSection" id="swiper2" tag="section">
                <SubsidiariesSection setSubsidiaryPosition={setSubsidiaryPosition} subsidiary={subsidiary} scrollTo={scrollTo} setPage={setCurrentPage} height={screenHeight} fadeInUp={fadeInUp}/> 
            </SwiperSlide>
            <SwiperSlide className="groupSection" id="swiper3" tag="section">
                <BuildingSection scrollTo={scrollTo} setPage={setCurrentPage} fadeInUp={fadeInUp}/> 
            </SwiperSlide>
            <SwiperSlide className="groupSection" id="swiper4" tag="section">
                <CoreValuesSection scrollTo={scrollTo} easing={easing} setPage={setCurrentPage} fadeInUp={fadeInUp}/> 
            </SwiperSlide>
            <SwiperSlide id="swiper5" tag="section" className="groupSection" style={{background: "#F0F4F8", display: "flex", flexDirection: "column-reverse"}}>
                <Footer />
            </SwiperSlide>
        </Swiper>
    );

};

export default GroupIndex;
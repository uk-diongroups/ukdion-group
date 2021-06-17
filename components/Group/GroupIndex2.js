import React,{ useState } from 'react';
import BuildingSection from './BuildingSection';
import SplashScreen from './SplashScreen';
import SubsidiariesSection from './SubsidiariesSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
SwiperCore.use([Navigation, Pagination])
const GroupIndex2 = () => {
    const [subsidiaryPosition, setSubsidiaryPosition] = useState(null)

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
            // className="container-fluid p-0"
        >
                <SwiperSlide>
                    <SplashScreen />
                </SwiperSlide>
                <SwiperSlide>
                   <SubsidiariesSection subsidiaryPosition={subsidiaryPosition} setSubsidiaryPosition={setSubsidiaryPosition} /> 
                </SwiperSlide>
                <SwiperSlide>
                    <BuildingSection />
                </SwiperSlide>
        </Swiper>
    );
};

export default GroupIndex2;
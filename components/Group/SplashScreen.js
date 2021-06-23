import React, { useEffect, useState } from 'react';
import { motion, useAnimation} from "framer-motion"
import Link from 'next/link';
import { useInView } from 'react-intersection-observer'
import GroupNavbar from '../shared/Navbar/Group.navbar';
import NdprAlert from '../NDPR/ndpr_modal';


const SplashScreen = ({ easing }) => {
    const { ref, inView} = useInView();
    const animation = useAnimation();
    const headerAnimation = useAnimation();
    const imageAnimation = useAnimation();
    let consent;
    if (typeof window !== 'undefined') {
        consent = window.localStorage.getItem("consent");
    }
    useEffect(() => {
        if(inView) {
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
        if(!inView){
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
        
    }, [inView])
    return (
        <div className="bdc_container_splash" ref={ref}>
        <div className="bdc_navbar_background">
            <div className="containing_background_content">
                <GroupNavbar homePage={true} />
                <NdprAlert isOpen={consent ? false : true}/>
                <div  className="group_header_content">
                    <div data-swiper-parallax="-300">
                        <motion.h5 initial={{ opacity: 0, y: "100vh"}} animate={headerAnimation}>We simply add <span>value</span></motion.h5>
                        <motion.div initial={{ opacity: 0, y: "100vh"}} animate={animation}><small>Leading you through the successful path of investment. No guessing. We simply stay S.M.A.R.T bringing you the best returns on investment.</small></motion.div>
                    </div>

                    <motion.div initial={{opacity: 0}} animate={imageAnimation} className="d-none d-md-block d-lg-block text-right" data-swiper-parallax="-200">
                        <img src="/images/new_cube.svg" className="" />
                    </motion.div>
                    
                    <motion.div animate={imageAnimation} className="small_section" data-swiper-parallax="-100">
                        <img src="/images/small1.png" alt="" className="small1 pulse"/>
                    
                        <img src="/images/small2.png" alt="" className="small2 pulse"/>
                    
                        <img src="/images/small3.png" alt="" className="small3 pulse"/>
                    </motion.div>
                </div>
            
                <div className="d-flex justify-content-between" style={{marginTop:'5rem', marginRight: '2rem'}}>
                    <div>
                        <p></p>
                    </div>

                    <Link href="#subsidiaries">
                        <u><a style={{ color: "#51D489", cursor: "pointer" }}>Our subsidiaries &#8594;</a> </u>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SplashScreen;
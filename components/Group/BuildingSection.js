import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const BuildingSection = ({ easing }) => {
    const { ref, inView} = useInView({
        threshold: 0.2
    });
    
    const animation = useAnimation();
    const headerAnimation = useAnimation();
    const imageAnimation = useAnimation();
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
        <div className="building_section" id="about" ref={ref}>
            <div className="containing_background_content">
                <div className="building">
                    <div className="building_details">
                        <small className="text-success">About us</small>
                        <motion.h5 animate={headerAnimation} className="mt-3">Building Innovative For a Smart Future</motion.h5>
                         
                        
                        
                            <motion.p animate={animation}>UK-DION GROUP LIMITED is an asset management company duly registered with the Corporate Affairs Commission (CAC) and regulated by the Securities and Exchange Commission (SEC). Our philosophy is to provide our clients with the best independent advice on their investments and help them get the best value for their money.</motion.p>   
                        
                        
                        <Link href="/about">
                                <a>
                                    <motion.button animate={animation} className="btn btn-success px-4">
                                        Learn more
                                    </motion.button>
                                </a>
                        </Link>
                    </div>

                    <div className="building_img text-right">
                        <motion.img animate={imageAnimation} src="../images/group_3.png" alt=""/>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <div>
                        {/* <u><a style={{ color: "#51D489", cursor: "pointer" }}>&#8592; Back</a> </u> */}
                    </div>

                    <div className="text-right">
                        <Link href="/#core_values" >
                            <u><a style={{ color: "#51D489", cursor: "pointer" }}>Core Values &#8594;</a> </u>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildingSection;
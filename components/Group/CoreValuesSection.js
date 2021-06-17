import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


const CoreValuesSection = ({ easing }) => {
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
                    duration: 6.5,
                    bounce: 0.5,
                    ease: easing,
                    delay: 1
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
            <div className="core_values" id="core_values" ref={ref}>
                <div className="containing_background_content core_value_things">
                    <div className="core_values_content">
                        <motion.h5 animate={headerAnimation}>Our core <span>values</span></motion.h5>
                        <motion.div animate={animation}><small>UK-DION Group is a bespoke group of companies focused on delivering value in the financial Services space. Our model is focused on investment management, financial Advisory.</small></motion.div>
                    </div>
                    <motion.div animate={imageAnimation} className="core_value_icons mt-5">
                        <div>
                            <img src="../images/time-is-money.png" alt="" />
                            <p className="mt-2">United</p>
                        </div>
                        <div>
                            <img src="../images/idea.png" alt="" />
                            <p className="mt-2">Knowledgable</p>
                        </div>
                        <div>
                            <img src="../images/passive.png" alt="" />
                            <p className="mt-2">Driven</p>
                        </div>
                        <div>
                            <img src="../images/shield.png" alt="" />
                            <p className="mt-2">Integrity</p>
                        </div>
                        <div>
                            <img src="../images/pie-chart.png" alt="" />
                            <p className="mt-2">Organized</p>
                        </div>
                        <div>
                            <img src="../images/goal.png" alt="" />
                            <p className="mt-2">Notable</p>
                        </div>
                    </motion.div>
                    
                </div>
                <div className="d-flex justify-content-between navControls">
                    
                </div>
            </div>
    );
};

export default CoreValuesSection;
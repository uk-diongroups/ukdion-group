import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const SectionThree = () => {
    const { ref, inView} = useInView({
        threshold: 0.6
    });
    const animation = useAnimation();
    useEffect(() => {
        if(!inView){
            animation.start({
                y: 90,
                opacity: 0
            })
        } 
        if(inView) {
            animation.start({
                y: 0, 
                opacity: 1,
                transition: {
                    type: 'spring', duration: 4, bounce: 0.5
                }
            })
        }
    }, [inView])
    return (
        <div className="bdc_learn" ref={ref}>
            <div className="bdc_learn_background"></div>
            <motion.div animate={animation} className="bdc_learn_content">
                <h4>Learn more about us</h4>
                <p>DIon Bureau De Change Ltd is a subsidiary of UK-DION limited.</p>
                <p>It is licensed by the Central Bank of Nigeria to provide foreign exchange services. We operate out of our head office at Lekki Phase 1 in Lagos, where we provide foreign exchange services to both corporates and individuals. Our rates are competitive and we are re focused on building long-term, mutually- beneficial relationships.</p>
            </motion.div>

            <motion.div className="text-center">
                <img src="/images/globe.svg" className="globe" alt="globe" />
            </motion.div>
        </div>
    );
};

export default SectionThree;
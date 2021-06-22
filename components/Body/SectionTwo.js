import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const SectionTwo = () => {
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
        
        <div className="bdc_about d-none d-md-block d-lg-block" ref={ref}>
        <motion.div animate={animation} className="bdc_about_content">
            <h3>Borderless without limit</h3>
            <small>We support currencies from these countries.</small>
            <div className="countries_box col-lg-10 mx-auto mt-5">
                <div className="d-flex justify-content-between">
                    <div className="country">
                        <img src="/images/nija.svg" alt=""/>
                        <p>Nigeria</p>
                    </div>

                    <div className="country">
                        <img src="/images/uk.png" alt=""/>
                        <p>United Kingdom</p>
                    </div>

                    <div className="country">
                        <img src="/images/usa.svg" alt=""/>
                        <p>United States</p>
                    </div>
                </div>
                <br/>
                <div className="mx-auto" style={{width:'30%'}}> 
                    <div className="country w-100">
                        <img src="/images/china.svg" alt=""/>
                        <p>China</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
    );
};

export default SectionTwo;
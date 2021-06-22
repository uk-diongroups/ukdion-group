import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import BdcNavbar from '../shared/Navbar/Bdc.navbar';

const SectionOne = ({ fadeInUp }) => {
    const { ref, inView} = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if(!inView){
            animation.start({
                y: 90,
                opacity: 0,
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
        <div className="bdc_navbar_background" ref={ref}>
            <div className="containing_background_content">
                <BdcNavbar/>
                <motion.div variants={fadeInUp} className="bdc_header_content">
                    <div>
                        <h5 className="d-none d-md-block d-lg-block">Reliable, fast and convenient <br/><span>Bureau De Change</span> services.</h5>
                        <h5 className="d-sm-block d-md-none d-lg-none">Reliable, fast and convenient <span>Bureau De Change</span><br/> services.</h5>
                        <p className="mt-4 mb-5 d-none d-md-block d-lg-block">We help businesses and individuals place orders and broker <br/>foreign currency transactions conveniently and securely. </p>
                        <button className="btn btn-success px-4">
                            Contact us
                        </button>
                    </div>

                    <div className="d-none d-md-block d-lg-block">
                        <img src="/images/checker.svg" width={150} height={600}/>
                    </div>

                    <div className="d-none d-md-block d-lg-block">
                        <img src="/images/dollars.png" className="dollars" />
                        <img src="/images/fyne_gurl.png" className="fyn_gurl"/>                        
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionOne;
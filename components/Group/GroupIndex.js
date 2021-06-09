import Link from 'next/link';
import { motion } from "framer-motion"
import GroupNavbar from '../shared/Navbar/Group.navbar';
import SubsidiariesSection from './SubsidiariesSection';
import BuildingSection from './BuildingSection';
import CoreValuesSection from './CoreValuesSection';



const GroupIndex = () => {
    const easing = [0.6, -0.05, 0.01, 0.99];
    const fadeInUp = {
        initial: {
            y:90,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            transition: {
                duration: 4,
                bounce: 0.5,
                ease: easing,
                delay: 0.2
            }
        }
    }
    const fadeInRight = {
        initial: {
            x:"-80vw",
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 5,
                ease: easing,
                delay: 0.2
            }
        }
    }
    const stagger = {
        animate: {
            transition: {
                staggerChildren: 2,
                delay: 0.2
            }
        }
    }
    
    return (
        <motion.div exit={{opacity: 0}} initial='initial' animate='animate' className="bdc_container container-fluid p-0">
            <div className="bdc_navbar_background">
                <div className="containing_background_content">
                    <GroupNavbar/>
                    <motion.div variants={stagger} className="group_header_content">
                        <motion.div variants={fadeInRight}>
                            <h5>We simply add <span>value</span></h5>
                            <small>Leading you through the successful path of investment. No guessing. We simply stay S.M.A.R.T bringing you the best returns on investment.</small>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="d-none d-md-block d-lg-block text-right">
                            <img src="/images/new_cube.svg" className="" />
                        </motion.div>
                        
                        <div className="small_section">
                            <img src="/images/small1.svg" alt="" className="small1 pulse"/>
                        
                            <img src="/images/small2.svg" alt="" className="small2 pulse"/>
                        
                            <img src="/images/small3.svg" alt="" className="small3 pulse"/>

                        </div>
                    </motion.div>
                    
                    <div className="d-flex justify-content-between" style={{marginTop:'5rem', marginRight: '2rem'}}>
                        <div>
                            <p></p>
                        </div>

                        <div>
                            <Link href="#subsidiaries">
                               <u><a style={{ color: "#51D489", cursor: "pointer" }}>Our subsidiaries &#8594;</a> </u>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <SubsidiariesSection />
          
            <BuildingSection />

           <CoreValuesSection />
        </motion.div>
    );
};

export default GroupIndex;
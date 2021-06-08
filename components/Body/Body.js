import React from 'react';
import { motion } from "framer-motion"
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

const Body = () => {
    const easing = [0.6, -0.05, 0.01, 0.99];
    const fadeInUp = {
        initial: {
            y:90,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            // scale: [1, 1, 1, 1, 1],
            // rotate: [0, 0, 360, 360, 0],
            transition: {
                duration: 4,
                bounce: 0.5,
                ease: easing,
                delay: 0.2
            }
        }
    }
    return (
        <motion.div ext={{opacity: 0}} initial='initial' animate='animate' className="bdc_container container-fluid p-0">
            <SectionOne fadeInUp={fadeInUp} />
            <SectionTwo />
            <SectionThree />
        </motion.div>
    );
};

export default Body;
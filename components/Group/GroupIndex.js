// import Link from 'next/link';
import { motion } from "framer-motion"
// import GroupNavbar from '../shared/Navbar/Group.navbar';
import SubsidiariesSection from './SubsidiariesSection';
import BuildingSection from './BuildingSection';
import CoreValuesSection from './CoreValuesSection';
import SplashScreen from './SplashScreen';
import { useState, useEffect, useRef, createRef } from "react";
// import { useScrollPosition } from '@n8tb1t/use-scroll-position'


const GroupIndex = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [screenHeight, setScreenHeight] = useState('')
    const subsidiary = createRef(null)
    // const [scrollDir, setScrollDir] = useState("");

// useEffect(() => {
//   const threshold = 0;
//   let lastScrollY = window.pageYOffset;
  
//   let ticking = false;

//   const updateScrollDir = () => {
//     const scrollY = window.pageYOffset;

//     if (Math.abs(scrollY - lastScrollY) < threshold) {
//       ticking = false;
//       return;
//     }
//     setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
//     lastScrollY = scrollY > 0 ? scrollY : 0;
//     ticking = false;
//   };

//   const onScroll = () => {
//     if (!ticking) {
//       window.requestAnimationFrame(updateScrollDir);
//       ticking = true;
//     }
//   };

//   window.addEventListener("scroll", onScroll);
//   console.log(scrollDir);
//   if(scrollDir === "scrolling down" && currentPage !== 4) {
//       setCurrentPage(currentPage + 1)
//   }
//   if(scrollDir === "scrolling up" && currentPage !== 1) {
//       setCurrentPage(currentPage - 1)
//   }

//   return () => window.removeEventListener("scroll", onScroll);
// }, [scrollDir]);

//     useEffect(() => {
//         setScreenHeight(window.innerHeight)
        
//     }, [])
    


    const easing = [0.17, 0.67, 0.83, 0.67];
    const fadeInUp = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                bounce: 0.5,
                ease: easing
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
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
    const scrollTo = (ref) => {
        window.scroll({
          top: ref.current.offsetTop,
          behavior: "smooth",
        });
    }
    return (
        <motion.div exit='exit' initial='initial' animate='animate' className="bdc_container container-fluid p-0">
            <SplashScreen scrollTo={scrollTo} setPage={setCurrentPage} easing={easing} stagger={stagger} fadeInRight={fadeInRight} fadeInUp={fadeInUp} /> 
            <section>
               <SubsidiariesSection subsidiary={subsidiary} scrollTo={scrollTo} setPage={setCurrentPage} height={screenHeight} fadeInUp={fadeInUp}/> 
            </section>
            <section>
               <BuildingSection scrollTo={scrollTo} setPage={setCurrentPage} fadeInUp={fadeInUp}/> 
            </section>
            <section>
               <CoreValuesSection scrollTo={scrollTo} easing={easing} setPage={setCurrentPage} fadeInUp={fadeInUp}/> 
            </section>
            
        </motion.div>
    );
};

export default GroupIndex;
import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


const SubsidiariesSection = ({ setPage, easing }) => {
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
        <div className="subsidaries" id="subsidiaries" ref={ref}>
            <div className="containing_background_content">
                <div
                    className="our_subsidaries"
                >
                    <div>
                        <motion.h5 animate={headerAnimation}>Our Business Units</motion.h5>
                        <motion.div animate={animation}><small>UK-DION GROUP LIMITED is an asset management company duly registered with the Corporate Affairs Commission (CAC) and regulated by the Securities and Exchange Commission (SEC) and the Central Bank of Nigeria (CBN)</small></motion.div>
                        <br />
                        <br />
                        <motion.div animate={animation} className="borderless_box mt-4">
                            <div className="border-top-0 border-right border-bottom pl-0 pr-3 py-3 borderful">
                                <Link href="https://ukdion-group-investment.herokuapp.com/">
                                    <a>
                                        <img src="../images/group_1.svg" alt="" />
                                        <p>Investment</p>  
                                    </a>
                                </Link>
                            </div>

                            <div className="border-top-0 border-right border-bottom p-3 borderful">
                                <Link href="/">
                                    <a>
                                        <img src="../images/group_1.svg" alt="" />
                                        <p>Microfinance</p>  
                                    </a>
                                </Link>
                            </div>

                            <div className="border-top-0 border-bottom pt-3 pl-3 borderful">
                                <Link href="/bdc">
                                    <a>
                                        <img src="../images/group_1.svg" alt="" />
                                        <p>Bureau De Change</p>  
                                    </a>
                                </Link>
                            </div>

                            <div className="border-top-0 border-right pl-0 pr-3 py-3 borderful">
                                <Link href="/">
                                    <a>
                                        <img src="../images/group_1.svg" alt="" />
                                        <p>Dion Factory</p>  
                                    </a>
                                </Link>
                            </div>

                            <div className="border-top-0 border-left p-3 borderful">
                                <Link href="/">
                                    <a>
                                        <img src="../images/group_1.svg" alt="" />
                                        <p>House of Dion</p>  
                                    </a>
                                </Link>
                            </div>

                            <div className="border-top-0 border-left p-3 borderful">
                                <Link href="/dion_homes">
                                    <a>
                                        <img src="../images/group_1.svg" alt="" />
                                        <p>Dion Homes</p>  
                                    </a>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div animate={imageAnimation} className="text-right my-auto">
                        <img src="../images/globe_1.svg" className="globe" alt="" width="60%"/>
                    </motion.div>
                </div>

                <div className="d-flex justify-content-between mt-5">
                    <div>
                        
                    </div>

                    <Link href="/#about" onClick={()=>setPage(3)}>
                        <u><a style={{ color: "#51D489", cursor: "pointer" }}>Learn about us &#8594;</a> </u>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubsidiariesSection;
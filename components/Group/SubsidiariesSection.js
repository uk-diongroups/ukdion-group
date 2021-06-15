import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


const SubsidiariesSection = ({ setSubsidiaryPosition, setPage, subsidiary }) => {
    const { ref, inView} = useInView({
        threshold: 0.4
    });
    const subsidiaryRef = useRef()
    
    const animation = useAnimation();
    useEffect(() => {
        if(inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: 0.5,
                    bounce: 0.5,
                    ease: [0.6, -0.05, 0.01, 0.99],
                    delay: 0.2
                }
            })
        }
        if(!inView){
            animation.start({
                opacity: 0
            })
        } 
        
    }, [inView])
    useEffect(() => {
        setSubsidiaryPosition(subsidiaryRef.current.offsetTop)
    }, [])
    
    return (
        <div className="subsidaries" id="subsidiaries" ref={ref}>
            <div className="containing_background_content" ref={subsidiaryRef}>
                <motion.div
                    animate={animation}
                    className="our_subsidaries"
                >
                    <div>
                        <h5>Our subsidiaries</h5>
                        <small>UK-DION GROUP LIMITED is an asset management company duly registered with the Corporate Affairs Commission (CAC) and regulated by the Securities and Exchange Commission (SEC)</small>
                        <br />
                        <br />
                        <div className="borderless_box mt-4">
                            <div className="border-top-0 border-right border-bottom pl-0 pr-3 py-3 borderful">
                                <Link href="/">
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
                                        <p>DION Factory</p>  
                                    </a>
                                </Link>
                            </div>

                            <div></div>

                            <div className="border-top-0 border-left p-3 borderful">
                                <Link href="/dion_homes">
                                    <a>
                                        <img src="../images/group_1.svg" alt="" />
                                        <p>Real estate</p>  
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-right my-auto">
                        <img src="../images/globe_1.svg" className="globe" alt="" width="60%"/>
                    </div>
                </motion.div>

                <div className="d-flex justify-content-between mt-5">
                    <div>
                        {/* <p onClick={()=>setPage(1)}>
                            <u><a style={{ color: "#51D489", cursor: "pointer" }}>&#8592; Back</a> </u>
                        </p> */}
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
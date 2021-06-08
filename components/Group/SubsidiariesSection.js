import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const SubsidiariesSection = () => {
    const { ref, inView} = useInView({
        threshold: 0.4
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
        <div className="subsidaries" id="subsidiaries" ref={ref}>
            <div className="containing_background_content">
                <motion.div animate={animation}  className="our_subsidaries">
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
                                <Link href="/real_estate">
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
                        {/* <p>Scroll to navigate</p> */}
                    </div>

                    <Link href="/#about" >
                        <u><a style={{ color: "#51D489", cursor: "pointer" }}>Learn about us &#8594;</a> </u>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubsidiariesSection;
import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const BuildingSection = ({ setPage }) => {
    const { ref, inView} = useInView({
        threshold: 0.4
    });
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
    return (
        <div className="building_section" id="about" ref={ref}>
            <div className="containing_background_content">
                <motion.div animate={animation} className="building">
                    <div className="building_details">
                        <small className="text-success">About us</small>
                        <h5 className="mt-3">Building Innovative For a Smart Future</h5>
                        <p>UK-DION GROUP LIMITED is an asset management company duly registered with the Corporate Affairs Commission (CAC) and regulated by the Securities and Exchange Commission (SEC). Our philosophy is to provide our clients with the best independent advice on their investments and help them get the best value for their money.</p>
                        <Link href="/about">
                                <a>
                                    <button className="btn btn-success px-4">
                                        Learn more
                                    </button>
                                </a>
                        </Link>
                        
                    </div>

                    <div className="building_img text-right">
                        <img src="../images/group_3.png" alt=""/>
                    </div>
                </motion.div>
                <div className="d-flex justify-content-between mt-5">
                    <div>
                        {/* <u><a style={{ color: "#51D489", cursor: "pointer" }}>&#8592; Back</a> </u> */}
                    </div>

                    <div className="text-right">
                        <Link href="/#core_values" >
                            <u><a style={{ color: "#51D489", cursor: "pointer" }}>Core Values &#8594;</a> </u>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildingSection;
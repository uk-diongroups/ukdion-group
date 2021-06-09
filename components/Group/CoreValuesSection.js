import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Footer from '../shared/Footer/Footer';

const CoreValuesSection = ({ setPage, fadeInUp }) => {
    const { ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if(inView) {
            animation.start({
                y: 0, 
                opacity: 1,
                transition: {
                    type: 'spring', duration: 4
                }
            })
        }
        if(!inView){
            animation.start({
                y: 90,
                opacity: 0
            })
        } 
        
    }, [inView])
    return (
        <>
            <div className="core_values" id="core_values" ref={ref}>
                <motion.div variants={fadeInUp} className="containing_background_content core_value_things">
                    <div className="core_values_content">
                        <h5>Our core <span>values</span></h5>
                        <small>UK-DION Group is a bespoke group of companies focused on delivering value in the financial Services space.Our model is focused on investment management, financial Advisory,.</small>
                    </div>
                    <div className="core_value_icons mt-5">
                        <div>
                            <img src="../images/time-is-money.png" alt="" />
                            <p className="mt-2">United</p>
                        </div>
                        <div>
                            <img src="../images/idea.png" alt="" />
                            <p className="mt-2">Knowledgable</p>
                        </div>
                        <div>
                            <img src="../images/passive.png" alt="" />
                            <p className="mt-2">Driven</p>
                        </div>
                        <div>
                            <img src="../images/shield.png" alt="" />
                            <p className="mt-2">Integrity</p>
                        </div>
                        <div>
                            <img src="../images/pie-chart.png" alt="" />
                            <p className="mt-2">Organized</p>
                        </div>
                        <div>
                            <img src="../images/goal.png" alt="" />
                            <p className="mt-2">Notable</p>
                        </div>
                    </div>
                   
                </motion.div>
                <div className="d-flex justify-content-between mt-5 navControls">
                    <div>
                        <p onClick={()=>setPage(3)}>
                            <u><a style={{ color: "#51D489", cursor: "pointer" }}>&#8592; Previous</a> </u>
                        </p>
                    </div>

                    <p onClick={()=>setPage(1)}>
                        <u><a style={{ color: "#51D489", cursor: "pointer" }}>Back to top &#x02191;</a> </u>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CoreValuesSection;
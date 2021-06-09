import React from 'react';
import { motion } from "framer-motion"
import Link from 'next/link';
import GroupNavbar from '../shared/Navbar/Group.navbar';

const SplashScreen = ({ stagger, fadeInRight, fadeInUp, setPage }) => {
    return (
        <div className="bdc_navbar_background">
            <div className="containing_background_content">
                <GroupNavbar setPage={setPage} homePage={true}/>
                <motion.div variants={stagger} className="group_header_content">
                    <motion.div variants={fadeInRight}>
                        <h5>We simply add <span>value</span></h5>
                        <small>Leading you through the successful path of investment. No guessing. We simply stay S.M.A.R.T bringing you the best returns on investment.</small>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="d-none d-md-block d-lg-block text-right">
                        <img src="/images/new_cube.svg" className="" />
                    </motion.div>
                    
                    <div className="small_section">
                        <img src="/images/small1.png" alt="" className="small1 pulse"/>
                    
                        <img src="/images/small2.png" alt="" className="small2 pulse"/>
                    
                        <img src="/images/small3.png" alt="" className="small3 pulse"/>
                    </div>
                </motion.div>
            
                <div className="d-flex justify-content-between" style={{marginTop:'5rem', marginRight: '2rem'}}>
                    <div>
                        <p></p>
                    </div>

                    <div onClick={()=>setPage(2)}>
                        {/* <Link href="#subsidiaries"> */}
                            <u><a style={{ color: "#51D489", cursor: "pointer" }}>Our subsidiaries &#8594;</a> </u>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
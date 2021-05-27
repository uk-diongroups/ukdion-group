import React from 'react';
import GroupNavbar from '../shared/Navbar/Group.navbar';

const GroupIndex = () => {
    return (
        <div className="bdc_container container-fluid p-0">
            <div className="bdc_navbar_background">
                <div className="containing_background_content">
                    <GroupNavbar/>
                    <div className="group_header_content">
                        <div>
                            <h5>We simply add <span>value</span></h5>
                            <small>Leading you through the successful path of investment. No guessing. We simply stay S.M.A.R.T bringing you the best returns on investment.</small>
                        </div>

                        <div className="d-none d-md-block d-lg-block text-right">
                            <img src="/images/group_1.svg" className="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between" style={{marginTop:'7rem'}}>
                        <div>
                            <p>Scroll to navigate</p>
                        </div>

                        <div>
                            <p>Our subsidaries</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subsidaries">
                <div className="containing_background_content">
                    <div className="our_subsidaries">
                        <div>
                            <h5>Our subsidaries</h5>
                            <small>UK-DION GROUP LIMITED is an asset management company duly registered with the Corporate Affairs Commission (CAC) and regulated by the Securities and Exchange Commission (SEC)</small>
                            <div className="borderless_box mt-4">
                                <div className="border-top-0 border-right border-bottom p-5">
                                    <img src="../images/group_1.svg" alt="" />
                                    <p>Investment</p>
                                </div>

                                <div className="border-top-0 border-right border-bottom p-5">
                                    <img src="../images/group_1.svg" alt="" />
                                    <p>Microfinance</p>
                                </div>

                                <div className="border-top-0 border-bottom pt-5 pl-5">
                                    <img src="../images/group_1.svg" alt="" />
                                    <p>Bureau De change</p>
                                </div>

                                <div className="border-top-0 border-right p-5">
                                    <img src="../images/group_1.svg" alt="" />
                                    <p>DION Factory</p>
                                </div>

                                <div></div>

                                <div className="border-top-0 border-left p-5">
                                    <img src="../images/group_1.svg" alt="" />
                                    <p>Real estate</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-right my-auto">
                            <img src="../images/globe_1.svg" className="globe" alt="" width="60%"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div>
                            <p>Scroll to navigate</p>
                        </div>

                        <div>
                            <p>Learn about us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="building_section">
                <div className="containing_background_content">
                    <div className="building">
                        <div className="building_details">
                            <small className="text-success">About us</small>
                            <h5 className="mt-3">Building Innovative For a Smart Future</h5>
                            <p>UK-DION GROUP LIMITED is an asset management company duly registered with the Corporate Affairs Commission (CAC) and regulated by the Securities and Exchange Commission (SEC). Our philosophy is to provide our clients with the best independent advice on their investments and help them get the best value for their money.</p>
                            <button className="btn btn-success px-4">Learn more</button>
                        </div>

                        <div className="building_img text-right">
                            <img src="../images/group_3.png" alt=""/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>Scroll to navigate</p>
                        </div>

                        <div className="text-right">
                            <p>Core values</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="core_values">
                <div className="containing_background_content core_value_things">
                    <div className="core_values_content">
                        <h5>Our core <span>values</span></h5>
                        <small>UK-DION Group is a bespoke group of companies focused on delivering value in the financial Services space.Our model is focused on investment management, financial Advisory,.</small>
                    </div>
                    <div className="core_value_icons mt-4">
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
                </div>
            </div>
        </div>
    );
};

export default GroupIndex;
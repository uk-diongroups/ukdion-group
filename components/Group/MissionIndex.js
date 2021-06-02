import React,{useState} from 'react';
import GroupNavbar from '../shared/Navbar/Group.navbar';
import Boards from './Boards';
import Management from './Management';

const Mission = () => {
    const [tabs, setTabs] = useState('Board of Directors');
    const tabsOption = [
        {
            name: 'Board of Directors'
        },
        {
            name: 'Management'
        }
    ]
    return (
        <div className="bdc_container container-fluid p-0">
            <div className="containing_background_content">
                <GroupNavbar/>
                <div className="mission_header_content">
                    <h4>We simply add <span>value</span></h4>
                    <p>UK-DION Group is a bespoke group of companies focused on delivering value in the financial Services space.Our model is focused on investment management, financial Advisory, Micro-Finance and FX services. we are a leading alternative asset manager. Our funds are focused on areas accretive to Africa’s and Nigeria’s economic development targeting sectors such as Real Estate, SMEs, Financial Inclusion, Healthcare and Education.</p>
                    <br />
                    <div>
                        <img src="../images/group_12.png" alt="" width="100%"/>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="about_background">
                <div className="about_background_content">
                    <div className="our_core_values">
                        <div>
                            <h5>Our core <span>values</span></h5>
                            <small>UK-DION Group is a bespoke group of companies focused on delivering value in the financial Services space.Our model is focused on investment management, financial Advisory,.</small>
                            <div className="mission_core_value_icons mt-4">
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

                        <div className="text-right">
                            <img src="../images/group_35.png" className="group_img" alt=""/>
                        </div>
                    </div>
                    <div className="mission mx-auto">
                        <div className="our_mission">
                            <h5>Our Mission</h5>
                            <p>To become the most sought-after investment company nationally and internationally, setting the pace for other investment companies to follow by offering the best financial/investment advice and packages to suit our client’s needs per time and being committed to the growth of our partners and investors</p>
                        </div>

                        <div className="our_vision">
                            <h5>Our Vision</h5>
                            <p>Building a formidable investment institution in Nigeria with international standard and recognition, to give our investors value for their money invested through rapid growth and profit within the shortest possible time.</p>
                        </div>
                    </div>
                    <div className="">
                         <img src="../images/small_img.png" className="absolute_images" alt="" />
                         <img src="../images/signs.png" className="another_image" alt="" />
                    </div>
                </div>
            </div>

            <div className="our_people mb-5">
                <h5 className="text-center">Our People</h5>
                <div className="d-flex justify-content-between w-25 m-auto">
                    {
                        tabsOption.map(tab =>(
                            <React.Fragment key={tab.name}>
                                <div className="text-center">
                                    <li onClick={()=>setTabs(tab.name)} className={tabs === tab.name ? "active" : ""}>{tab.name}</li>
                                    {tab.name === tabs ? <p className="dotted">&#46;</p> : ''}
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
                <br />
                {tabs === 'Board of Directors' ? <Boards /> : '' }
                {tabs === 'Management' ? <Management /> : '' }
            </div>
        </div>
    );
};

export default Mission;
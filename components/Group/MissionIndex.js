import React,{useState, Fragment} from 'react';
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
                <div className="mission_header_content mt-5">
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
                    <div className="our_core_values col-lg-6 text-center m-auto">
                        <div>
                            <h5>Our core <span>values</span></h5>
                            <small>UK-DION Group is a bespoke group of companies focused on delivering value in the financial Services space.Our model is focused on investment management, financial Advisory.</small>
                            <div className="mission_core_value_icons mt-5">
                                <div>
                                    <img src="../images/time-is-money.png" alt="" />
                                    <p><span className="emphasis">U</span>nited</p>
                                </div>
                                <div>
                                    <img src="../images/idea.png" alt="" />
                                    <p><span className="emphasis">K</span>nowledgable</p>
                                </div>
                                <div>
                                    <img src="../images/passive.png" alt="" />
                                    <p><span className="emphasis">D</span>riven</p>
                                </div>
                                <div>
                                    <img src="../images/shield.png" alt="" />
                                    <p><span className="emphasis">I</span>ntegrity</p>
                                </div>
                                <div>
                                    <img src="../images/pie-chart.png" alt="" />
                                    <p><span className="emphasis">O</span>rganized</p>
                                </div>
                                <div>
                                    <img src="../images/goal.png" alt="" />
                                    <p><span className="emphasis">N</span>otable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mission mx-auto col-lg-6">
                        <div className="our_mission">
                            <h5>Our Mission</h5>
                            <p>To build trust, ensure value addition and wealth creation for our clients.</p>
                        </div>

                        <div className="our_vision">
                            <h5>Our Vision</h5>
                            <p>To be West Africa’s leading financial solutions hub.

To be a one stop shop for all financial solutions in West Africa.</p>
                        </div>
                    </div>
                    <div className="">
                         <img src="../images/signs.png" className="another_image" alt="" />
                         <img src="../images/signs.png" className="sign_image" alt="" />
                    </div>
                </div>
            </div>

            <div className="our_people mb-5">
                <h5 className="text-center">Our People</h5>
                <div className="d-flex justify-content-between w-25 m-auto">
                    {
                        tabsOption.map(tab =>(
                            <Fragment key={tab.name}>
                                <div className="text-center" style={{cursor:'pointer'}}>
                                    <li onClick={()=>setTabs(tab.name)} className={tabs === tab.name ? "active" : ""}>{tab.name}</li>
                                    {tab.name === tabs ? <p className="dotted">&#46;</p> : ''}
                                </div>
                            </Fragment>
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
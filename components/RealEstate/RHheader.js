import Image from 'next/image';
import { useState } from 'react';
import ShortNav from '../shared/Navbar/ShortNav'
import Slider from './Slider';

const RHheader = () => {
    const [status, setStatus] = useState("mission")
    return (
        <div className="real_estate">
            <div className="real_estate_content">
                <ShortNav />
                <br />
                <br />
                <div className="real_estate-hero">
                    <div className="first-half mt-5">
                        <div>
                            <div className="real_estate-hero_text">
                                <p>Adding value to the economy through <span>real estate</span></p>
                            </div>
                            <br />
                            <p className="subhead">
                            UK-DION Homes is a leading real estate company engaged in the acquisition, development, investment and management of luxurious contemporary homes across Nigeria.
                            </p> 
                            <br />
                            <button className="px-5">Contact us</button> 
                        </div>
                    </div>
                    
                    <div className="real_estate-hero_image">
                        <Image
                            src="/house.png"
                            alt="House image"
                            className="image"
                            width="1000"
                            height="1000"
                            layout="responsive"
                        /> 

                       <img src="/dot.png" alt="" className="dot"/>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <section className="real_estate-midSection2">
                <div>
                    <img src="/dot.png" alt="" className="dot1"/>
                </div>

                <div className="real_estate-midSection2_main">
                    <div className="toggler_container mt-3">
                        <p className={`toggler ${status === "mission" ? "green" : ''}`} onClick={()=>setStatus("mission")}>Our Mission</p>
                        <p className={`toggler ${status === "vision" ? "green" : ''}`}  onClick={()=>setStatus("vision")}>Our Vision</p>
                    </div>
                    <div className="toggle_content">
                        {
                            status === "mission" ? 
                            "Adding value to the economy by creating affordable living for residents. Offering luxury and affordable housing by using modern day technology to proffer housing solutions for residents in West Africa." : "Our vision is to be the leading real estate development and management company, that delivers quality, stylish and classy homes at competitive rates."
                        }
                    </div>
                </div>
            </section>
            <section className="business_area mt-5">
                <div>
                    <small className="text-success">BUSINESS AREA</small>
                    <h3 className="my-3">How we can serve you</h3>
                    <p>The UK-DION Homes is set to change the face of Real Estate Development in Nigeria by delivering homes that combine high class architectural design with exotic environmentally friendly finishes.</p>
                    <div className="business_divide p-0">
                        <div className="business_divide_content">
                            <div>
                                <img src="./images/maintain.png" alt="" />
                            </div>
                            <label>Property Development<br/>Building and Construction of</label>
                            <div>
                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>1,2,3-bedroom apartments</p>
                                </div>

                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>4-bedroom semi-detached houses and terraces</p>
                                </div>

                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>5 bedroom detached houses</p>
                                </div>

                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>JV Partnership with reputable developers and authentic land owners using viable business models</p>
                                </div>
                            </div>
                        </div>
                        <div className="business_divide_content">
                            <div>
                                <img src="./images/property.png" alt="" />
                            </div>
                            <label>Land Acquisition</label>
                            <div>
                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>Purchase</p>
                                </div>

                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>Government Allocation</p>
                                </div>

                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>Sponsorship of family large parcel for survey, reclamation, and infrastructural development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="business_divide_content">
                            <div>
                                <img src="./images/real_estate.png" alt="" />
                            </div>
                            <label>Property and Facility Management</label>
                            <div>
                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>Engagement in property and facilities management transactions</p>
                                </div>

                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>All company’s portfolio would be handled by UK-DION Homes</p>
                                </div>
                            </div>
                        </div>
                        <div className="business_divide_content">
                            <div>
                                <img src="./images/advert.png" alt="" />
                            </div>
                            <label>Property Sales and Marketing</label>
                            <div>
                                <div className="d-flex">
                                    <p className="sign_dot">&#46;</p>
                                    <p>Engagement in conventional sale, lease of properties in the portfolio of UK-DION Residences, and sale of Real Estate products of other companies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-auto">
                    <img src="./images/house.svg" className="w-100"/>
                </div>
            </section>
            <br /><br /><br />
            <section className="slider_section mt-5">
                <div className="slider_section_content">
                    <small className="text-success">OUR PROPERTIES</small>
                    <h3 className="my-3">Type of properties we have managed</h3>
                    <p>You might want to check out some of the properties we have and clients we have served.</p>
                    <Slider />
                </div>
            </section>
        </div>
    );
};

export default RHheader;
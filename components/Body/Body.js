import React from 'react';
import Image from 'next/image'
import BdcNavbar from '../shared/Navbar/Bdc.navbar';
const Body = () => {
    return (
        <div className="bdc_container container-fluid p-0">
            <div className="bdc_navbar_background">
                <div className="containing_background_content">
                    <BdcNavbar/>
                    <div className="bdc_header_content">
                        <div>
                            <h5 className="d-none d-md-block d-lg-block">Reliable, fast and convenient <br/><span>Bureau De Change</span> services.</h5>
                            <h5 className="d-sm-block d-md-none d-lg-none">Reliable, fast and convenient <span>Bureau De Change</span><br/> services.</h5>
                            <p className="mt-4 mb-5 d-none d-md-block d-lg-block">We help businesses and individuals place orders and broker <br/>foreign currency transactions conveniently and securely. </p>
                            <button className="btn btn-success px-4">
                                Request for exchange
                            </button>
                        </div>

                        <div className="d-none d-md-block d-lg-block">
                            <img src="/images/checker.svg" width={150} height={600}/>
                        </div>

                        <div className="d-none d-md-block d-lg-block">
                            <img src="/images/dollars.png" className="dollars" />
                            <img src="/images/fyne_gurl.png" className="fyn_gurl"/>                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="bdc_about d-none d-md-block d-lg-block">
                <div className="bdc_about_content">
                    <h3>Borderless. Without limit</h3>
                    <small>We support currencies from several countries.</small>
                    <div className="countries_box col-lg-10 mx-auto mt-5">
                        <div className="d-flex justify-content-between">
                            <div className="country">
                                <img src="/images/nija.svg" alt=""/>
                                <p>Nigeria</p>
                            </div>

                            <div className="country">
                                <img src="/images/uk.png" alt=""/>
                                <p>United Kingdom</p>
                            </div>

                            <div className="country">
                                <img src="/images/usa.svg" alt=""/>
                                <p>United States</p>
                            </div>
                        </div>
                        <br/>
                        <div className="mx-auto" style={{width:'30%'}}> 
                            <div className="country w-100">
                                <img src="/images/china.svg" alt=""/>
                                <p>China</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bdc_learn">
                <div className="bdc_learn_background"></div>
                <div className="bdc_learn_content">
                    <h4>Learn more about us</h4>
                    <p>DIon Bureau De Change Ltd is a subsidiary of UK-DION limited.</p>
                    <p>It is licensed by the Central Bank of Nigeria to provide foreign exchange services. We operate out of our head office at Lekki Phase 1 in Lagos, where we provide foreign exchange services to both corporates and individuals. Our rates are competitive and we are re focused on building long-term, mutually- beneficial relationships.</p>
                </div>

                <div className="text-center">
                    <img src="/images/globe.svg" className="globe" alt="globe" />
                </div>
            </div>
        </div>
    );
};

export default Body;
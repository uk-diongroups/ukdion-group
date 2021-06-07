import Image from 'next/image';
import { useState } from 'react';
import ShortNav from '../shared/Navbar/ShortNav'
import Slider from './Slider';

const RHheader = () => {
    const [status, setStatus] = useState("mission")
    return (
        <div className="real_estate">
            <ShortNav />
            <br />
            <br />
            <div className="real_estate-hero">
                <div className="first-half">
                    <div>
                        <div className="real_estate-hero_text">
                            <p>Adding value to the economy
                            by creating <span>affordable living </span>
                            for residents.</p>
                        </div>
                        <br />
                        <p className="subhead">
                            We help businesses and individuals place orders and 
                            broker foreign currency transactions conveniently and securely
                        </p> 
                        <br />
                        <button>Request for exchange</button> 
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
                </div>
            </div>
            <br /><br /><br />
            <section className="real_estate-midSection">
                <div className="real_estate-midSection_firstHalf">
                    <Image 
                        src="/arrow.svg"
                        alt="image of an arrow"
                        width={200}
                        height={350}
                    />
                </div>
                <div className="real_estate-midSection_secondHalf" >
                    <p className="topic">We simply add value through real estate</p>
                    <br />
                    <p className="body">UK Dion Homes Ltd is a real estate company that focuses on simply adding value to clients. Through real estate construction, facility management and real brokerage, we strive to be a client centric firm by providing exclusive homes for clients’ satisfaction.</p>
                </div>
            </section>
            <div className="arrow_image">
                <Image 
                    src="/arrow.svg"
                    alt="image of an arrow"
                    width={100}
                    height={100}
                />
            </div>
            <br /><br />
            <section className="real_estate-midSection2">
                <div className="real_estate-midSection2_main">
                    <div className="toggler_container">
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
                <div className="noShow">
                    <Image 
                        src="/out_arrow.svg"
                        alt="image of an arrow"
                        width={200}
                        height={350}
                    />
                </div>
            </section>
            <br /><br /><br />
            <section>
                <Slider />
            </section>
        </div>
    );
};

export default RHheader;
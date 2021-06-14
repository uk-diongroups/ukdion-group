import React, { useState } from 'react';
import Image from 'next/image';
// import { Link, animateScroll as scroll } from "react-scroll";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  const GroupNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="bdc_navbar">
            <div className="navbarr">
            <Navbar  expand="md">
                <NavbarBrand href="/" className="mr-auto" tag={()=>
                    <Image
                        src="/second_logo.svg"
                        alt="Company logo"
                        width={120}
                        height={90}
                        style={{marginTop:'-30px'}}
                    />}>   
                </NavbarBrand>
                
                <Collapse isOpen={isOpen} navbar className="mt-3">
                    <Nav className="ml-auto group_links" navbar>
                        <NavItem>
                            <NavLink href="/#subsidiaries" 
                            onClick={()=>props.scrollTo(props.subsidiaryRef)}
                            >Subsidiaries</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/#about" 
                            // onClick={()=>props.scrollTo(props.aboutRef)}
                            >About us</NavLink>
                        </NavItem>
                        {/* <Link
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >To bottom</Link> */}

                        {/* <NavItem>
                            <NavLink href="#">Blog</NavLink>
                        </NavItem> */}

                        {/* <NavItem>
                            <NavLink href="/">Careers</NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
                <div id="close-icon">
                    <img src="/images/gg_menu-left.svg" alt=""/>
                </div>
            </Navbar>
      </div>
        </div>
    );
};

export default GroupNavbar;
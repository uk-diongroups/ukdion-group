import React, { useState } from 'react';
import Image from 'next/image';
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
  
    return (
        <div className="bdc_navbar">
            <div className="navbarr">
            <Navbar  expand="md">
                <NavbarBrand href="/" className="mr-auto" tag={()=>
                <NavLink href="/">
                    <Image
                        src="/second_logo.svg"
                        alt="Company logo"
                        width={120}
                        height={90}
                        style={{marginTop:'-30px'}}
                    /> 
                </NavLink>
                }>
                </NavbarBrand>
                
                <Collapse isOpen={isOpen} navbar className="mt-3">
                    <Nav className="ml-auto group_links" navbar>
                        <NavItem>
                            <NavLink href="/#subsidiaries" 
                            >Subsidiaries</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/#about"
                            >About us</NavLink>
                        </NavItem>

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
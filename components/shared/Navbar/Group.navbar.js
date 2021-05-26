import React, { useState } from 'react';
import Image from 'next/Image';
import {
    Collapse,
    Navbar,
    NavbarToggler,
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
            <div className="navbarr m-0">
            <Navbar  expand="md">
                <NavbarBrand href="/" className="mr-auto" tag={()=>
                    <Image
                        src="/company-logo.png"
                        alt="Company logo"
                        width={70}
                        height={70}
                    />}>   
                </NavbarBrand>
                
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">About us</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">Subsidaries</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">Media</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">Careers</NavLink>
                        </NavItem>
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
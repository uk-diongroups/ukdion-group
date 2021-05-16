import { useState } from 'react';
import Image from 'next/image'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  
  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="navbarr">
        <Navbar color="light" light expand="md">
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
                <NavLink href="/">Subsidiaries</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Media</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Careers</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
            <div id="close-icon" onClick={toggle} className={isOpen ? "open" : "" }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <svg className="navbar-toggler" onClick={toggle} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5.995C2 5.445 2.446 5 2.995 5H11.005C11.2689 5 11.522 5.10483 11.7086 5.29143C11.8952 5.47803 12 5.73111 12 5.995C12 6.25889 11.8952 6.51197 11.7086 6.69857C11.522 6.88517 11.2689 6.99 11.005 6.99H2.995C2.73111 6.99 2.47803 6.88517 2.29143 6.69857C2.10483 6.51197 2 6.25889 2 5.995Z" fill="#0BA759"/>
                <path d="M2 12C2 11.45 2.446 11.005 2.995 11.005H21.005C21.2689 11.005 21.522 11.1098 21.7086 11.2964C21.8952 11.483 22 11.7361 22 12C22 12.2639 21.8952 12.517 21.7086 12.7036C21.522 12.8902 21.2689 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12Z" fill="#0BA759"/>
                <path d="M2.995 17.01C2.73111 17.01 2.47803 17.1148 2.29143 17.3014C2.10483 17.488 2 17.7411 2 18.005C2 18.2689 2.10483 18.522 2.29143 18.7086C2.47803 18.8952 2.73111 19 2.995 19H15.005C15.2689 19 15.522 18.8952 15.7086 18.7086C15.8952 18.522 16 18.2689 16 18.005C16 17.7411 15.8952 17.488 15.7086 17.3014C15.522 17.1148 15.2689 17.01 15.005 17.01H2.995Z" fill="#0BA759"/>
            </svg>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;
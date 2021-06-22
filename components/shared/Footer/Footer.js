import { Col, Row } from "reactstrap"
import Link from 'next/link'

const Footer = () => {
    const routes = [
        {
            head: "COMPANY",
            routes: [
                {
                    name: "About us",
                    link: "/about"
                },
                
                {
                    name: "Careers",
                    link: "/"
                },
                {
                    name: "Contact",
                    link: "/"
                },
                {
                    name: "Blog",
                    link: "/"
                }
            ]
        },
        {
            head: "SUBSIDIARIES",
            routes: [
                {
                    name: "UK-DION Investments",
                    link: "https://ukdion-group-investment.herokuapp.com/"
                },
                {
                    name: "Dion Microfinance",
                    link: "/"
                },
                {
                    name: "Bureau De Change",
                    link: "/bdc"
                },
                {
                    name: "Dion Water",
                    link: "/"
                },
                {
                    name: "Dion Homes",
                    link: "/dion_homes"
                }
            ]
        },
        {
            head: "QUICK LINKS",
            routes: [
                {
                    name: "Media",
                    link: "/media"
                },
                {
                    name: "FAQS",
                    link: "/"
                },
                {
                    name: "Brand Guideline",
                    link: "/"
                }
            ]
        },
        {
            head: "LEGAL",
            routes: [
                {
                    name: "Privacy policy",
                    link: "/media"
                },
                {
                    name: "Terms of service",
                    link: "/media"
                }
            ]
        }
        // {
        //     head: "OUR EXPERTISE",
        //     routes: [
        //         {
        //             name: "Goal based investment",
        //             link: "/"
        //         },
        //         {
        //             name: "Wealth and portfolio",
        //             link: "/"
        //         },
        //         {
        //             name: "Risk management",
        //             link: "/"
        //         },
        //         {
        //             name: "Financial advisory services",
        //             link: "/"
        //         }
        //     ]
        // }
    ]
    return (
        <footer className="footer" id='footer'>
            <Col md={12} className="footer_content">
                <Row  className="pt-4">
                    <Col md={6}>
                        <div>
                            <Row>
                                {/* facebook */}
                                <Link href="https://web.facebook.com/ukdioninvestmentltd/?_rdc=1&_rdr">
                                    <a>
                                        <svg className="footer-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#0BA759" fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0633C22.5 6.26486 17.7984 1.56329 12 1.56329C6.20156 1.56329 1.5 6.26486 1.5 12.0633C1.5 17.3039 5.33906 21.6478 10.3594 22.4363V15.0994H7.69266V12.0633H10.3594V9.75001C10.3594 7.11892 11.9273 5.66439 14.3255 5.66439C15.4744 5.66439 16.6763 5.8697 16.6763 5.8697V8.45392H15.3516C14.048 8.45392 13.6402 9.26298 13.6402 10.0945V12.0633H16.552L16.087 15.0994H13.6406V22.4372C18.6609 21.6492 22.5 17.3053 22.5 12.0633Z"/>
                                        </svg>  
                                    </a>
                                </Link>
                                
                                {/* instagram */}
                                <Link href="https://www.instagram.com/uk_dion/">
                                    <a>
                                        <svg className="footer-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#0BA759" d="M16.6248 3.24984C17.7842 3.25331 18.8951 3.71539 19.7148 4.53517C20.5346 5.35495 20.9967 6.46582 21.0002 7.62516V16.3748C20.9967 17.5342 20.5346 18.6451 19.7148 19.4648C18.8951 20.2846 17.7842 20.7467 16.6248 20.7502H7.87516C6.71582 20.7467 5.60495 20.2846 4.78517 19.4648C3.96539 18.6451 3.50331 17.5342 3.49984 16.3748V7.62516C3.50331 6.46582 3.96539 5.35495 4.78517 4.53517C5.60495 3.71539 6.71582 3.25331 7.87516 3.24984H16.6248ZM16.6248 1.5H7.87516C4.50625 1.5 1.75 4.25625 1.75 7.62516V16.3748C1.75 19.7437 4.50625 22.5 7.87516 22.5H16.6248C19.9937 22.5 22.75 19.7437 22.75 16.3748V7.62516C22.75 4.25625 19.9937 1.5 16.6248 1.5Z"/>
                                            <path fill="#0BA759" d="M17.9373 7.62515C17.6778 7.62515 17.424 7.54818 17.2082 7.40396C16.9923 7.25974 16.8241 7.05475 16.7248 6.81492C16.6254 6.5751 16.5994 6.3112 16.6501 6.0566C16.7007 5.802 16.8257 5.56813 17.0093 5.38458C17.1928 5.20102 17.4267 5.07602 17.6813 5.02537C17.9359 4.97473 18.1998 5.00072 18.4396 5.10006C18.6794 5.1994 18.8844 5.36763 19.0286 5.58347C19.1729 5.79931 19.2498 6.05306 19.2498 6.31265C19.2502 6.48512 19.2165 6.65596 19.1507 6.81536C19.0849 6.97477 18.9882 7.11961 18.8663 7.24156C18.7443 7.36351 18.5995 7.46017 18.4401 7.526C18.2806 7.59183 18.1098 7.62552 17.9373 7.62515ZM12.25 8.49984C12.9423 8.49984 13.619 8.70512 14.1946 9.08972C14.7702 9.47433 15.2188 10.021 15.4837 10.6605C15.7486 11.3001 15.818 12.0039 15.6829 12.6828C15.5478 13.3618 15.2145 13.9855 14.725 14.475C14.2355 14.9645 13.6118 15.2978 12.9328 15.4329C12.2539 15.568 11.5501 15.4986 10.9106 15.2337C10.271 14.9688 9.72433 14.5202 9.33973 13.9446C8.95513 13.369 8.74985 12.6923 8.74985 12C8.75084 11.072 9.11992 10.1823 9.77611 9.52611C10.4323 8.86992 11.322 8.50083 12.25 8.49984ZM12.25 6.75C11.2117 6.75 10.1966 7.0579 9.33326 7.63478C8.4699 8.21166 7.79699 9.0316 7.39963 9.99091C7.00227 10.9502 6.89831 12.0058 7.10088 13.0242C7.30345 14.0426 7.80347 14.9781 8.53769 15.7123C9.27192 16.4465 10.2074 16.9465 11.2258 17.1491C12.2442 17.3517 13.2998 17.2477 14.2591 16.8504C15.2184 16.453 16.0383 15.7801 16.6152 14.9167C17.1921 14.0534 17.5 13.0383 17.5 12C17.5 10.6076 16.9469 9.27225 15.9623 8.28769C14.9777 7.30312 13.6424 6.75 12.25 6.75Z"/>
                                        </svg>
                                    </a>
                                </Link>
                                {/* twitter */}
                                <Link href="https://twitter.com/uk_dion">
                                    <a>
                                        <svg className="footer-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#0BA759" d="M23.75 5.13282C22.906 5.49955 22.013 5.74116 21.0992 5.85001C22.0595 5.28769 22.7817 4.39434 23.1303 3.33751C22.2224 3.86841 21.2307 4.24092 20.1978 4.43907C19.7629 3.98322 19.2397 3.62059 18.6603 3.3732C18.0808 3.12581 17.4571 2.99884 16.827 3.00001C14.2761 3.00001 12.2117 5.03438 12.2117 7.5422C12.2099 7.89102 12.2499 8.23881 12.3308 8.57813C10.5016 8.49238 8.7104 8.02575 7.07187 7.2081C5.43333 6.39044 3.98351 5.23977 2.81516 3.8297C2.40527 4.52069 2.1885 5.30909 2.1875 6.11251C2.1875 7.68751 3.00922 9.0797 4.25 9.89532C3.51487 9.87787 2.79481 9.68331 2.15094 9.32813V9.38438C2.15094 11.5875 3.74469 13.4203 5.85406 13.8375C5.4574 13.9432 5.04864 13.9968 4.63812 13.9969C4.34683 13.9974 4.0562 13.9691 3.77047 13.9125C4.35687 15.7172 6.06359 17.0297 8.08531 17.0672C6.44252 18.3333 4.4256 19.0175 2.35156 19.0125C1.98341 19.012 1.61561 18.99 1.25 18.9469C3.35993 20.2942 5.81255 21.0068 8.31594 21C16.8172 21 21.4616 14.0766 21.4616 8.07188C21.4616 7.87501 21.4564 7.67813 21.447 7.48595C22.3485 6.84472 23.1283 6.04787 23.75 5.13282Z"/>
                                        </svg>
                                    </a>
                                </Link>
                            </Row> 
                        </div>
                        <div className="underline footer-body">
                            <Row>Plot 10A, Block 60, Kafayat Abdulrasaq Street,</Row>
                            <Row>Lekki, Lagos State</Row>
                            <Row>+234(0)8091115748</Row>
                        </div>
                        <br/>
                        
                        <a href="mailto: info@ukdion.com" className="email_link">
                            <Row>
                                <svg className="footer-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#F0F4F8" d="M20.625 4.5H4.875C3.83947 4.5 3 5.33947 3 6.375V17.625C3 18.6605 3.83947 19.5 4.875 19.5H20.625C21.6605 19.5 22.5 18.6605 22.5 17.625V6.375C22.5 5.33947 21.6605 4.5 20.625 4.5Z" stroke="#0BA759" strokeWidth="2.89062" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fill="#F0F4F8" d="M6 7.5L12.75 12.75L19.5 7.5" stroke="#0BA759" strokeWidth="2.89062" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="underline">Email</p>  
                            </Row>
                        </a>  
                    </Col>
                    <Col md={6}>
                        <div>
                         <Row className="footer-topic">
                            SIGN UP FOR EMAIL UPDATES
                        </Row>   
                        </div>
                        <div>
                            <Row className="footer-body">
                                Stay in touch to get exclusive news and insights from across our investment portfolio.
                            </Row> 
                            <br />
                            <Row>
                              <input type="text" className="px-3 input-section" />  
                              <button type="button" className="px-4">Subscribe now</button>
                            </Row>
                            
                        </div>
                    </Col>
                </Row>
                <br />
                <hr />
                <Row className="subsidiary-links">
                    {
                        routes.map(route => (
                            <div className="topic-column" key={route.head}>
                                <p>{route.head}</p>
                                <ul>
                                    {
                                        route.routes.map(_path => (
                                            <Link href={_path.link} key={_path.name}>
                                                <a>
                                                    <li>
                                                        {_path.name}
                                                    </li>  
                                                </a>
                                            </Link>
                                        ))
                                    }  
                                </ul>
                            </div>
                        ))
                    }
                </Row>
                <br />
                <hr />
                <Row>
                    <Col md={6}>
                        <small>© 2021 Copyright: UK-Dion Group</small>
                    </Col>
                    <Col md={6} className="text-right">
                        <small>Developed 
                            {/* <span className="footer-span">
                                <svg width="24" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 7.38508C24 3.30637 21.0357 0 17.3797 0C15.1602 0 13.2017 1.22211 12 3.09009C10.7983 1.22211 8.83981 0 6.62097 0C2.96427 0 0 3.30562 0 7.38508C0 7.96283 0.0657534 8.52262 0.178474 9.06221C1.09768 15.4332 7.44825 22.1545 12 24C16.5511 22.1545 22.9023 15.4332 23.8202 9.06296C23.9342 8.52337 24 7.96358 24 7.38508Z" fill="#78B159"/>
                                </svg>
                            </span> */}
                            by the UK-DION Group
                        </small>
                    </Col>
                </Row>
            </Col>
        </footer>
    );
};

export default Footer;
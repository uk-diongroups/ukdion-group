import { useState } from "react";
import Footer from "../shared/Footer/Footer";
import GroupNavbar from "../shared/Navbar/Group.navbar"
import Privacy_content from "./privacy_content";
import Terms_content from "./terms_content";

const MediaComp = () => {
    const [active, setActive] = useState(1)
    const nav = ["Privacy policy", "Terms of service"]
    return (
        <div>
            <div className="container-fluid overall">
            <GroupNavbar />
            <br />
            <div className="mediaComp p-3">
                <h3>Legal Compliance</h3>
                <div className="privacy_group">
                    {
                        nav.map((_nav, index) => (
                            <div key={_nav} className={`item ${active === index ? "active" : ''}`} onClick={()=>setActive(index)}>
                                <p>
                                    {_nav}
                                </p> 
                                {active === index && <p>
                                    &#x02022;
                                </p>}
                            </div>
                           
                        ))
                    }
                </div>
                <div className="p-3">
                    {active === 0 && <Privacy_content />}
                    {active === 1 && <Terms_content />}
                </div>
            </div>
        </div>
            <Footer />
        </div>
    );
};

export default MediaComp;
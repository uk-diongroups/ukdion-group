import { Col } from "reactstrap";
import BdcNavbar from "../shared/Navbar/Bdc.navbar";
import NavBar from "../shared/Navbar/Navbar";

const Header = () => {
    return (
        <header className="header">
            <Col md={12}>
                {/* <NavBar /> */}
                <BdcNavbar />
            </Col>  
        </header>
        
    );
};

export default Header;
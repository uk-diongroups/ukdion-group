import { Col } from "reactstrap";
import NavBar from "../shared/Navbar/Navbar";

const Header = () => {
    return (
        <header className="header">
            <Col md={12}>
                <NavBar />
            </Col>  
        </header>
        
    );
};

export default Header;
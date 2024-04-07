
import { LOGO_URL } from "../utils/constants";
import logo from '../../images/logo.jpeg';
const Header=()=>{
    return (
            <div className="HeaderDiv">
                    <div className="logo">
                            <img alt="logo" src={logo} />
                    </div>
                    <div className="nav-links">
                            <ul>
                                    <li>Home</li>
                                    <li>About US</li>
                                    <li>Contact US</li>
                                    <li>Cart</li>
                            </ul>
                    </div>
            </div>
    )
};
export default Header;
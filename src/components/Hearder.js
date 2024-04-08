
import { LOGO_URL } from "../utils/constants";
import logo from '../../images/logo.jpeg';
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
        const [loginBtn,setLoginBtn]=useState("Login");
    return (
            <div className="HeaderDiv">
                    <div className="logo">
                            <img alt="logo" src={logo} />
                    </div>
                    <div className="nav-links">
                            <ul>
                                    <li><Link>Home </Link></li>
                                    <li><Link to="/about">About US </Link></li>
                                    <li><Link to="/contact">Contact US</Link></li>
                                    <li>Cart</li>
                                    <button className="login-btn" onClick={()=>{
                                        loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
                                        
                                    }}>{loginBtn}</button>
                            </ul>
                    </div>
            </div>
    )
};
export default Header;
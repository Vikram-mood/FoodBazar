
import { LOGO_URL } from "../utils/constants";
import logo from '../../images/logo.jpeg';
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
const Header=()=>{
        const [loginBtn,setLoginBtn]=useState("Login");


        const isOnline=useOnlineStatus();
    return (
            <div className="HeaderDiv flex justify-between bg-orange-200 shadow-xl ">
                    <div className="logo w-42">
                            <img alt="logo" className="w-20" src={logo} />
                    </div>
                    <div className="nav-links p-2 m-1">
                            <ul className="flex">
                                    <li className="p-3"><Link>Active:{isOnline? "🟢" : "🔴" }</Link></li>
                                    <li className="p-3"><Link>Home </Link></li>
                                    <li className="p-3"><Link to="/about">About US </Link></li>
                                    <li className="p-3"><Link to="/contact">Contact US</Link></li>
                                    <li className="p-3">Cart</li>
                                    <button className="login-btn" onClick={()=>{
                                        loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
                                        
                                    }}>{loginBtn}</button>
                            </ul>
                    </div>
            </div>
    )
};
export default Header;
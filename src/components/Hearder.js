
import { LOGO_URL } from "../utils/constants";
import logo from '../../images/logo.jpeg';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Header = () => {
        const [loginBtn, setLoginBtn] = useState("Login");
        const { Userlogged } = useContext(UserContext);

        const isOnline = useOnlineStatus();
        //subscribing to the store using selector ,
        //  We are getting this store data from <providere argument> in app.js,
        // complete app is wrapped inside this provider componet, we can access this store anywhere inside our app.
        const cartItems = useSelector((store) => { 
                console.log(store);
                console.log(store.cart);
                console.log(store.cart.items)
                return store.cart.items});

        return (
                <div className="HeaderDiv flex justify-between bg-orange-200 shadow-xl ">
                        <div className="logo w-42">
                                <img alt="logo" className="w-20" src={logo} />
                        </div>
                        <div className="nav-links p-2 m-1">
                                <ul className="flex">
                                        <li className="p-3"><Link>Active:{isOnline ? "🟢" : "🔴"}</Link></li>
                                        <li className="p-3"><Link>Home </Link></li>
                                        <li className="p-3"><Link to="/about">About US </Link></li>
                                        <li className="p-3"><Link to="/contact">Contact US</Link></li>
                                        <li className="p-3 font-bold "><Link to="/cart">Cart-({cartItems.length})</Link></li>
                                        <li className="p-3">{Userlogged}</li>
                                        <button className="login-btn" onClick={() => {
                                                loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");

                                        }}>{loginBtn}</button>
                                </ul>
                        </div>
                </div>
        )
};
export default Header;
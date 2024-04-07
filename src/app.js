import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Hearder";

import Body from "./components/Body";
/***
 * 
 * 1. Header
 *      -logo
 *      -links
 * 
 * 2. Body
 *      -Search
 *      -Restaurents
 *         -res-cards
 *            -res-name, image, rating,other names, time
 * 3. Footer
 *      -copyright
 *      -links
 * 
 */


      




const AppLayout=()=>{
        return (
                <div className="applayout">
                        <div className="Header">
                                <Header/>
                        </div>
                        <div className="Body">
                                <Body />
                        </div>
                </div>
                
                
        )
};

let root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
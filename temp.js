// CHAPTER 3 ASSIGNMENT Q1: 

// import React from "react";
// import ReactDom from "react-dom/client";


// let headingReact=React.createElement("div",{className:"title"}, React.createElement(
//     "h3",{id:"grandparent"},["This is grand parent",
//     React.createElement("p",{id:"parent"},[
//     React.createElement("h2",{id:"child"},"Hi, I'm from react heading"),"This is parent"])
//     ]
// )
// )

// let HeadingJSX=()=>(
// <div >
//     <h1 >
//     this is grandparent
//         <h2 >
//             <h3 >
//                 hi, im from jsx heading
//             </h3>
//             <p>this is parent</p>

//         </h2>
    
//     </h1>
// </div>
// )



// const HeadingComponent=()=>{
     
//        return ( [<HeadingJSX />,<div className="title">

//             {HeadingJSX()}
//             <h1 className="grandparent">
//                 This is granparent from funcmtional components
//                 <h2 className="parent">
//                 <h1 className="child">
//                     Hi, im from heading component
//                 </h1>
//                 this is parent

//                 </h2>
//             </h1>
//         </div>
//        ]
//        )
     
// };



// const root=ReactDom.createRoot(document.getElementById("root"));
// // root.render(headingReact);
// // root.render(headingJSX);
// root.render(HeadingComponent())



///////////// Q2--------


import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "./images/images.jpeg";
import icon from "./images/images.jpeg";


const Header=()=>{
    
    return (
        <div id="container">
        <div id="logo">
            <img src={logo} alt="trek"></img>
        </div>
        <div id="searchBarDiv">
            <input type="text" placeholder="search"></input>
        </div>
        <div id="iconDiv">
            <img src={icon} alt="icon"></img>

        </div>

        </div>
    )
}

let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)


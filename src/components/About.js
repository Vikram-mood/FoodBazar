import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    componentDidMount() {
        this.timer=setInterval(()=>{
            console.log("setinterval");
        },1000);
        // console.log("parent ComponentDidMount");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render() {
        return (

            <div className="about">
            {console.log("parent render")}
                <h1>About US</h1>
                <User name={"first"} />
                {/* <UserClass name={"first "} /> */}
                

            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div className="about">
//             <h1>About US</h1>
//             <User name={"vikram"} />
//             <UserClass name={"vikram"} />

//         </div>
//     )
// }
export default About;
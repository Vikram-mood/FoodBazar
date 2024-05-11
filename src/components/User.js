import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const User=(props)=>{


    const {name}=props;

    const [info,setInfo]=useState("https://dummy.com");

    useEffect(()=>{
        console.log("useEffect called in userdata");
        getData();



    },[])

    const getData=async ()=>{
        const data=await fetch("https://api.github.com/users/vikram-mood");
        const jsonData=await data.json();
        console.log(jsonData);
        setInfo(jsonData);
        return jsonData;
    }
    
    // 
    if(info==="dummy") return <Shimmer />
    const {id}=info;

    return(
        <div className="user-card">
          
            <h2>{name}</h2>
            <h3>Hyderabad</h3>
            <h3>vicky.mood28</h3>
        </div>
    )
}
export default User;
import { useEffect, useState } from "react";

const User=(props)=>{
const [count,setCount]=useState(0);

    const {name}=props;

    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("set interval in useEffect");
        },1000);

        return ()=>{
            clearInterval(timer);
            console.log("useeffect return");
        }
    },[])


    return(
        <div className="user-card">
            <h2>count: {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>countINC</button>
            <h2>{name}</h2>
            <h3>Hyderabad</h3>
            <h3>vicky.mood28</h3>
        </div>
    )
}
export default User;
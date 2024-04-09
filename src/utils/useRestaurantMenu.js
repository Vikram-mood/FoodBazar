import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
import { useParams } from "react-router-dom";
const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    // const resId=useParams();
    useEffect(()=>{
        getData();
    },[])
    const getData=async()=>{
        const data=await fetch(MENU_URL+resId);
        const json=await data.json();
        
        // console.log(json);
        setResInfo(json);
        

    }
 return resInfo;
}
export default useRestaurantMenu;


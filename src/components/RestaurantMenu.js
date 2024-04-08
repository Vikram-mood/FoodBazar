import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu=()=>{
    
    const [menuItem,setMenuItem]=useState(null);
    const {resId}=useParams();
    // console.log(params);
    useEffect(()=>{
        console.log("useEffefct called");
        fetchMenuData();
    },[])

    const fetchMenuData=async ()=>{
        const menuData=await fetch(MENU_URL+resId);
        const jsonData=await menuData.json();
        
        setMenuItem(jsonData);
        console.log(jsonData);
    }


    if(menuItem===null ) return <Shimmer />
    console.log("menu Item: "+ typeof menuItem);
    
    const resName=menuItem?.data?.cards[0]?.card?.card?.text ;

    const menuObj=menuItem?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(typeof menuObj);
    return(
        <div className="menu">
            <h1>{resName}</h1>
            <h2>Menu</h2>
            <ul>
                {menuObj.map((item) => (<li key= {item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice || item.card.info.price }</li>))}
                
            </ul>
            

        </div>
    )
}

export default RestaurantMenu;
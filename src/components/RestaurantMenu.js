import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_URL } from "../utils/constants";
import MenuItems from "./MenuItems";

const RestaurantMenu=()=>{
    
    // const [menuItem,setMenuItem]=useState(null);
    const {resId}=useParams();
    // console.log(resId);

    const menuItem=useRestaurantMenu(resId);

    


    if(menuItem===null ) return <Shimmer />
   
    
    const resName=menuItem?.data?.cards[0]?.card?.card?.text ;
 

    const menuObj=menuItem?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    
    console.log(menuObj);
    return(
        <div className="menu m-4">
            <h1 className="font-bold text-center">{resName}</h1>
            <h2 className="font-bold text-center">Menu</h2>
            {/* {console.log(menuObj[0].card.info)} */}
            {/* <ul>
                {menuObj.map((item) => (<li key= {item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice || item.card.info.price }</li>))}
                
            </ul> */}
            <ul>
                {menuObj.map((item) => (<li key= {item.card.info.id}><MenuItems menuInfo={item.card.info} /></li>))}
                
            </ul>
            

        </div>
    )
}

export default RestaurantMenu;
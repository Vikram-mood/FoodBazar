import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_URL } from "../utils/constants";
import MenuItems from "./MenuItems";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    // const [menuItem,setMenuItem]=useState(null);
    const { resId } = useParams();
    // console.log(resId);

    const menuItem = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);





    if (menuItem === null) return <Shimmer />


    const resName = menuItem?.data?.cards[0]?.card?.card?.text;
    const { cuisines, costForTwo, id } = menuItem?.data?.cards[2]?.card?.card?.info;
    const { info, title } = menuItem?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //NOTE HERE MENUOBJ IS CHANGED TO INFO/// CHECK DESTRUCTURING
    const categories = menuItem?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (categoryType) =>
            categoryType?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);
    return (
        <div className="menu m-4 text-center">
            <h1 className="font-bold my-6 text-2xl">{resName}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(", ")} - ₹ {costForTwo / 100}</h2>
            {/* {console.log(menuObj[0].card.info)} */}
            {categories.map((category, index) =>
                <RestaurantCategory
                    data={category.card.card}
                    key={category.card.card.title}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)} />  
            )}
            {/* This below code is for just one category, but we have different categories */}
            {/* <ul>
                {menuObj.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice || item.card.info.price}</li>))}

            </ul> */}
            {/* <ul>
                {menuObj.map((item) => (<li key= {item.card.info.id}><MenuItems menuInfo={item.card.info} /></li>))}
                
            </ul>
             */}

        </div>
    )
}

export default RestaurantMenu;
import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
        const {resData}=props;
        const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}= resData?.info;
        const {Userlogged}=useContext(UserContext)
    
//     const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}= resData?.data?.cards[4]?.card?.card?.info;

    return (
            <div className="res-card p-2 w-64 bg-gray-100 mb-2 hover:bg-gray-300 rounded-lg">
                    <img alt="foodIamge" className="rounded-xl"
                    src={ IMG_URL + cloudinaryImageId }/>
                    <h3 className="font-bold font">{name}</h3>
                    
                    <h4>{cuisines.join(" , ")}</h4>
                    <div className="flex justify-between">
                    <h4>{avgRating} stars</h4>
                    <h4>{sla.deliveryTime}mins</h4>
                   
                    </div>
                    
                    <h4 >{costForTwo}</h4>
                    <h4>User: {Userlogged}</h4>
                    
            </div>
    );
}

export default RestaurantCard;


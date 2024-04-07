import { IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {name,cuisines,avgRating,deliveryTime,costForTwo,cloudinaryImageId}= props.resData?.data;
   
    return (
            <div className="res-card">
                    <img alt="foodIamge" 
                    src={ IMG_URL + cloudinaryImageId }/>
                    <h3>{name}</h3>
                    <h4>{avgRating} stars</h4>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{deliveryTime}mins</h4>
                    <h4>{costForTwo/100}</h4>
                    
            </div>
    );
}

export default RestaurantCard;


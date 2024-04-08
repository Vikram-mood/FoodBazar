import { IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
        const {resData}=props;
    const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}= resData?.info;
    
//     const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}= resData?.data?.cards[4]?.card?.card?.info;

    return (
            <div className="res-card">
                    <img alt="foodIamge" 
                    src={ IMG_URL + cloudinaryImageId }/>
                    <h3>{name}</h3>
                    <h4>{avgRating} stars</h4>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{sla.deliveryTime}mins</h4>
                    <h4>{costForTwo}</h4>
                    
            </div>
    );
}

export default RestaurantCard;


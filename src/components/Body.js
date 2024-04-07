import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
import { restaurantList } from "../utils/mocData";


function filterData(text, restaurants) {

    
    const filtered = restaurants.filter((res) => {
       
        return res.data.name.toLowerCase().includes(text.toLowerCase());
    });
    
    // console.log(filtered.length);
    return filtered;
}

const Body = () => {

    const [listOfRestaurant, setListOfRestraut] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");
    // const[filteredRestaurant, setFilteredRestaurant] = useState([]);

    return (
        <>

            
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="search-btn" onClick={() => {
                    const filteredRestaurant = filterData(searchText, listOfRestaurant);
                    // setFilteredRestaurant(filteredRestaurant);
                    setListOfRestraut(filteredRestaurant);


                }}>Search</button>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res)=> res.data.avgRating>=4)
                    setListOfRestraut(filteredList);
                    console.log(filteredList);

                }}>Top rated</button>



            </div>
            <div className="res-container">
                {

                    listOfRestaurant.map((restaurant) => (

                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />))
                }


            </div>
        </>
    )
}

export default Body;
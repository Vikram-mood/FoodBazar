import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
// import { restaurantList } from "../utils/mocData";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
function filterData(text, restaurants) {


    const filtered = restaurants.filter((res) => res.info.name.toLowerCase().includes(text.toLowerCase()));

    // console.log(filtered.length);
    return filtered;
}

const Body = () => {

    const [listOfRestarant, setListOfRestarant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async (params) => {
        // console.log(params);

        const ApiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await ApiData.json();
        // console.log(json);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json);
        // return json;

    }
    // if(listOfRestarant.length===0) return <Shimmer />
    return listOfRestarant.length===0? <Shimmer /> :(
        <>


            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="search-btn" onClick={() => {
                    const filterRestaurant = filterData(searchText, listOfRestarant);
                    setFilteredRestaurant(filterRestaurant);
                    // setListOfRestraut(filteredRestaurant);


                }}>Search</button>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestarant.filter((res) => res.info.avgRating >= 4)
                    // setListOfRestarant(filteredList);
                    setFilteredRestaurant(filteredList);
                    console.log(filteredList);

                }}>Top rated</button>



            </div>
            <div className="res-container">
                {

                    filteredRestaurant.map((restarant) => (

                       <Link  key={restarant?.info?.id} to={"/restaurant/"+restarant?.info?.id}> <RestaurantCard  resData={restarant} /> </Link>))
                }


            </div>
        </>
    )
}

export default Body;
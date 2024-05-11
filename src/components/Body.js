import RestaurantCard from "./RestaurantCard"
import { useContext, useEffect, useState } from "react";
// import { restaurantList } from "../utils/mocData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";

import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
function filterData(text, restaurants) {


    const filtered = restaurants.filter((res) => res.info.name.toLowerCase().includes(text.toLowerCase()));
    
    // console.log(filtered.length);
    return filtered;
}

const Body = () => {

    const [listOfRestarant, setListOfRestarant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const {Userlogged,setUserName}=useContext(UserContext);
    
    

    useEffect(()=>{
        console.log("use Effect is called");
        fetchData();
    },[])

    const fetchData = async (params) => {
        // console.log(params);

        const ApiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await ApiData.json();
        // console.log(json);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json);
        // return json;

    }
    const isOnline=useOnlineStatus();
   

    if(isOnline===false) return (
        
    <div>
        {/* {console.log("online: "+isOnline)} */}
        <h1>You're offline .... please check your internet connection</h1>
    </div>)
    
    // if(listOfRestarant.length===0) return <Shimmer />
    return listOfRestarant.length===0? <Shimmer /> :(
        <>


            <div className="search-container m-10 p-1 ">
                <input type="text" className="search-input border-2 mr-2" placeholder="search" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="search-btn bg-slate-200 rounded-sm mr-10" onClick={() => {
                    const filterRestaurant = filterData(searchText, listOfRestarant);
                    setFilteredRestaurant(filterRestaurant);
                    // setListOfRestraut(filteredRestaurant);


                }}>Search</button>

                <button className="filter-btn  bg-slate-200 rounded-sm mr-10" onClick={() => {
                    const filteredList = listOfRestarant.filter((res) => res.info.avgRating >= 4)
                    // setListOfRestarant(filteredList);
                    setFilteredRestaurant(filteredList);
                    // console.log(filteredList);

                }}>Top rated</button>

                {/* <input className="border-b-2 "
                 placeholder="usename" 
                 value={Userlogged} 
                 onChange={(e)=>{setUserName(e.target.value)}}>
                    
                 </input> */}



            </div>
            <div className="res-container p-10 border-4 flex flex-wrap justify-between">
                {

                    filteredRestaurant.map((restarant) => (

                       <Link  key={restarant?.info?.id} to={"/restaurant/"+restarant?.info?.id}> <RestaurantCard  resData={restarant} /> </Link>))
                }


            </div>
        </>
    )
}

export default Body;
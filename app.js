import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./images/logo.jpeg"
/***
 * 
 * 1. Header
 *      -logo
 *      -links
 * 
 * 2. Body
 *      -Search
 *      -Restaurents
 *         -res-cards
 *            -res-name, image, rating,other names, time
 * 3. Footer
 *      -copyright
 *      -links
 * 
 */

const Header=()=>{
        return (
                <div className="HeaderDiv">
                        <div className="logo">
                                <img alt="logo" src={logo} />
                        </div>
                        <div className="nav-links">
                                <ul>
                                        <li>Home</li>
                                        <li>About US</li>
                                        <li>Contact US</li>
                                        <li>Cart</li>
                                </ul>
                        </div>
                </div>
        )
};

const restrautList = [
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "73011",
            name: "KFC",
            uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
            city: "22",
            area: "Anand Vihar Colony",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "tyaweqv1ks1ffrnuunpf",
            cuisines: ["American", "Snacks", "Biryani"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
              restaurant: "kfc-chukkuwala-chukkuwala",
              city: "dehradun",
            },
            cityState: "22",
            address:
              "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
            locality: "Clock Tower",
            parentId: 547,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "50% off",
              shortDescriptionList: [
                {
                  meta: "50% off | Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "50% OFF",
              shortDescriptionList: [
                {
                  meta: "Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            ribbon: [
              {
                type: "PROMOTED",
              },
            ],
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
              restaurantId: "73011",
              deliveryTime: 31,
              minDeliveryTime: 31,
              maxDeliveryTime: 31,
              lastMileTravel: 6.199999809265137,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.0",
            totalRatings: 5000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "542132",
            name: "Domnik Pizza",
            uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
            city: "22",
            area: "Majra    Bansal Home",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
            cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            slaString: "33 MINS",
            lastMileTravel: 0.6000000238418579,
            slugs: {
              restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
              city: "dehradun",
            },
            cityState: "22",
            address:
              "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
            locality: "Patel Nagar",
            parentId: 22321,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "50% off",
              shortDescriptionList: [
                {
                  meta: "50% off | Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "50% OFF",
              shortDescriptionList: [
                {
                  meta: "Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "0.6 kms",
            hasSurge: false,
            sla: {
              restaurantId: "542132",
              deliveryTime: 33,
              minDeliveryTime: 33,
              maxDeliveryTime: 33,
              lastMileTravel: 0.6000000238418579,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.8",
            totalRatings: 50,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "321517",
            name: "FOOD PLANET RESTAURANT",
            uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
            city: "22",
            area: "Majra",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "8aa874a03b5bd0804b6781b1fd13f02d",
            cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 0.699999988079071,
            slugs: {
              restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
              city: "dehradun",
            },
            cityState: "22",
            address:
              "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
            locality: "Patel Nagar",
            parentId: 81850,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "50% off",
              shortDescriptionList: [
                {
                  meta: "50% off | Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "50% OFF",
              shortDescriptionList: [
                {
                  meta: "Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "0.6 kms",
            hasSurge: false,
            sla: {
              restaurantId: "321517",
              deliveryTime: 25,
              minDeliveryTime: 25,
              maxDeliveryTime: 25,
              lastMileTravel: 0.699999988079071,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "2.8",
            totalRatings: 50,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "311806",
            name: "Burger King",
            uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
            city: "22",
            area: "Anand Vihar Colony",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "pu7gxithujoxsuxfqn2t",
            cuisines: ["Burgers", "American"],
            tags: [],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 39,
            minDeliveryTime: 39,
            maxDeliveryTime: 39,
            slaString: "39 MINS",
            lastMileTravel: 6.300000190734863,
            slugs: {
              restaurant: "burger-king-chakrata-road-ballupur",
              city: "dehradun",
            },
            cityState: "22",
            address:
              "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
            locality: "CHAKRATA ROAD",
            parentId: 166,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "60% off",
              shortDescriptionList: [
                {
                  meta: "60% off | Use STEALDEAL",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "60% off up to ₹120 | Use code STEALDEAL",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "60% OFF",
              shortDescriptionList: [
                {
                  meta: "Use STEALDEAL",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "60% off up to ₹120 | Use code STEALDEAL",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            ribbon: [
              {
                type: "PROMOTED",
              },
            ],
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.3 kms",
            hasSurge: false,
            sla: {
              restaurantId: "311806",
              deliveryTime: 39,
              minDeliveryTime: 39,
              maxDeliveryTime: 39,
              lastMileTravel: 6.300000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.2",
            totalRatings: 5000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "132460",
            name: "Annapurna Andhra Mess",
            uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
            city: "22",
            area: "Dehradun",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "eb0a4757510d4ab23c37e856ec6a9873",
            cuisines: ["South Indian", "Biryani", "North Indian"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 1.399999976158142,
            slugs: {
              restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
              city: "dehradun",
            },
            cityState: "22",
            address:
              "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
            locality: "Patel Nagar",
            parentId: 33997,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "50% off",
              shortDescriptionList: [
                {
                  meta: "50% off | Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "50% OFF",
              shortDescriptionList: [
                {
                  meta: "Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "1.3 kms",
            hasSurge: false,
            sla: {
              restaurantId: "132460",
              deliveryTime: 25,
              minDeliveryTime: 25,
              maxDeliveryTime: 25,
              lastMileTravel: 1.399999976158142,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 1000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "496677",
            name: "Uncle Ji Restaurant",
            uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
            city: "22",
            area: "Patel Nagar",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "vbrfl0xqmfuvqua42ix8",
            cuisines: ["North Indian", "Snacks", "Beverages"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 0.800000011920929,
            slugs: {
              restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
              city: "dehradun",
            },
            cityState: "22",
            address: "348 santosh tower, majra road gram majra dehradun 248001",
            locality: "Patel Nagar",
            parentId: 298209,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "50% off",
              shortDescriptionList: [
                {
                  meta: "50% off | Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "50% OFF",
              shortDescriptionList: [
                {
                  meta: "Use WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "50% off up to ₹100 | Use code WELCOME50",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "0.8 kms",
            hasSurge: false,
            sla: {
              restaurantId: "496677",
              deliveryTime: 31,
              minDeliveryTime: 31,
              maxDeliveryTime: 31,
              lastMileTravel: 0.800000011920929,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: false,
          },
          subtype: "basic",
        },
      ];
      

const RestaurantCard=(props)=>{
        const {name,cuisines,avgRating,deliveryTime,costForTwo}= props.resData?.data;
        // console.log(props);
        return (
                <div className="res-card">
                        <img alt="foodIamge" 
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.data.cloudinaryImageId }/>
                        <h3>{name}</h3>
                        <h4>{avgRating} stars</h4>
                        <h4>{cuisines.join(" , ")}</h4>
                        <h4>{deliveryTime}mins</h4>
                        <h4>{costForTwo/100}</h4>
                        
                </div>
        );
}

const Body=()=>{
        return (
                <div className="body">
                        <div className="search">Search</div>
                        <div className="res-container">
                        {/* {console.log(restrautList[0])} */}
                        {
                                restrautList.map((restaurant)=>
                                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />)                               
                        }

                        {/* <RestaurantCard resData={restrautList[0]}/> */}

                                {/* <RestaurantCard resName="Meghana Foods" cuisine="biryani,South India" rating="4.4" time="30" price="400"/>
                                <RestaurantCard resName="KFC" cuisine="Fast food, Pizza" rating="4.4" time="30" price="300"/> */}
                                
                                
                        </div>
                </div>
        )
}

const AppLayout=()=>{
        return (
                <div className="applayout">
                        <div className="Header">
                                <Header/>
                        </div>
                        <div className="Body">
                                <Body />
                        </div>
                </div>
                
                
        )
};

let root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
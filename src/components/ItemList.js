import { IMG_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import { AddItem, RemoveItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = (props) => {
    // console.log(props);
    const { items } = props;

    
    //    const {imageId,name,defaultPrice,description} =props.items.card.info;
    const dispatch=useDispatch()
    const handleAddItem=(item)=>{
       
        dispatch(AddItem(item));
    };
    const handleDelItem=(index)=>{
        console.log(index);
        dispatch(RemoveItem(index));
    }

    return (
        <div>
            {items.map((item,index) => (
                <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2 font-semibold">
                            <span >{item.card.info.name}</span>
                            <span>- ₹ {item?.card?.info?.price === undefined ? item.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="3/12 flex justify-between">
                        <div className="absolute ">
                        <button className=" p-2  m-2 shadow-sm bg-black text-white rounded-sm " 
                            onClick={()=>handleDelItem(index)}>
                                -
                            </button>
                            <button className=" p-2  shadow-sm bg-black text-white rounded-sm " 
                            onClick={()=>handleAddItem(item)}>
                                +
                            </button>
                            

                        </div>
                        <img src={IMG_URL + item.card.info.imageId} className="w-40" />
                    </div>

                </div>
            ))}
        </div>
        // <div className="flex justify-between">

        //     <div >
        //         <h2>{name}</h2>
        //         <h3>{defaultPrice}</h3>
        //         <p>{description}</p>
        //     </div>
        //     <img className="w-10" src={IMG_URL + imageId}/>
        // </div>
    )
}
export default ItemList;
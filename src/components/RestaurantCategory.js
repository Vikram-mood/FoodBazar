import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {


    const [isOpen,setIsOpen]=useState(false);
    
    
    // console.log(props.data);
    const { data,showItems,setShowIndex} = props;
    const { title } = data;
    
    const handleClick=()=>{
        setShowIndex();
        setIsOpen(!isOpen);
        // console.log("clicked");
        // setShowItems(!showItems);

    }
    return (
        <div>
            <div className="heading w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title}-({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {isOpen && showItems && <ItemList items={data.itemCards} />}
                {/* <div>
                    {data.itemCards.map((item)=>(
                        <li> <ItemList items={item}/></li>
                    )

                    )}
                    
                </div> */}

            </div>


        </div>
    )
}
export default RestaurantCategory;
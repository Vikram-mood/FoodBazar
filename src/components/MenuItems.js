import { IMG_URL } from "../utils/constants";
const MenuItems=(props)=>{
    console.log(props);
    const {name,description,imageId}=props.menuInfo;
    const {defaultPrice}=props.menuInfo;
    // console.log(defaultPrice);
    // if(defaultPrice==="NaN"){
    //     const{price}=props.MenuItems;
    // }
    
    
    return(
        <div className="menuItemCard border-4 mx-40 flex justify-between mb-2 bg-blue-100">
        <div>
            <h2 className="font-bold">{name}</h2>
            <h4>{description}</h4>
            <h3 className="font-extrabold">Rs: {defaultPrice===undefined? props.menuInfo.price/100:defaultPrice/100}</h3>
            <h4>{4.3+" ⭐"}</h4>
            
            </div>
            <img className="w-28" src={IMG_URL+imageId}/>

        </div>
    )
}
    
    

export default MenuItems;
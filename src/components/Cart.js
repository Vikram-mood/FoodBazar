import ItemList from "./ItemList";
import {useSelector,useDispatch} from "react-redux";
import { ClearItem } from "../utils/cartSlice";


const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();
    const handleClearItems=()=>{
        dispatch(ClearItem());
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
           
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-md " onClick={handleClearItems}>
                Clear Cart
            </button>
            {cartItems.length===0? (<h1 className="font-medium">Please add Items into Cart</h1>):<ItemList items={cartItems}/>}
            </div>
            
        </div>
    )
}
export default Cart;
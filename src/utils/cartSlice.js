import {createSlice,current} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        // here we are getting action value from  IemList dispatch(item).
        //   In ItemList dispatch we are sending one argument only, but redux take care of that, 
        // the argument we sent is taken as action value in this reducers function, and it is in object with 'payload' key and value is what we sent.
        //   and state paramenter takes initial state of this object
        // Check notes.txt to see data
        AddItem:((state,action)=>{
            state.items.push(action.payload);
            // console.log(current(state));
            // console.log(action);
        }),
        RemoveItem:((state,action)=>{
            // console.log(action.payload);
            state.items.splice(action.payload,action.payload+1);
        }), 
        ClearItem:((state,action)=>{

            state.items.length=0;
        })
    }
})
/**
 *  {
 *      actions:{
 *          AddItem:(f),
 *          RemoveItem:(f),
 *          ClearItem:(f)     
 *         },
 *      reducer:{
 *          
 *      }
 * }
 * 
 * 
 */
// console.log(cartSlice);
export const {AddItem,RemoveItem,ClearItem}=cartSlice.actions;

export default cartSlice.reducer;

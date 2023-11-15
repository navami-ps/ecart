import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtoCart:(state,action)=>{
            state.push(action.payload)
        },
        removefromCart:(state,action)=>{
          return state.filter((item)=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state = 0
        }
    }
})
export const {addtoCart,removefromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer
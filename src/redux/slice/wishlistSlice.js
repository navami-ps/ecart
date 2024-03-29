import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removefromWishlist:(state,action)=>{
          return state.filter(item=>item.id!==action.payload)
        }
    }
})
export const {addToWishlist,removefromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer

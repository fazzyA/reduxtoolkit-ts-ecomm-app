import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from '../../global'
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem : (state, action) =>{
            const cartItem:{} = action.payload;
           // console.log(cartItem)

           const newState: any = [...state, cartItem]

           // state.push(cartItem)
             return newState

        },
        removeItem : (state, action) => {
            let idToRemove = action.payload.cartId
            const newState = state.filter((item:CartItem) => item.cartId !== idToRemove)
            return newState
        }
    }
});

export const { addItem, removeItem} =  cartSlice.actions
export const reducer = cartSlice.reducer



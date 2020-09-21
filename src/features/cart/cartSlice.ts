import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem : (state, action) =>{
            return state
        },
        removeItem : (state, action) => {
            return state
        }
    }
});

export const { addItem, removeItem} =  cartSlice.actions
export const reducer = cartSlice.reducer



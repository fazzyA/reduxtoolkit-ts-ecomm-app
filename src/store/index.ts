import { configureStore } from "@reduxjs/toolkit";
import {reducer} from '../features/cart/cartSlice'
const store = configureStore({
    reducer:{
        cart: reducer
    }
})
export default store
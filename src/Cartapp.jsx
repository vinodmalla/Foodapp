import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; 
const Cartapp = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default Cartapp;

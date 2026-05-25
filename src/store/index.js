import { configureStore } from "@reduxjs/toolkit";
import { authLoginSlice } from "./slice/authSilce";
import { productSlice } from "./slice/productSlice";
import { categorySlice } from "./slice/categorySlice";
import { cartSlice } from "./slice/cartSlice";


export const store = configureStore({
    reducer: {
        login: authLoginSlice.reducer,
        product: productSlice.reducer,
        category: categorySlice.reducer,
        cart: cartSlice.reducer
    }
})
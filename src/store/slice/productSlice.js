import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, createProduct, updateProduct, deleteProduct } from "../thunks/productThunks";


export const productSlice = createSlice({
    name: "product",
    initialState: {
        lista: [],
        isLoading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.lista = action.payload
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        builder.addCase(createProduct.pending, (state) => {
            state.isLoading = true
        })
        
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false
            if(action.payload) state.lista.push(action.payload)
        })

        builder.addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(deleteProduct.pending, (state) => {
            state.isLoading = true
        })
        
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.lista = state.lista.filter(prod => prod.id !== action.payload)
        })

        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(updateProduct.pending, (state) => {
            state.isLoading = true
        })
        
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false
            const index = state.lista.findIndex(prod => prod.id === action.payload.id)
            if(index !== -1) state.lista[index] = action.payload
        })

        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})


export default productSlice.reducer
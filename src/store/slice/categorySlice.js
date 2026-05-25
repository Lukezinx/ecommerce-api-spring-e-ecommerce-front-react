import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory, createCategory, deleteCategory, updateCategory } from "../thunks/categoryThunk";



export const categorySlice =  createSlice({
    name: "category",
    initialState: {
        lista: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.isLoading = true
            state.error = null
        })

        builder.addCase(fetchCategory.fulfilled,(state, action) => {
            state.isLoading = false
            state.lista = action.payload
        })

        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(createCategory.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false
            if(action.payload) {
                state.lista.push(action.payload)
            }
        })

        builder.addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.lista = state.lista.filter(cat => cat.id !== action.payload)
        })

        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })


        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.isLoading = false

            const index = state.lista.findIndex(cat => cat.id === action.payload.id)
            if (index !== -1) {
                state.lista[index] = action.payload
            }
        })


        builder.addCase(updateCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default categorySlice.reducer
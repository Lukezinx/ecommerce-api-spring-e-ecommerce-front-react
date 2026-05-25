import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const fetchProducts = createAsyncThunk("/product/fetchProduct", async (filtros = {}) => {
    const response = await api.get("/product", {params: filtros})
    
    return response.data.content || response.data || [];

});

export const createProduct = createAsyncThunk("/product/createProduct", async (newProduct) => {
    const response = await api.post("/product", newProduct)
    return response.data
})


export const deleteProduct = createAsyncThunk("/product/deleteProduct", async (id,thunkAPI) => {
    try {
        await api.delete(`/product/${id}`)
        return id
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || "Erro ao deletar produto")
    }
})


export const updateProduct = createAsyncThunk("/product/updateProduct", async ({id,productData}, thunkAPI) => {
    try {
        const response = await api.put(`/product/${id}`, productData)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || "Erro ao atualizar produto")
    }
})
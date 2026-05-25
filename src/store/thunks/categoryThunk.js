import {createAsyncThunk} from "@reduxjs/toolkit"
import api from "../../api/axiosConfig"

export const fetchCategory = createAsyncThunk("/category/fetchCategory", async (_,thunkAPI) => {
    try {
        const response = await api.get("/category");
        return response.data.content || response.data || [];

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data.message || "Erro ao buscar categorias")
    }
})


export const createCategory = createAsyncThunk("/category/createCategory", async (categoryData, thunkAPI) => {
    try {
        const response = await api.post("/category", categoryData)
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || "Erro ao criar categoria")
    }
})

export const deleteCategory = createAsyncThunk('/category/deleteCategory', async (id, thunkAPI) => {
    try {
        await api.delete(`/category/${id}`)
        return id
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || "Erro ao deletar categoria")
    }
})

export const updateCategory = createAsyncThunk("/category/updateCategory", async ({id, name}, thunkAPI) => {
    try {
        const response = await api.put(`/category/${id}`, {name})
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || "Erro ao atualizar categoria")
    }
})
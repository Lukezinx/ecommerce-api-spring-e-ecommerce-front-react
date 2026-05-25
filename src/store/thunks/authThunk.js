import {createAsyncThunk} from '@reduxjs/toolkit'
import api from '../../api/axiosConfig'


export const authLogin = createAsyncThunk("auth/login", async ({email, password}, thunkApi) => {
    try {
        const response =  await api.post("/auth/login", {email, password})
        return response.data
    } catch(err) {
        return thunkApi.rejectWithValue(err.response?.data?.message)
    }
})
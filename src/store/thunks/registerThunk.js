import api from "../../api/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerThunk = createAsyncThunk("auth/register", async ({email, password}, thunkApi) => {
    try {
        const response =  await api.post("/auth/register", {email, password, role:"CLIENT"})
        return response.data
    } catch(err) {
        return thunkApi.rejectWithValue(err.response?.data?.message)
    }
})
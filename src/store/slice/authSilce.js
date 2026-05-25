import {createSlice} from "@reduxjs/toolkit"
import { authLogin } from "../thunks/authThunk"
import { registerThunk } from "../thunks/registerThunk"


export const authLoginSlice = createSlice({
    name: 'login',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: localStorage.getItem('user_role') ? {
            email: localStorage.getItem('user_email'),
            role: localStorage.getItem('user_role')
        } : null,
        protectRoute: null,
        isLoading: false, 
        error: null
    },

    reducers: {

        clearToken: (state) => {
            state.token = null
            state.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('user_role')
            localStorage.removeItem('user_email')
        }

    },
    extraReducers: (builder) => {
        builder.addCase(authLogin.pending, (state) => {
            state.isLoading = true
        }),

        builder.addCase(authLogin.fulfilled, (state, action) => {

            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('user_role', action.payload.role)
            localStorage.setItem('user_email', action.payload.email)
            state.token = action.payload.token

            state.user = {
                email: action.payload.email,
                role: action.payload.role 
            }
            state.isLoading = false
        })

        builder.addCase(authLogin.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload?.message || action.payload || "Erro ao fazer login"
        })


        builder.addCase(registerThunk.pending, (state) => {
            state.isLoading = true
        }),

        builder.addCase(registerThunk.fulfilled, (state) => {
            state.isLoading = false
        }),

        builder.addCase(registerThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload?.message || action.payload || "Erro ao fazer o cadastro"
        })
    }
})

export const {clearToken} = authLoginSlice.actions
export default authLoginSlice.reducer
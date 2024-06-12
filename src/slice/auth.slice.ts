import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import SignTitleState from "../states/signTitle.state";
import {AuthState} from "../states/auth.state";
import {User} from "../styles/type";

const loadAuthState = () => {
    const auth: AuthState = {};
    const user = sessionStorage.getItem("user")
    const usernameVerify = sessionStorage.getItem("usernameVerify")
    auth.user = user ? JSON.parse(user) : undefined
    auth.usernameVerify = usernameVerify ? usernameVerify : undefined
    return auth
}

const initial: AuthState = loadAuthState();

const authSlice = createSlice({
    name: 'signTitle',
    initialState: initial,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            sessionStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload
        },
        userNameVerify: (state, action: PayloadAction<string>) => {
            sessionStorage.setItem("usernameVerify", JSON.stringify(action.payload))
            state.usernameVerify = action.payload
        },
        logout: (state, action: PayloadAction<void>) => {
            sessionStorage.removeItem("user")
            state.user = undefined
        },
        verify: (state, action: PayloadAction<void>) => {
            sessionStorage.removeItem("usernameVerify")
            state.usernameVerify = undefined
        },
    }
});

export const {login, logout, userNameVerify, verify} = authSlice.actions;
export const authReducer = authSlice.reducer
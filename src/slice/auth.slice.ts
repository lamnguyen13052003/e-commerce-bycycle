import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import SignTitleState from "../states/signTitle.state";
import {AuthState} from "../states/auth.state";
import {User} from "../styles/type";
import {
    getUser,
    getUsernameVerify,
    removeUser,
    removeUsernameVerify,
    saveUser,
    saveUsernameVerify
} from "../utils/sessionStorage";

const loadAuthState = () => {
    const auth: AuthState = {};
    auth.user = getUser()
    auth.usernameVerify = getUsernameVerify()
    return auth
}

const initial: AuthState = loadAuthState();

const authSlice = createSlice({
    name: 'auth slice',
    initialState: initial,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            saveUser(action.payload)
            state.user = action.payload
        },
        userNameVerify: (state, action: PayloadAction<string>) => {
            saveUsernameVerify(action.payload)
            state.usernameVerify = action.payload
        },
        logout: (state, action: PayloadAction<void>) => {
            removeUser()
            state.user = undefined
        },
        verify: (state, action: PayloadAction<void>) => {
            removeUsernameVerify()
            state.usernameVerify = undefined
        },
    }
});

export const {login, logout, userNameVerify, verify} = authSlice.actions;
export const authReducer = authSlice.reducer
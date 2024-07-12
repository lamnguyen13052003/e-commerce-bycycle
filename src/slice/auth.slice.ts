import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthState} from "../states/auth.state";
import {User} from "../types/user.type";
import {
    getUser,
    getUsernameVerify,
    removeUser,
    removeUsernameVerify,
    saveUser,
    saveUsernameVerify,
    updateProfile as saveProfile,
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
        verifySuccess: (state, action: PayloadAction<void>) => {
            removeUsernameVerify()
            state.usernameVerify = undefined
        },
        updateProfile: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            state.user = {
                ...state.user,
                fullName: user.fullName,
                phone: user.phone,
                birthday: user.birthday,
                gender: user.gender,
                email: user.email
            }
            saveProfile(user)
        },
    }
});

export const {login, logout, userNameVerify, verifySuccess, updateProfile} = authSlice.actions;
export const authReducer = authSlice.reducer
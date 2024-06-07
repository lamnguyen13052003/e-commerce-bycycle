import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import SignTitleState from "../states/SignTitleState";

const initial: SignTitleState = {
    title: 'Sign In'
}

const signTitleSlice = createSlice({
    name: 'signTitle',
    initialState: initial,
    reducers: {
        setTitle: (state, action: PayloadAction<SignTitleState>) => {
            state.title = action.payload.title
        }
    }
});

export const {setTitle} = signTitleSlice.actions;
export const signTitleReducer = signTitleSlice.reducer
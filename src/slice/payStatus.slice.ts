import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PayStatusState} from "../states/payStatus.stats";


const initial: PayStatusState = {}

const payStatusSlice = createSlice({
    name: 'sign title slice',
    initialState: initial,
    reducers: {
        setPayStatus: (state, action: PayloadAction<PayStatusState>) => {
            state.status = action.payload.status
            state.infoPay = action.payload.infoPay
            console.log(action.payload)
        }
    }
});

export const {setPayStatus} = payStatusSlice.actions;
export const payStatusReducer = payStatusSlice.reducer
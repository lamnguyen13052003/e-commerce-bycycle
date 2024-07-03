import FilterAttributeType from "../type/filterAttribute.type.client";
import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialFilterState: FilterAttributeType = {
    brands: [],
    prices: {min: 0, max: 0},
    wheelSizes: [],
    materials: [],
    targetUsings: [],
}

const selectFilterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setDataBrandFilter: (state, action : PayloadAction<string[]>  ) => {
            state.brands = action.payload
        },
        // setDataPriceFilter: (state, action : {payload: {min: number, max: number}}) => state.prices = action.payload,
        // setDataWheelSizeFilter: (state, action : {payload: string[]}) => state.wheelSizes =action.payload,
        // setDataMetarialFilter: (state, action : {payload: string[]}) => state.materials =action.payload,
        // setDataTargetUsingFilter: (state, action : {payload: string[]}) => state.targetUsings =action.payload
    }
})
export const {setDataBrandFilter} = selectFilterSlice.actions
const selectFilterReducer = selectFilterSlice.reducer;
export default selectFilterReducer;

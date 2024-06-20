import FilterAttributeType from "../type/filterAttribute.type.client";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosHttp from "../utils/axiosHttp";
import {AxiosResponse} from "axios";
import {ResponseApi} from "../utils/response.type";

const initialFilterState: FilterAttributeType = {
    brands: [],
    prices: {min: 0, max: 0},
    wheelSizes: [],
    materials: [],
    targetUsings: [],
}

export const getFilterAttribute = createAsyncThunk('filter/getFilterAttribute', async (category: number, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<FilterAttributeType>>, any>(`/api/products/${category}/filter-attribute`, {
        signal: thunkAPI.signal
    });
    return response.data.data;
})

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFilterAttribute.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

const filterReducer = filterSlice.reducer;
export default filterReducer;

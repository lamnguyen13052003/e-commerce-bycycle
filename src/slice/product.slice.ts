import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProductProps} from "../components/product";
import {_} from "react-hook-form/dist/__typetest__/__fixtures__";
import axiosHttp from "../utils/axiosHttp";
import axios from "axios";

interface ProductState {
    products: ProductProps[]
}
const initialState: ProductState = {
    products: []
}

export const getProductsByCategory = createAsyncThunk('products/getProducts', async (category: number, thunkAPI) => {
    const response = await axiosHttp.get<ProductProps[]>(`api/products/${category}`, {
        signal: thunkAPI.signal
    })

    return response.data
})
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})
const productsReducer = productSlice.reducer
export default productsReducer
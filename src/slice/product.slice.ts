import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosHttp from "../utils/axiosHttp";
import {AxiosResponse} from "axios";
import any = jasmine.any;
import {ResponseApi} from "../utils/response.type";
import {getProductsBestSale} from "../../backend/service/product.service";
import {ProductType} from "../types/product.type";

interface HomeState {
    bestSale: ProductType[],
    newProduct: ProductType[],
    babyBicycle: ProductType[],
    sportBicycle: ProductType[],
    topographicBicycle: ProductType[],
    racingBicycle: ProductType[],
    touringBicycle: ProductType[],
    femaleBicycle: ProductType[],
    foldBicycle: ProductType[]
}

const initialState: HomeState = {
    bestSale: [],
    newProduct: [],
    babyBicycle: [],
    sportBicycle: [],
    topographicBicycle: [],
    racingBicycle: [],
    touringBicycle: [],
    femaleBicycle: [],
    foldBicycle: []
}

export const getProductsByCategory = createAsyncThunk('products/getProducts/category', async (category: number, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<ProductType[]>>, any>(`api/products/${category}`, {
        signal: thunkAPI.signal
    })

    return {
        category,
        data: response.data.data
    }
})
export const getProductsByBestSale = createAsyncThunk('products/getProducts/hasBestSale', async (bestSale: boolean, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<ProductType[]>>, any>(`api/products/best-sale/${bestSale}`, {
        signal: thunkAPI.signal
    })

    return {
        bestSale,
        data: response.data.data
    }
})
const productSlice = createSlice({
    name: 'product slice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            if (!action.payload.data) return
            switch (action.payload.category) {
                case 0:
                    state.babyBicycle = action.payload.data
                    break
                case 1:
                    state.sportBicycle = action.payload.data
                    break
                case 2:
                    state.topographicBicycle = action.payload.data
                    break
                case 3:
                    state.racingBicycle = action.payload.data
                    break
                case 4:
                    state.touringBicycle = action.payload.data
                    break
                case 5:
                    state.femaleBicycle = action.payload.data
                    break
                case 6:
                    state.foldBicycle = action.payload.data
                    break
                default:
                    break
            }
        }).addCase(getProductsByBestSale.fulfilled, (state, action) => {
            if (!action.payload.data) return
            if(action.payload.bestSale){
                state.bestSale = action.payload.data
            }else{
                state.newProduct = action.payload.data
            }
        })
    }
})
const productsReducer = productSlice.reducer
export default productsReducer
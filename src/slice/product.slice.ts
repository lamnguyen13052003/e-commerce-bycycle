import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductProps from "../type/product.type"
import axiosHttp from "../utils/axiosHttp";
import {AxiosResponse} from "axios";
import {ResponseApi} from "../utils/response.type";

interface HomeState {
    bestSale: ProductProps[],
    newProduct: ProductProps[],
    babyBicycle: {
        category: string,
        products: ProductProps[]
    },
    sportBicycle: {
        category: string,
        products: ProductProps[]
    },
    topographicBicycle: {
        category: string,
        products: ProductProps[]
    },
    racingBicycle: {
        category: string,
        products: ProductProps[]
    },
    touringBicycle: {
        category: string,
        products: ProductProps[]
    },
    femaleBicycle: {
        category: string,
        products: ProductProps[]
    },
    foldBicycle: {
        category: string,
        products: ProductProps[]
    },
}

const initialState: HomeState = {
    bestSale: [],
    newProduct: [],
    babyBicycle: {
        category: "Xe đạp trẻ em",
        products: []
    },
    sportBicycle: {
        category: "Xe đạp thể thao",
        products: []
    },
    topographicBicycle:{
        category: "Xe đạp địa hình",
        products: []
    },
    racingBicycle:{
        category: "Xe đạp đua",
        products: []
    },
    touringBicycle: {
        category: "Xe đạp touring",
        products: []
    },
    femaleBicycle: {
        category: "Xe đạp nữ",
        products: []
    },
    foldBicycle: {
        category: "Xe đạp gấp",
        products: []
    },
}

export const getProductsByCategory = createAsyncThunk('products/getProducts/category', async (category: number, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<ProductProps[]>>, any>(`api/products/${category}`, {
        signal: thunkAPI.signal
    })

    return {
        category,
        data: response.data.data
    }
})
export const getProductsByBestSale = createAsyncThunk('products/getProducts/hasBestSale', async (bestSale: boolean, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<ProductProps[]>>, any>(`api/products/best-sale/${bestSale}`, {
        signal: thunkAPI.signal
    })

    return {
        bestSale,
        data: response.data.data
    }
})
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            if (!action.payload.data) return
            switch (action.payload.category) {
                case 0:
                    state.babyBicycle.products = action.payload.data
                    break
                case 1:
                    state.sportBicycle.products = action.payload.data
                    break
                case 2:
                    state.topographicBicycle.products = action.payload.data
                    break
                case 3:
                    state.racingBicycle.products = action.payload.data
                    break
                case 4:
                    state.touringBicycle.products = action.payload.data
                    break
                case 5:
                    state.femaleBicycle.products = action.payload.data
                    break
                case 6:
                    state.foldBicycle.products = action.payload.data
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

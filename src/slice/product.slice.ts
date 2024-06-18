import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductProps, {ProductPropsHasTotal} from "../type/product.type"
import axiosHttp from "../utils/axiosHttp";
import {AxiosResponse} from "axios";
import {ResponseApi} from "../utils/response.type";

interface HomeState {
    bestSale: ProductProps[],
    newProduct: ProductProps[],
    babyBicycle: {
        category: string,
        products: ProductProps[],
        total: number
    },
    sportBicycle: {
        category: string,
        products: ProductProps[],
        total: number
    },
    topographicBicycle: {
        category: string,
        products: ProductProps[],
        total: number
    },
    racingBicycle: {
        category: string,
        products: ProductProps[],
        total: number
    },
    touringBicycle: {
        category: string,
        products: ProductProps[],
        total: number
    },
    femaleBicycle: {
        category: string,
        products: ProductProps[],
        total: number
    },
    foldBicycle: {
        category: string,
        products: ProductProps[],
        total: number
    },
}

const initialState: HomeState = {
    bestSale: [],
    newProduct: [],
    babyBicycle: {
        category: "Xe đạp trẻ em",
        products: [],
        total: 0
    },
    sportBicycle: {
        category: "Xe đạp thể thao",
        products: [],
        total: 0
    },
    topographicBicycle:{
        category: "Xe đạp địa hình",
        products: [],
        total: 0
    },
    racingBicycle:{
        category: "Xe đạp đua",
        products: [],
        total: 0
    },
    touringBicycle: {
        category: "Xe đạp touring",
        products: [],
        total: 0
    },
    femaleBicycle: {
        category: "Xe đạp nữ",
        products: [],
        total: 0
    },
    foldBicycle: {
        category: "Xe đạp gấp",
        products: [],
        total: 0
    },
}

export const getProductsByCategory = createAsyncThunk('products/getProducts/category', async (prop:{category: number, page: number | undefined}, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<ProductPropsHasTotal>>, any>(`api/products/${prop.category}/page=${prop.page}`, {
        signal: thunkAPI.signal
    })
    return {
       category: prop.category,
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
                    state.babyBicycle.products = action.payload.data.products
                    state.babyBicycle.total = action.payload.data.total
                    break
                case 1:
                    state.sportBicycle.products = action.payload.data.products
                    state.sportBicycle.total = action.payload.data.total
                    break
                case 2:
                    state.topographicBicycle.products = action.payload.data.products
                    state.topographicBicycle.total = action.payload.data.total
                    break
                case 3:
                    state.racingBicycle.products = action.payload.data.products
                    state.racingBicycle.total = action.payload.data.total
                    break
                case 4:
                    state.touringBicycle.products = action.payload.data.products
                    state.touringBicycle.total = action.payload.data.total
                    break
                case 5:
                    state.femaleBicycle.products = action.payload.data.products
                    state.femaleBicycle.total = action.payload.data.total
                    break
                case 6:
                    state.foldBicycle.products = action.payload.data.products
                    state.foldBicycle.total = action.payload.data.total
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

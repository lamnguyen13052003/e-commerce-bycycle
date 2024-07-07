import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosHttp from "../utils/axiosHttp";
import {ObjectId} from "mongodb";

const addReview = createAsyncThunk('reviewProduct/addReview', async (review: {name: string, email: string, content: string  }, thunkAPI) => {
    const response = await axiosHttp.post('/reviews/add', review, {
        signal: thunkAPI.signal
    })
    return response.data;
})

const getReviews = createAsyncThunk('reviewProduct/getReviews', async (productId: ObjectId, thunkAPI) => {
    const response = await axiosHttp.get(`/reviews/productId=:${productId}`, {
        signal: thunkAPI.signal
    })
    return response.data;
})

const reviewProductSlice = createSlice({
    name: 'review product slice',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
})

const reviewProductReducer = reviewProductSlice.reducer
export default reviewProductReducer

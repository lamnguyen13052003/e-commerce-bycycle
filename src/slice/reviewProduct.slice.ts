import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosHttp from "../utils/axiosHttp";
import {InitialState} from "../states/initial.state";
import AddReviewRequest from "../requests/addReview.request";
import {AxiosResponse} from "axios";


const initialState: InitialState<AddReviewRequest> = {
    loading: false,
    error: null
}

const addReview = createAsyncThunk('reviewProduct/addReview', async (review: AddReviewRequest, thunkAPI) => {
    return axiosHttp.post<any, AxiosResponse<any, any>, AddReviewRequest>(`/reviews/add/productId=:${review.productId}`, review, {
        signal: thunkAPI.signal
    }).then((response) => {
        return response.data
    }).catch((error) => {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    })
})
// const getReviews = createAsyncThunk('reviewProduct/getReviews', async (productId: ObjectId, thunkAPI) => {
//     const response = await axiosHttp.get(`/reviews/productId=:${productId}`, {
//         signal: thunkAPI.signal
//     })
//     return response.data;
// })

const reviewProductSlice = createSlice({
    name: 'review product slice',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(addReview.fulfilled, (state, action) => {
            state.loading = false
            return action.payload
        })

    }
})
export {addReview}
const reviewProductReducer = reviewProductSlice.reducer
export default reviewProductReducer

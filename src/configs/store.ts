import {configureStore} from '@reduxjs/toolkit'
import {signTitleReducer} from "../slice/signTitle.slice";
import {authReducer} from "../slice/auth.slice";
import productsReducer from "../slice/product.slice";
import {useDispatch} from "react-redux";
import {cartReducer} from "../slice/cart.slice";

export const store = configureStore({
    reducer: {
        signTitle: signTitleReducer,
        auth: authReducer,
        product: productsReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
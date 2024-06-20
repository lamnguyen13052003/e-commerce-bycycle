import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartState} from "../states/cart.state";
import {ObjectId} from "mongodb";

const loadCartState = () => {
    const cartString = localStorage.getItem("cart");
    if (!cartString) return {cartItems: []};
    return JSON.parse(cartString) as CartState
}

const initial: CartState = loadCartState();

const cartSlice = createSlice({
    name: 'cart slice',
    initialState: initial,
    reducers: {
        addCart: function (state, payload: PayloadAction<{ id: ObjectId }>) {
            const id = payload.payload.id;
            const cartItems = state.cartItems;
            let contain = false;
            cartItems.forEach(item => {
                if (item.productId === id) {
                    item.quantity++;
                    contain = true
                }
            });

            if (!contain) {
                cartItems.push({productId: id, quantity: 1})
            }
        }
    }
});

export const {} = cartSlice.actions;
export const cartReducer = cartSlice.reducer
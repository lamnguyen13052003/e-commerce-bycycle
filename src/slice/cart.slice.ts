import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartState} from "../states/cart.state";
import {ObjectId} from "mongodb";
import {CartItemType} from "../types/cartItem.type";

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
        addCartItem: function (state, payload: PayloadAction<CartItemType>) {
            const cartItem = payload.payload;
            const cartItems = state.cartItems;
            let contain = false;
            cartItems.forEach((item: CartItemType) => {
                if (item.id === cartItem.id) {
                    item.quantity++;
                    contain = true
                    return;
                }
            });

            if (!contain) {
                state.cartItems.push(cartItem)
            }
        },
        increaseQuantityCartItem: function (state, payload: PayloadAction<ObjectId>) {
            const cartItems = state.cartItems;
            const id = payload.payload;
            cartItems.forEach((item: CartItemType) => {
                if (item.id === id)
                    item.quantity++;
            });
        },
        decreaseCartItem: function (state, payload: PayloadAction<ObjectId>) {
            const cartItems = state.cartItems;
            const id = payload.payload;
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                }
            }
        },
        removeCartItem: function (state, payload: PayloadAction<ObjectId>) {
            removeItem(state.cartItems, payload.payload);
        }
    }
});

const removeItem = (cartItems: CartItemType[], id: ObjectId) => {
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === id) {
            cartItems.splice(i, 1);
            break;
        }
    }
}

export const {addCartItem, removeCartItem, increaseQuantityCartItem, decreaseCartItem} = cartSlice.actions;
export const cartReducer = cartSlice.reducer
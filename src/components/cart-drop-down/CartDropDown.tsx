import React from 'react';
import {Box, Button, Divider, Stack} from "@mui/material";
import CartDropDownEmpty from "./CartDropDownEmpty";
import CartDropDownNonEmpty from "./CartDropDownNonEmpty";
import CartItemDropDown from "./CartItemDropDown";
import {CartItemDropDownType} from "../../types/cartItemDropDown.type";

function CartDropDown(props: {
    cartItems: CartItemDropDownType[],
    className?: string,
    style?: React.CSSProperties
}) {
    const {cartItems, className, style} = props;

    return (
        <Box width={"250px"}
             className={className} style={style}>
            <Stack direction={"column"} className={"mt-2 border border-1 bg-white border-success rounded-3 p-2"}>
                <Box>
                    {cartItems.map((item, index) =>
                        <CartItemDropDown key={index} {...item}/>)}
                </Box>
                <Box>
                    {cartItems.length === 0 ? (<CartDropDownEmpty/>) : (<CartDropDownNonEmpty/>)}
                </Box>
            </Stack>
        </Box>
    );
}

export default CartDropDown;
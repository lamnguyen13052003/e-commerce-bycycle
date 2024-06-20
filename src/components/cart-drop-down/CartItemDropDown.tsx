import React from 'react';
import {Button, Stack} from "@mui/material";
import {CartItemDropDownType} from "../../types/cartItemDropDown.type";

function CartItemDropDown(props: CartItemDropDownType) {
    const formatCurrency = (value: number) => {
        return value.toLocaleString('vi', {style: 'currency', currency: 'VND'});
    }

    return (
        <Stack direction={"row"} gap={1} className={"my-2"}>
            <img src={props.url} alt={`item-${props.id}`} width={"50px"} height={"50px"}/>
            <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                <Stack direction={"column"} alignItems={"center"}>
                    <p className={"m-0"} style={{fontSize: "17px"}}>{props.name}{props.type ? "-" + props.type : ""}</p>
                    <p className={"m-0"} style={{fontSize: "12px"}}>
                        <span className={"text-secondary"}>{props.quantity} x </span>
                        <span className={"fw-bold"}>{formatCurrency(props.price)}</span>
                    </p>
                </Stack>
                <Button style={{minWidth: "25px", height: "25px"}}
                        className={"border p-0 border-1 border-danger text-secondary bg-white d-flex justify-content-center align-items-center rounded-circle"}>
                    x
                </Button>
            </Stack>
        </Stack>
    );
}

export default CartItemDropDown;
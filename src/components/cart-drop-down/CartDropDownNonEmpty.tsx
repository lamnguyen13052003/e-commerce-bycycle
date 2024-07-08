import React from 'react';
import {Button, Divider, Stack} from "@mui/material";

function CartDropDownEmpty() {
    return (
        <Stack direction={"column"}>
            <Divider orientation="vertical" flexItem/>
            <Stack direction={"column"} gap={1}>
                <Button className={"bg-primary rounded-3 text-uppercase fw-bold text-white"}>
                    xem giỏ hàng
                </Button>
                <Button className={"bg-danger rounded-3 text-uppercase fw-bold text-white"}>
                    Thanh toán
                </Button>
            </Stack>
        </Stack>
    );
}

export default CartDropDownEmpty;
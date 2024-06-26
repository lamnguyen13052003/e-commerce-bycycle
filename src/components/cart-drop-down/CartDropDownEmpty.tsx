import React from 'react';
import {Button, Stack} from "@mui/material";

function CartDropDownEmpty() {
    return (
        <Stack direction={"column"} alignItems={"center"}>
            <span className={"mt-3 text-center mb-2"}>Không tồn tại sản phẩm nào trong giỏ hàng</span>
            <Button className={"bg-primary rounded-3 text-uppercase fw-bold text-white"}>
                Quay lại cửa hàng
            </Button>
        </Stack>
    );
}

export default CartDropDownEmpty;
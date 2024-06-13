import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { useShoppingContext } from "../../context/ShoppingContext";

export interface QuantityCellProps {
    id: number;
    quantity: number;
}

function QuantityCell(props: QuantityCellProps) {
    const { increaseQty, decreaseQty } = useShoppingContext();

    return (
        <Stack direction="row" sx={{ height: "30px" }}>
            <Button
                className="h-100"
                sx={{ width: "20px !important" }}
                onClick={() => decreaseQty(props.id)}
            >
                <RemoveIcon />
            </Button>
            <Typography
                className="text-center rounded-1 border border-1 border-black align-content-center h-100"
                style={{ width: "50px", margin: "0 10px" }}
            >
                {props.quantity}
            </Typography>
            <Button
                className="h-100"
                sx={{ width: "20px !important" }}
                onClick={() => increaseQty(props.id)}
            >
                <AddIcon />
            </Button>
        </Stack>
    );
}

export default QuantityCell;

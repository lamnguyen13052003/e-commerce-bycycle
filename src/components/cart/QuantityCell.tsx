import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {Stack, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import {ObjectId} from "mongodb";
import {useDispatch} from "react-redux";
import {decreaseCartItem, increaseQuantityCartItem} from "../../slice/cart.slice";

export interface QuantityCellProps {
    id: string,
    quantity: number;
}


function QuantityCell(props: QuantityCellProps) {
    const {id, quantity} = props;
    const dispatch = useDispatch();

    return (
        <Stack direction={"row"} style={{
            height: "30px"
        }}>
            <Button className={"h-100"} sx={{width: "20px !important"}} onClick={() => dispatch(decreaseCartItem(id))}>
                <RemoveIcon/>
            </Button>
            <Typography className="text-center rounded-1 border border-1 border-black align-content-center  h-100"
                        style={{width: "50px", margin: "0 10px"}}>
                {quantity}
            </Typography>
            <Button className={"h-100"} sx={{width: "20px !important"}}
                    onClick={() => dispatch(increaseQuantityCartItem(id))}>
                <AddIcon/>
            </Button>
        </Stack>
    );
}


export default QuantityCell;
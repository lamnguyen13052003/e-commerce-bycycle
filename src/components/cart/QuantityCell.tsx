import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {Stack, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {decreaseCartItem, increaseQuantityCartItem} from "../../slice/cart.slice";

export interface QuantityCellProps {
    id: string,
    quantity: number;
    hasDispatch: boolean;
}


function QuantityCell(props: QuantityCellProps) {
    const {id, quantity, hasDispatch} = props;
    const [quantityUseState, setQuantityUseState] = useState(quantity)
    const dispatch = useDispatch();
    const increaseQuantity = () => {
        if (hasDispatch)
            dispatch(increaseQuantityCartItem(id))
        else setQuantityUseState(quantityUseState + 1)
    }

    const decreaseQuantity = () => {
        if (hasDispatch)
            dispatch(decreaseCartItem(id))
        else {
            if (quantityUseState > 1) {
                setQuantityUseState(quantityUseState - 1)
            }
        }
    }

    return (
        <Stack direction={"row"} style={{
            height: "30px"
        }}>
            <Button className={"h-100"} sx={{width: "20px !important"}} onClick={decreaseQuantity}>
                <RemoveIcon/>
            </Button>
            <Typography className="text-center rounded-1 border border-1 border-black align-content-center  h-100"
                        style={{width: "50px", margin: "0 10px"}}>
                {hasDispatch ? quantity : quantityUseState}
            </Typography>
            <Button className={"h-100"} sx={{width: "20px !important"}}
                    onClick={increaseQuantity}>
                <AddIcon/>
            </Button>
        </Stack>
    );
}


export default QuantityCell;
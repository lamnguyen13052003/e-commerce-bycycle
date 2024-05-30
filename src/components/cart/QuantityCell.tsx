import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {Stack, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export interface QuantityCellProps {
    id: number,
    quantity: number;
    onAdd: (id: number) => void;
    onSubtract: (id: number) => void;
}


function QuantityCell(props: QuantityCellProps) {
    return (
        <Stack direction={"row"} style={{
            height: "30px"
        }}>
            <Button className={"h-100"} sx={{width: "20px !important"}} onClick={() => props.onSubtract(props.id)}>
                <RemoveIcon/>
            </Button>
            <Typography className="text-center rounded-1 border border-1 border-black align-content-center  h-100"
                        style={{width: "50px", margin: "0 10px"}}>
                {props.quantity}
            </Typography>
            <Button className={"h-100"} sx={{width: "20px !important"}} onClick={() => props.onAdd(props.id)}>
                <AddIcon/>
            </Button>
        </Stack>
    );
}


export default QuantityCell;
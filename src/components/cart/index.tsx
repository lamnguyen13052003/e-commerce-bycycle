import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Image} from "react-bootstrap";
import ImageCycleBike from '../../assets/images/xe-dap-xanh-la.jpg';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {IconButton} from "@mui/material";
import QuantityCell from "./QuantityCell";

export interface CartItemProps {
    id: number;
    title: string;
    qty: number;
    price: number;
    onAdd: (id: number) => void;
    onSubtract: (id: number) => void;
    onRemove: (id: number) => void;
}

function CartItem({id, title, qty, price, onAdd, onSubtract, onRemove}: CartItemProps) {
    const formatCurrency = (amount: number): string => {
        return Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(amount);
    };

    return (
        <TableRow>
            <TableCell>
                <Image className={"rounded-3"} src={ImageCycleBike} alt={title} style={{width: "100px"}}/>
            </TableCell>
            <TableCell>{title}</TableCell>
            <TableCell align="left">{formatCurrency(price)}</TableCell>
            <TableCell>
                <QuantityCell id={id} quantity={qty} onAdd={onAdd} onSubtract={onSubtract}/>
            </TableCell>
            <TableCell align="center">{formatCurrency(qty * price)}</TableCell>
            <TableCell>
                <IconButton onClick={() => onRemove(id)}>
                    <CloseIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}


export default CartItem;

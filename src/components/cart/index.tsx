import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Image} from "react-bootstrap";
import ImageCycleBike from '../../assets/images/xe-dap-xanh-la.jpg';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {IconButton} from "@mui/material";
import QuantityCell from "./QuantityCell";
import {CartItemType} from "../../types/cartItem.type";
import {useDispatch} from "react-redux";
import {removeCartItem} from "../../slice/cart.slice";

function CartItem(props: CartItemType) {
    const {id, name, quantity, price, url, type} = props;
    const dispatch = useDispatch();

    const formatCurrency = (amount: number): string => {
        return Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(amount);
    };

    return (
        <TableRow>
            <TableCell>
                <Image className={"rounded-3"} src={ImageCycleBike} alt={name} style={{width: "100px"}}/>
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell align="left">{formatCurrency(price)}</TableCell>
            <TableCell>
                <QuantityCell id={id} hasDispatch={true} quantity={quantity}/>
            </TableCell>
            <TableCell align="center">{formatCurrency(quantity * price)}</TableCell>
            <TableCell>
                <IconButton onClick={() => {
                    dispatch(removeCartItem(id))
                }}>
                    <CloseIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}


export default CartItem;

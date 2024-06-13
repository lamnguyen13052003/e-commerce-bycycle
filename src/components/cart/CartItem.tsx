import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Image } from 'react-bootstrap';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { IconButton } from '@mui/material';
import QuantityCell from './QuantityCell';
import { useShoppingContext } from '../../context/ShoppingContext';
import { formatCurrency } from './Currency';

type CartItemProps = {
    id: number;
    name: string;
    price: number;
    qty: number;
    thumbnail: string;
};

const CartRow = ({ id, name, price, qty, thumbnail }: CartItemProps) => {
    const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext();

    return (
        <TableRow>
            <TableCell>
                <Image className="rounded-3" src={thumbnail} alt={name} style={{ width: '100px' }} />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell align="left">{formatCurrency(price)}</TableCell>
            <TableCell>
                <QuantityCell id={id} quantity={qty}/>
            </TableCell>
            <TableCell align="center">{formatCurrency(qty * price)}</TableCell>
            <TableCell>
                <IconButton aria-label={`Xóa ${name}`} onClick={() => removeCartItem(id)}>
                    <CloseIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default CartRow;

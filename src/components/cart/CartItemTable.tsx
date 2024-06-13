import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CartItem from './CartItem'; // Import CartRow component
import { useShoppingContext } from '../../context/ShoppingContext';

export function CartItemTable() {
    const { cartItems } = useShoppingContext(); // Get cartItems from context

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">SẢN PHẨM</TableCell>
                        <TableCell align="left">TÊN SẢN PHẨM</TableCell>
                        <TableCell align="center">GIÁ</TableCell>
                        <TableCell align="center">SỐ LƯỢNG</TableCell>
                        <TableCell align="center">TỔNG CỘNG</TableCell>
                        <TableCell align="center">HÀNH ĐỘNG</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

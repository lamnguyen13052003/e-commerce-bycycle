
import React, { useState } from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import QuantityCell from "./QuantityCell";
import CheckOutTable from "./CheckOutTable";
import productsData from "./product.json";
import CartItem from "./index";

const CartItemTable: React.FC = () => {
    const initialCartItems = productsData.products.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1
    }));

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleAdd = (id: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const handleSubtract = (id: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">SẢN PHẨM</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="center">GIÁ</TableCell>
                        <TableCell align="center">SỐ LƯỢNG</TableCell>
                        <TableCell align="center" sx={{ width: "150px !important" }}>TỔNG CỘNG</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            qty={item.qty}
                            onAdd={handleAdd}
                            onSubtract={handleSubtract}
                            onRemove={handleRemove}
                        />
                    ))}
                </TableBody>
            </Table>
            <CheckOutTable cartItems={cartItems} />
        </TableContainer>
    );
};

export default CartItemTable;

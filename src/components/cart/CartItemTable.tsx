import React, {useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import CartItem from "./index";

export function CartItemTable() {
    const [cartItems, setCartItems] = useState([
        {id: 1, title: "Xe Đạp Trẻ Em 12 Inch GH Bike [GIÁ RẺ] - Xanh lá", qty: 1, price: 890000},
    ]);

    const handleAdd = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? {...item, qty: item.qty + 1} : item
            )
        );
    };

    const handleSubtract = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.qty > 1 ? {...item, qty: item.qty - 1} : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
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
                        <TableCell align="center" sx={{
                            width: "150px !important"
                        }}>TỔNG CỘNG</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            {...item}
                            onAdd={handleAdd}
                            onSubtract={handleSubtract}
                            onRemove={handleRemove}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
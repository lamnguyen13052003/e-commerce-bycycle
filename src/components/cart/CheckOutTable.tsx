import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import SellIcon from "@mui/icons-material/Sell";
import {Button, Input, Typography} from "@mui/material";
import styles from "./scss/Cart.module.css";
import React from "react";

export function CheckOutTable({cartItems}: { cartItems: { id: number, title: string, qty: number, price: number }[] }) {
    const formatCurrency = (amount: number): string => {
        return Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(amount);
    };

    const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">CỘNG GIỎ HÀNG</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Tạm Tính</TableCell>
                            <TableCell align="right">{formatCurrency(total)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Tổng</TableCell>
                            <TableCell align="right">{formatCurrency(total)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer sx={{padding: "0px 10px", marginTop: "10px"}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                <SellIcon fontSize="small"/>
                                Phiếu Ưu Đãi</TableCell>
                        </TableRow>
                        <TableRow>
                            <Input sx={{
                                width: "100%",
                                maxWidth: "100%",
                                margin: "10px 0px",
                                border: "1px solid #ddds !important"
                            }} placeholder="Mã ưu đãi"></Input>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <Button className={`${styles.checkout_button}`} sx={{
                ':hover': {backgroundColor: "red", color: "white"},
                width: "100%",
                maxWidth: "100%",
                padding: "5px 16px",
                textAlign: "center",
                backgroundColor: "red",
                color: "white",
                margin: "10px 0px"
            }}>
                <Typography sx={{width: "100%"}}>TIẾN HÀNH THANH TOÁN</Typography>
            </Button>
        </>
    );
}
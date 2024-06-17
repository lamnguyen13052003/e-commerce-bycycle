import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import styles from "./scss/Cart.module.css";

interface CheckOutTableProps {
    cartItems: { id: number; name: string; price: number; qty: number }[];
}

const CheckOutTable: React.FC<CheckOutTableProps> = ({ cartItems }) => {
    const formatCurrency = (amount: number): string => {
        return Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
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
            <TableContainer sx={{ padding: "0px 10px", marginTop: "10px" }} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Phiếu Ưu Đãi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Input
                                    sx={{
                                        width: "100%",
                                        maxWidth: "100%",
                                        margin: "10px 0px",
                                        border: "1px solid #ddd",
                                    }}
                                    placeholder="Mã ưu đãi"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                className={styles.checkout_button}
                sx={{
                    ":hover": { backgroundColor: "red", color: "white" },
                    width: "100%",
                    maxWidth: "100%",
                    padding: "5px 16px",
                    textAlign: "center",
                    backgroundColor: "red",
                    color: "white",
                    margin: "10px 0px",
                }}
            >
                TIẾN HÀNH THANH TOÁN
            </Button>
        </>
    );
};

export default CheckOutTable;

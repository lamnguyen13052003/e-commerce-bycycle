import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, InputBase, Input } from "@mui/material";
import { Container } from "react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WestIcon from '@mui/icons-material/West';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Image } from "react-bootstrap";
import ImageCycleBike from '../assets/images/xe-dap-xanh-la.jpg';
import styles from "../components/cart/scss/Cart.module.css";
import SellIcon from '@mui/icons-material/Sell';

interface CartItemProps {
    id: number;
    title: string;
    qty: number;
    price: number;
    onAdd: (id: number) => void;
    onSubtract: (id: number) => void;
    onRemove: (id: number) => void;
}

function CartItem({ id, title, qty, price, onAdd, onSubtract, onRemove }: CartItemProps) {
    const formatCurrency = (amount: number): string => {
        return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    return (
        <TableRow>
            <TableCell>
                <IconButton onClick={() => onRemove(id)}>
                    <CloseIcon />
                </IconButton>
            </TableCell>
            <TableCell>
                <Image src={ImageCycleBike} alt={title} style={{ width: "100px" }} />
            </TableCell>
            <TableCell>{title}</TableCell>
            <TableCell align="left">{formatCurrency(price)}</TableCell>
            <QuantityCell align="left">
                <Button sx={{width: "20px !important", height: "40px !important"}} onClick={() => onAdd(id)}>
                    <AddIcon />
                </Button>
                <input type="number" value={qty} readOnly className="text-center" style={{ width: "50px", margin: "0 10px" }} />
                <Button sx={{width: "20px !important", height: "40px !important"}} onClick={() => onSubtract(id)}>
                    <RemoveIcon />
                </Button>
            </QuantityCell>
            <TableCell align="left">{formatCurrency(qty * price)}</TableCell>
        </TableRow>
    );
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
}

export function CartBreadcrumbs() {
    const breadcrumbs = [
        <Typography className="active_breadcrumbs" key="1" color="black">
            GIỎ HÀNG
        </Typography>,
        <Link underline="none" key="2" color="#c4c4c4" href="./Checkout.tsx" onClick={handleClick}>
            THÔNG TIN THANH TOÁN
        </Link>,
        <Link underline="none" key="3" color="#c4c4c4" href="./Cart.tsx" onClick={handleClick}>
            HOÀN THÀNH ĐƠN HÀNG
        </Link>,
    ];

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb">
            {breadcrumbs}
        </Breadcrumbs>
    );
}

export function CartItemTable() {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: "Xe Đạp Trẻ Em 12 Inch GH Bike [GIÁ RẺ] - Xanh lá", qty: 1, price: 890000 },
    ]);

    const handleAdd = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const handleSubtract = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
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
                        <TableCell></TableCell>
                        <TableCell align="left">SẢN PHẨM</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left">GIÁ</TableCell>
                        <TableCell align="left">SỐ LƯỢNG</TableCell>
                        <TableCell align="left">TỔNG CỘNG</TableCell>
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

export function CheckOutTable({ cartItems }: { cartItems: { id: number, title: string, qty: number, price: number }[] }) {
    const formatCurrency = (amount: number): string => {
        return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
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
            <Button className={`${styles.checkout_button}`} sx={{':hover': {backgroundColor: "red", color: "white"}, width: "100%", maxWidth: "100%", padding: "5px 16px", textAlign: "center", backgroundColor: "red", color: "white", margin: "10px 0px" }}>
                 <Typography sx={{width: "100%"}}>TIẾN HÀNH THANH TOÁN</Typography>
            </Button>
            <Promo>
                <TableContainer sx={{padding: "0px 10px"}} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    <SellIcon fontSize="small"/>
                                     Phiếu Ưu Đãi</TableCell>
                            </TableRow>
                            <TableRow>
                                <Input sx={{width: "100%", maxWidth: "100%", margin: "10px 0px", border: "1px solid #ddds !important"}} placeholder="Mã ưu đãi"></Input>
                            </TableRow>
                            <Button className={`${styles.promo_button}`} sx={{':hover': {backgroundColor: "#f9f9f9", color: "grey"}, width: "100%", maxWidth: "100%", padding: "5px 16px", textAlign: "center", border: "1px solid #ddd", backgroundColor: "#f9f9f9", color: "grey", margin: "10px 0px" }}>
                                <Typography sx={{width: "100%"}}>TIẾN HÀNH THANH TOÁN</Typography>
                            </Button>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Promo>
        </>
    );
}

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: "Xe Đạp Trẻ Em 12 Inch GH Bike [GIÁ RẺ] - Xanh lá", qty: 1, price: 890000 },
    ]);

    const handleAdd = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const handleSubtract = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    return (
        <Container style={{ padding: "30px 0px", maxWidth: "100%", margin: "0" }}>
            <Box>
                <BreadcrumbsWrapper>
                    <CartBreadcrumbs />
                </BreadcrumbsWrapper>
            </Box>
            <CartWrapper>
                <ItemCartTable>
                    <CartItemTable />
                    <ContinueShopping>
                        <Button className={`${styles.update_cart}`} sx={{padding: " 5px 16px", border: "2px solid #439eef", fontWeight: "700"}}>
                            <WestIcon fontSize="small" />
                            <Typography> TIẾP TỤC XEM SẢN PHẨM</Typography>
                        </Button>
                        <Button sx={{':hover': {backgroundColor: "#439eef", color: "white"}, padding: " 5px 16px", backgroundColor: "#439eef", color: "white", fontWeight: "700"}}>
                            <Typography>CẬP NHẬT GIỎ HÀNG</Typography>
                        </Button>
                    </ContinueShopping>
                </ItemCartTable>
                <CheckOut>
                    <CheckOutTable cartItems={cartItems} />
                </CheckOut>
            </CartWrapper>
        </Container>
    );
}

const Promo = styled.div`

`

const QuantityCell = styled(TableCell)`
    display: flex !important;
    flex-direction: row;
    align-items: center;
    border-bottom: 0 !important;
    justify-content: center;
    height: 150px !important;
`

const ContinueShopping = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const CheckOut = styled.div`
    max-width: 50%;
    width: 35%;
`;

const ItemCartTable = styled.div`
    max-width: 60%;
    width: 70%;
`;

const CartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 100%;
`;

const BreadcrumbsWrapper = styled.div`
    ol {
        justify-content: center;
        margin-bottom: 20px;
        .active_breadcrumbs p & {
            color: black;
        }
    }
`;

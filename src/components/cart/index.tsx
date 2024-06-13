import React, {useEffect} from 'react';
import { Box, Button, Input, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WestIcon from '@mui/icons-material/West';
import styled from 'styled-components';
import styles from "../components/cart/scss/Cart.module.css";
import { useShoppingContext } from '../../context/ShoppingContext';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {formatCurrency} from "./Currency";
import SellIcon from "@mui/icons-material/Sell";

export default function CartTotal() {
    const { cartItems, increaseQty, decreaseQty, removeCartItem } = useShoppingContext();
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.qty, 0);

    useEffect(() => {
        console.log('Total items in cart:', totalItemsInCart);
    }, [cartItems, totalItemsInCart]);

    if (cartItems.length === 0) {
        return (
            <Container>
                <Box>
                    <BreadcrumbsWrapper>
                        <CartBreadcrumbs />
                    </BreadcrumbsWrapper>
                </Box>
                <Typography variant="h5" align="center" margin="20px 0">
                    Your cart is empty.
                </Typography>
                <ContinueShopping>
                    <Button className={`${styles.update_cart}`}
                            sx={{ padding: "5px 16px", border: "2px solid #439eef", fontWeight: "700" }}
                            onClick={handleBackClick}>
                        <WestIcon fontSize="small" />
                        <Typography> CONTINUE SHOPPING</Typography>
                    </Button>
                </ContinueShopping>
            </Container>
        );
    }

    return (
        <Container>
            <Box>
                <BreadcrumbsWrapper>
                    <CartBreadcrumbs />
                </BreadcrumbsWrapper>
            </Box>
            <CartWrapper>
                <CartTable>
                    <table>
                        <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.thumbnail} className='img-fluid rounded' alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{formatCurrency(item.price)}</td>
                                <td>
                                    {item.qty}
                                    <button type="button" className="btn btn-sm btn-primary ms-3 me-1" onClick={() => decreaseQty(item.id)}><strong>-</strong></button>
                                    <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQty(item.id)}><strong>+</strong></button>
                                </td>
                                <td>{formatCurrency(item.price * item.qty)}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(item.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ContinueShopping>
                        <Button className={`${styles.update_cart}`}
                                sx={{ padding: "5px 16px", border: "2px solid #439eef", fontWeight: "700" }}
                                onClick={handleBackClick}>
                            <WestIcon fontSize="small" />
                            <Typography> CONTINUE SHOPPING</Typography>
                        </Button>
                    </ContinueShopping>
                </CartTable>
                <CheckOut>
                    <CheckOutTable />
                </CheckOut>
            </CartWrapper>
        </Container>
    );
}

export function CheckOutTable() {
    const { totalPrice } = useShoppingContext();
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">CART TOTAL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Subtotal</TableCell>
                            <TableCell align="right">{formatCurrency(totalPrice)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Total</TableCell>
                            <TableCell align="right">{formatCurrency(totalPrice)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer sx={{ padding: "0px 10px", marginTop: "10px" }} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                <SellIcon fontSize="small" /> Promo Code
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <Input sx={{
                                width: "100%",
                                maxWidth: "100%",
                                margin: "10px 0px",
                                border: "1px solid #ddd !important"
                            }} placeholder="Promo code"></Input>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <Button className={`${styles.checkout_button}`} sx={{
                ':hover': { backgroundColor: "red", color: "white" },
                width: "100%",
                maxWidth: "100%",
                padding: "5px 16px",
                textAlign: "center",
                backgroundColor: "red",
                color: "white",
                margin: "10px 0px"
            }}>
                <Typography sx={{ width: "100%" }}>PROCEED TO CHECKOUT</Typography>
            </Button>
        </>
    );
}

export function CartBreadcrumbs() {
    const breadcrumbs = [
        <Typography className="active_breadcrumbs" key="1" color="black">
            CART
        </Typography>,
        <Link underline="none" key="2" color="#c4c4c4" href="./Checkout.tsx" onClick={handleClick}>
            PAYMENT INFORMATION
        </Link>,
        <Link underline="none" key="3" color="#c4c4c4" href="./Cart.tsx" onClick={handleClick}>
            ORDER COMPLETION
        </Link>,
    ];

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
        </Breadcrumbs>
    );
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
}

function handleBackClick() {
    history.back();
}

const ContinueShopping = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const CheckOut = styled.div`
    max-width: 30%;
    width: 30%;
`;

const CartTable = styled.div`
    max-width: 70%;
    width: 70%;
`;

const CartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 100%;
    gap: 10px;
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

import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {Container} from "react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WestIcon from '@mui/icons-material/West';
import styled from 'styled-components';
import styles from "../components/cart/scss/Cart.module.css";
import {CheckOutTable} from "../components/cart/CheckOutTable";
import {CartItemTable} from "../components/cart/CartItemTable";
import {CartItemType} from "../types/cartItem.type";
import {useSelector} from "react-redux";
import {RootState} from "../configs/store";


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
            separator={<NavigateNextIcon fontSize="small"/>}
            aria-label="breadcrumb">
            {breadcrumbs}
        </Breadcrumbs>
    );
}


export default function Cart() {
    const cartItems: CartItemType[] = useSelector((state: RootState) => state.cart.cartItems);

    return (
        <Container>
            <Box>
                <BreadcrumbsWrapper>
                    <CartBreadcrumbs/>
                </BreadcrumbsWrapper>
            </Box>
            <CartWrapper>
                <CartTable>
                    <CartItemTable/>
                    <ContinueShopping>
                        <Button className={`${styles.update_cart}`}
                                sx={{padding: " 5px 16px", border: "2px solid #439eef", fontWeight: "700"}}
                                onClick={() => {
                                    history.back();
                                }}>
                            <WestIcon fontSize="small"/>
                            <Typography> TIẾP TỤC XEM SẢN PHẨM</Typography>
                        </Button>
                    </ContinueShopping>
                </CartTable>
                <CheckOut>
                    <CheckOutTable cartItems={cartItems}/>
                </CheckOut>
            </CartWrapper>
        </Container>
    );
}

const ContinueShopping = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
`

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

import React from 'react';
import {Link} from "react-router-dom";
import {Badge, Button, Stack} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDropDown from "../cart-drop-down/CartDropDown";
import {CartItemDropDownType} from "../../types/cartItemDropDown.type";

const cartItems: CartItemDropDownType[] = [
    {id: 1, name: "Áo thun", price: 100000, quantity: 2, url: "https://via.placeholder.com/150", type: "M"},
];

function ButtonCart() {
    const [show, setShow] = React.useState(false);

    return (
        <Stack direction={"column"} alignItems={"center"} className={"position-relative"}
               onMouseEnter={() => setShow(true)}
               onMouseLeave={() => setShow(false)}>
            <Link to={"/cart"} className={"position-relative"}>
                <Button sx={{
                    border: '1px green solid',
                    px: "20px",
                    pt: "15px",
                    pb: "10px"
                }}>
                    <span>Giỏ hàng</span>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon color="info"/>
                    </Badge>
                </Button>
            </Link>
            <CartDropDown cartItems={cartItems}
                          className={`position-absolute  ${show ? "d-block" : "d-none"}`}
                          style={{
                              zIndex: 2,
                              top: "50px"
                          }}
            />
        </Stack>
    );
}

export default ButtonCart;
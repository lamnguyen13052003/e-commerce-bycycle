import React from 'react';
import {Link} from "react-router-dom";
import {Badge, Button} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ButtonCart() {
    return (
        <Link to={"/cart"}>
            <Button sx={{
                border: '1px green solid',
                px: "20px",
                py: "15px"
            }}>
                <span>Giỏ hàng</span>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon color="info"/>
                </Badge>
            </Button>
        </Link>
    );
}

export default ButtonCart;
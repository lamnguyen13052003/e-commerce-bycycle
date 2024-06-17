import React from 'react';
import { Link } from "react-router-dom";
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import productsData from "../cart/product.json";

const ButtonCart: React.FC = () => {
    const totalQuantity = productsData.products.reduce((total, product) => total + product.qty, 0);

    return (
        <Link to="/cart">
            <Button sx={{ border: '1px green solid', px: "20px", py: "15px" }}>
                <span>Giỏ hàng</span>
                <Badge badgeContent={totalQuantity} color="secondary">
                    <ShoppingCartIcon color="info" />
                </Badge>
            </Button>
        </Link>
    );
};

export default ButtonCart;

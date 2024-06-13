import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Popover, Typography, Box, List, ListItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingContext } from '../../context/ShoppingContext';
import { formatCurrency } from '../cart/Currency';
import { CartItemTable } from '../cart/CartItemTable';


interface ButtonCartProps {
    totalItemsInCart: number;
}
const ButtonCart: React.FC<ButtonCartProps> = ({ totalItemsInCart }) => {
    const { cartItems, cartQty, totalPrice } = useShoppingContext();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Box ml="auto">
                <Link to={"/cart"}>
                    <Button sx={{
                        border: '1px solid green',
                        px: "20px",
                        py: "15px"
                    }}>
                        <span>Giỏ hàng</span>
                        {totalItemsInCart > 0 && (
                            <Badge badgeContent={totalItemsInCart} color="secondary">
                                <ShoppingCartIcon color="info" />
                            </Badge>
                        )}
                    </Button>
                </Link>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Box p={2} minWidth={300}>
                        <List>
                            {cartItems && cartItems.length > 0 ? cartItems.map(item => (
                                <ListItem key={item.id}>
                                    <CartItemTable {...item} />
                                </ListItem>
                            )) : (
                                <Typography variant="body1">KHÔNG CÓ SẢN PHẨM TRONG GIỎ HÀNG</Typography>
                            )}
                        </List>
                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <Typography variant="subtitle1"><strong>Total: {formatCurrency(totalPrice)}</strong></Typography>
                            <Link to={"/cart"} href="/Cart.tsx">
                                <Button variant="contained" color="success" size="small" onClick={handleClose}>
                                    XEM GIỎ HÀNG
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Popover>
            </Box>
        </>
    );
}
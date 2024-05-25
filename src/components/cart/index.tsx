import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Image } from "react-bootstrap";
import styles from "../cart/scss/CartItem.module.css";
import ImageCycleBike from '../../assets/images/xe-dap-xanh-la.jpg';

interface CartItemProps {
    id: number;
    title: string;
    qty: number;
    price: number;
    onRemove?: (id: number) => void;
}

export default function CartItem(props: CartItemProps) {
    const [quantity, setQuantity] = useState(props.qty || 1);

    const formatCurrency = (amount: number): string => {
        return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const handleAdd = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity + 1, 1));
    };

    const handleSubtract = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };

    const handleRemove = () => {
        if (props.onRemove) {
            props.onRemove(props.id); // Call the onRemove prop with the item's ID
        }
    };


    return (
        <div className={`${styles.cart_item}`}>
        <div className={`${styles.cart_item_wrapper}`}>
            <Button className="btn-remove-cartitem" onClick={handleRemove}>
                <CloseIcon />
            </Button>
            <div className="flex items-center">
                <Image src={ImageCycleBike} alt={props.title} style={{ width: "100px" }} />
            </div>
            <div className="flex items-center">
                <Typography className="text-lg cart_item_name" sx={{textOverflow: "ellipsis"}}>{props.title}</Typography>
            </div>
                <Typography className="text-lg" sx={{ fontWeight: "700" }}>
                    {formatCurrency(props.price)}
                </Typography>
            <div className="flex items-center">
                <Button className="btn-add-cartitem" onClick={handleAdd}>
                    <AddIcon />
                </Button>
                <input type="number" value={quantity} className="text-center input-quantity" style={{ width: "100px" }} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}/>
                <Button className="btn-remove-cartitem" onClick={handleSubtract}>
                    <RemoveIcon />
                </Button>
            </div>
            <Typography className="totalPrice" sx={{ fontWeight: "700" }}>
                {formatCurrency(props.price * quantity)}
            </Typography>
        </div>
        </div>
    );
}

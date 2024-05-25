import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import {Image} from "react-bootstrap";
import styles from './scss/CartItem.module.css';
import ImageCycleBike from '../../assets/images/xe-dap-xanh-la.jpg';


const CartItem: React.FC = () => {
    const onRemove = () => {
        console.log('Đã xóa sản phẩm');
    };

    const onSubtract = () => {

    };

    const onAdd = () => {

    };

    return (
        <div className="cart-item-wrapper" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "30px", padding: "20px",
        }}>
            <Button  className="btn-remove-cartitem" onClick={onRemove}>
                <CloseIcon />
            </Button>
            <div className="flex items-center">
                <Image src={ImageCycleBike} alt="title" style={{width: "150px"}} className="w-12 h-12 mr-4" />
            </div>
            <div className="flex items-center">
                <Typography className="text-lg">Xe Đạp Trẻ Em 12 Inch GH Bike [GIÁ RẺ] -Xanh Lá</Typography>
            </div>
            <Typography className="text-lg" style={{fontWeight: "700"}}>890.000 ₫</Typography>
            <div className="flex items-center">
                <Button className="btn-add-cartitem"  onClick={onAdd}>
                    <AddIcon />
                </Button>
                <input type="number" value="1" className="w-16 text-center input-quantity" style={{
                    width: "100px"
                }}/>
                <Button className="btn-remove-cartitem" onClick={onSubtract}>
                    <RemoveIcon />
                </Button>
            </div>
            <Typography className="text-lg" style={{fontWeight: "700"}}>890.000 ₫</Typography>
        </div>
    );
};

export default CartItem;

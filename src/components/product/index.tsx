import {Box, Button, Stack} from "@mui/material";
import styles from './scss/Product.module.css';
import React from "react";
import {Image} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LabelDiscount from "./LabelDiscount";
import LabelNew from "./LabelNew";
import {ProductType} from "../../types/product.type";
import {useDispatch} from "react-redux";
import {addCartItem} from "../../slice/cart.slice";
import {CartItemType} from "../../types/cartItem.type";

export default function Product(props: ProductType) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const dispatch = useDispatch();

    const calculateDiscount = () => {
        return Math.floor(props.price * (100 - (props.discount ? props.discount : 0)) / 100);
    }

    return (
        <Box className={'m-2 shadow-lg  rounded-4 overflow-hidden bg-white'} sx={{width: '305px', height: 'auto'}}>
            <Box className={'position-relative'} sx={{height: '218px'}}>
                <Stack direction={'column'} className={'position-absolute top-0 start-0'} gap={"5px"}>
                    {props.sale && <LabelDiscount discount={props.discount ? props.discount : 0}/>}
                    {props.new && <LabelNew zIndex={2}/>}
                </Stack>
                <Box className={'object-fit-cover overflow-hidden position-absolute top-0 start-0 z-0'}
                     sx={{width: '306px', height: '100%'}}>
                    <Image className={`${styles.image_hover}`} src={props.model[0].pathImageColor} alt={props.name}
                           style={{width: '100%'}}/>
                </Box>
            </Box>

            <Box className={'p-2 text-center fw-bold'}>
                <Stack className={'d-flex align-items-center justify-content-center'} direction={"column"} spacing={1}>
                    <Box className={`${styles.text_line_clamp}`}>
                        <p>{props.name}</p>
                    </Box>

                    <Stack className={'p-2 '} direction={"row"} spacing={3}>
                        {props.sale ?
                            <Stack direction={"row"} alignItems={'center'} gap={2}>
                                <span className={'text-body-secondary  fw-normal'}><del>{formatter.format(props.price)}</del></span>
                                <span className={'fs-4 text-danger'}>
                                    {formatter.format(calculateDiscount())}
                                </span>
                            </Stack> :
                            <span className={'fs-4 text-danger'}>{formatter.format(props.price)}</span>
                        }
                    </Stack>

                    <Button className={'text-uppercase mb-3'} variant={"contained"} color={"info"}
                            startIcon={<ShoppingCartIcon/>}
                            onClick={() => {
                                dispatch(addCartItem(cartItem))
                            }}
                            style={{paddingInline: '15px', paddingBlock: '5px', textWrap: 'nowrap'}}>
                        Thêm vào giỏ hàng
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

const cartItem: CartItemType = {
    id: "507f1f77bcf86cd799439011",
    name: "Áo thun",
    price: 100000,
    quantity: 1,
    url: "https://via.placeholder.com/150",
    type: "M"
}

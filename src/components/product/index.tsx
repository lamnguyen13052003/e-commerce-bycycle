import {Box, Button, Stack} from "@mui/material";
import styles from './scss/Product.module.css';
import BoltIcon from '@mui/icons-material/Bolt';
import React from "react";
import {Image} from "react-bootstrap";
import ImageCycleBike from '../../assets/images/xe-dap-dua-calli-r6-4.jpg'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
interface productProps{
    isSale: boolean,
    discount: number,
    image: object,
    name: string,
    price: number,
    discountPrice: number,
}
function Product(props:productProps){
    return (
        <Box className={' mx-2 shadow-lg rounded-4 overflow-hidden'} sx={{width:'306px', height: '376px'}}>
            <Box className={'position-relative'} sx={{height:'218px'}}>
                <LabelDiscount discount={props.discount}/>
                <Box className={'object-fit-cover position-absolute top-0 start-0 z-0'} sx={{width: '306px', height:'218px'}}>
                    <Image className={`${styles.image_hover}`} src={ImageCycleBike} alt={props.name} style={{width: '100%'}}/>
                </Box>
            </Box>

            <Box className={'p-2 text-center fw-bold '}>
                <Stack className={'d-flex align-items-center justify-content-center'} direction={"column"} spacing={1}>
                    <Box className={`${styles.text_line_clamp}`}>
                        <p>{props.name}</p>
                    </Box>

                    <Stack className={'p-2 '} direction={"row"} spacing={3}>
                        <span className={'text-body-secondary    fw-normal'}><del>{props.price}<sup>đ</sup></del></span>
                        <span className={'fs-4 text-danger'}>{props.discountPrice}<sup>đ</sup></span>
                    </Stack>

                    <Button className={'text-uppercase'} variant={"contained"} color={"info"} startIcon={<ShoppingCartIcon/>}
                        style={{width: '148px', height: '28px'}}> Mua hàng</Button>
                </Stack>
            </Box>
        </Box>
    )
}

function LabelDiscount(prop: {discount: number}){
    return (
        <>
            <Box className={`${styles.sale_label}`}>
                <Stack className={'p-1  d-flex align-items-center'} direction="row" spacing={1}>
                    <Box className={' rounded-circle bg-danger text-center'} >
                        <BoltIcon />
                    </Box>
                    <span>Giảm {prop.discount}%</span>
                </Stack>
            </Box>
        </>
    )
}

export default Product
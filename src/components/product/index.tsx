import {Box, Stack} from "@mui/material";
import styles from './scss/Product.module.css';
import BoltIcon from '@mui/icons-material/Bolt';
import React from "react";
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
        <Box className={'position-relative mx-2 shadow-sm rounded-4 border border-1'} sx={{width:'306px', height:'200px'}}>
            <LabelDiscount discount={props.discount}/>
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
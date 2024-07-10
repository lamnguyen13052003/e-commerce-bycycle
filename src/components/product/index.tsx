import {Box, Button, Stack} from "@mui/material";
import styles from './scss/Product.module.css';
import React from "react";
import {Image} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LabelDiscount from "./LabelDiscount";
import LabelNew from "./LabelNew";
import {ProductType} from "../../types/product.type";
import {Link} from "react-router-dom";
import {formatCurrency} from "../../utils/Formatter";
import {pushRecentlyProduct} from "../../utils/sessionStorage";

export default function Product(props: ProductType) {
    const calculateDiscount = () => {
        return Math.floor(props.price * (100 - (props.discount ? props.discount : 0)) / 100);
    }

    const onClickSeeDetailHandle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        pushRecentlyProduct(props)
    }

    return (
        <Box className={'m-2 shadow-lg  rounded-4 overflow-hidden bg-white'} sx={{width: '305px', height: 'auto'}}>
            <Box className={'position-relative'} sx={{height: '218px'}}>
                <Stack direction={'column'} className={'position-absolute'} sx={{
                    top: "5px",
                    left: "5px"
                }} gap={"5px"}>
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
                <Stack className={'d-flex align-items-center justify-content-center'} direction={"column"}
                       spacing={1}>
                    <Box className={`${styles.text_line_clamp}`}>
                        <p>{props.name}</p>
                    </Box>

                    <Stack className={'p-2 '} direction={"row"} spacing={3}>
                        {props.sale ?
                            <Stack direction={"row"} alignItems={'center'} gap={2}>
                                    <span className={'fs-4 text-danger'}>
                                        {formatCurrency(calculateDiscount())}
                                    </span>
                                <span className={'text-body-secondary  fw-normal'}>
                                        <del>{formatCurrency(props.price)}</del>
                                    </span>
                            </Stack> :
                            <span className={'fs-4 text-danger'}>{formatCurrency(props.price)}</span>
                        }
                    </Stack>
                    <Link to={`/product/${props.name.replaceAll(" ", "-")}--${props._id.toString()}`}
                          className={"text-decoration-none"} onClick={onClickSeeDetailHandle}>
                        <Button className={'text-uppercase mb-3'} variant={"contained"} color={"info"}
                                startIcon={<ShoppingCartIcon/>}
                                style={{paddingInline: '15px', paddingBlock: '5px', textWrap: 'nowrap'}}>
                            Xem chi tiết
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    )
}

import {Stack} from "@mui/material";
import React from "react";
import  ProductProps from "../../type/product.type";
import Product from "../product";

export default function ProductList(props: {
    products: ProductProps[]
}) {

    return (
        <Stack direction={'row'}  flexWrap={"wrap"}>
            {
                props.products.map((product, index) => {
                    return <Product key={index} {...product}/>
                })
            }
        </Stack>
    )
}

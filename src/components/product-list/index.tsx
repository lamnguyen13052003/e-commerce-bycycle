import {Stack} from "@mui/material";
import React from "react";
import Product, {ProductProps} from "../product";

export default function ProductList(props: {
    products: ProductProps[]
}) {

    return (
        <Stack direction={'row'} width={"100%"} justifyContent={"space-between"} flexWrap={"wrap"}>
            {
                props.products.map((product, index) => {
                    return <Product {...product}/>
                })
            }
        </Stack>
    )
}

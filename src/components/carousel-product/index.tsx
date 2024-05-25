import React from 'react';
import Product, {ProductProps} from "../product";
import {Carousel} from "react-bootstrap";
import {Stack} from "@mui/material";

function CarouselProduct(props: { products: ProductProps[] }) {
    return (
        <Carousel className={'w-100'} interval={5000} indicators={false}>
            {props.products.map((product, index) => {
                if (index % 4 !== 0) return;
                return (
                    <Carousel.Item>
                        <Stack direction={"row"} justifyContent={'space-between'}>
                            <Product {...props.products[index]}/>
                            {props.products[index + 1] ? <Product {...props.products[index + 1]}/> : ''}
                            {props.products[index + 2] ? <Product {...props.products[index + 2]}/> : ''}
                            {props.products[index + 3] ? <Product {...props.products[index + 3]}/> : ''}
                        </Stack>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default CarouselProduct;
import React from 'react';
import Product from "../product";
import {Carousel} from "react-bootstrap";
import {Stack} from "@mui/material";
import ProductProps from "../../type/product.type";

function CarouselProduct(props: { products: ProductProps[] }) {
    return (
        <Carousel  className={'w-100'} interval={5000} indicators={false}>
            {props.products.map((product: ProductProps, index: number) => {
                if (index % 4 !== 0) return;
                return (
                    <Carousel.Item key={`CarouselItem_${Math.random()}`}>
                        <Stack direction={"row"} justifyContent={'space-between'}>
                            <Product key={`CarouselProduct_${Math.random()}`} {...props.products[index]}/>
                            {props.products[index + 1] ? <Product key={`CarouselProduct_${Math.random()}`} {...props.products[index + 1]}/> : ''}
                            {props.products[index + 2] ? <Product key={`CarouselProduct_${Math.random()}`} {...props.products[index + 2]}/> : ''}
                            {props.products[index + 3] ? <Product key={`CarouselProduct_${Math.random()}`} {...props.products[index + 3]}/> : ''}
                        </Stack>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default CarouselProduct;

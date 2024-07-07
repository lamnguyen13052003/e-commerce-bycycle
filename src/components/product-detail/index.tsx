import React from 'react';
import ProductDetailCol from "../product-detail/ProductDetailCol";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StickyWidget from "./Widget";
import {Box} from "@mui/material";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import {ProductType} from "../../types/product.type";
import Product, {keyGetSetRecentlyProduct} from "../product";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


export function ProductDetail() {
    const recentlyProduct = (): ProductType[] => {
        const data = sessionStorage.getItem(keyGetSetRecentlyProduct);
        if (!data) return [];
        else return JSON.parse(data) as ProductType[];
    }

    return (
        <>
            <Container className={"mt-5"}>
                <Row>
                    <Col sm={9}><ProductDetailCol/></Col>
                    <Col sm={3}><StickyWidget/></Col>
                </Row>
                <Row className={`mt-3 ${!recentlyProduct().length && 'd-none'}`}>
                    <Box className={"fs-3"}>Sản phẩm xem gần đây</Box>
                    <Splide hasTrack={false} aria-label="Current Product" key={"current-product"} options={{
                        perPage: 3,
                        rewind: true,
                        lazyLoad: true,
                        autoplay: true,
                        speed: 5000,
                        gap: 120
                    }}>
                        <SplideTrack>
                            {recentlyProduct().map(product =>
                                <SplideSlide>
                                    <Product key={product._id.toString()} {...product} />
                                </SplideSlide>
                            )}
                        </SplideTrack>


                        <div className="splide__progress">
                            <div className="splide__progress__bar"/>
                        </div>

                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev">
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </button>
                        </div>
                    </Splide>
                </Row>
            </Container>
        </>
    );
}

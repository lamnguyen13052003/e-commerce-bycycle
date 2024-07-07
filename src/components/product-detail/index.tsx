import React, {useEffect, useState} from 'react';
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
import {useNavigate, useParams} from "react-router-dom";
import {ObjectId} from "mongodb";
import {AxiosResponse} from "axios";
import {ResponseApi} from "../../types/response.type";
import axiosHttp from "../../utils/axiosHttp";


export function ProductDetail() {
    const {name} = useParams<{ name: string }>();
    const [product, setProduct] = useState<ProductType>();
    const nav = useNavigate();
    let id: ObjectId;
    useEffect(() => {
        return () => {
            try {
                const idString = name?.split("--")[1];
                axiosHttp.get<any, AxiosResponse<any, ResponseApi<ProductType>>, any>(`api/product/${idString}`)
                    .then((response: AxiosResponse<ResponseApi<ProductType>>) => {
                        setProduct(response.data.data)
                    })
                    .catch(error => {
                            nav("/");
                        }
                    )
            } catch (error) {
                nav("/");
            }
        }
    }, []);


    const recentlyProduct = (): ProductType[] => {
        const data = sessionStorage.getItem(keyGetSetRecentlyProduct);
        if (!data) return [];
        else return JSON.parse(data) as ProductType[];
    }


    return (
        <>
            <Container className={"mt-5"}>
                <Row>
                    {product ?
                        (<>
                            <Col sm={9}><ProductDetailCol {...product}/></Col>
                            <Col sm={3}><StickyWidget warranty={product.specifications.warranty}/></Col>
                        </>) :
                        (<h2>Loading....</h2>)}
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
                                <SplideSlide key={product._id.toString()}>
                                    <Product {...product} />
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

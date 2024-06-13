import React, {useEffect, useState} from 'react';
import {ProductProps} from "../components/product";
import {Box, Stack} from "@mui/material";
import {images as banner_images} from "../assets/images/carousels/images";
import {images as brand_images} from "../assets/images/brands/images";
import {Carousel, Image, Container} from "react-bootstrap";
import LogoBrand from "../components/logo-brand";
import ListCategory from "../components/list-category";
import CarouselProduct from "../components/carousel-product";
import ProductByCategory from "../components/product-by-category";
import {useDispatch, useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../configs/store";
import {getProductsByCategory} from "../slice/product.slice";
import axios from "axios";

/*
xe dap tre em: 0
xe dap the thao: 1
xe dap dia hinh: 2
xe dap dua: 3
xe dap touring: 4
xe dap nu: 5
xe dap gap : 6
 */
function Home() {
    const productsState = useSelector((state: RootState) => state.product.products)
    const [bestSale , setBestSale] = useState<ProductProps[]>(productsState)
    const [newProduct , setNewProduct] = useState<ProductProps[]>(productsState)
    const [babyBicycle , setBabyBicycle] = useState<ProductProps[]>(productsState)
    const [sportBicycle , setSportBicycle] = useState<ProductProps[]>(productsState)
    const [topographicBicycle , setTopographicBicycle] = useState<ProductProps[]>(productsState)
    const [racingBicycle , setRacingBicycle] = useState<ProductProps[]>(productsState)
    const [touringBicycle , setTouringBicycle] = useState<ProductProps[]>(productsState)
    const [femaleBicycle , setFemaleBicycle] = useState<ProductProps[]>(productsState)
    // const [foldBicycle , setFoldBicycle] = useState<ProductProps[]>(productsState)

    const dispatch = useAppDispatch()

    useEffect(() => {
        // const promise = dispatch(getProductsByCategory(1))
        // console.log(products)
        // console.log(promise)
        // return () => {
        //     promise.abort()
        //
        // }
        axios.get('http://localhost:1305/api/products/0')
            .then((res) => {
                setBabyBicycle(res.data.data)
            })

        axios.get('http://localhost:1305/api/products/1')
            .then((res) => {
                setSportBicycle(res.data.data)
            })

        axios.get('http://localhost:1305/api/products/2')
            .then((res) => {
                setTopographicBicycle(res.data.data)
            })

        axios.get('http://localhost:1305/api/products/3')
            .then((res) => {
                setRacingBicycle(res.data.data)
            })

        axios.get('http://localhost:1305/api/products/4')
            .then((res) => {
                setTouringBicycle(res.data.data)
            })

        axios.get('http://localhost:1305/api/products/5')
            .then((res) => {
                setFemaleBicycle(res.data.data)
            })

        // axios.get('http://localhost:1305/api/products/6')
        //     .then((res) => {
        //         setFoldBicycle(res.data.data)
        //     })
    }, );
    return (
        <>
            <Box>
                <Container>
                    <Stack direction={"column"} alignItems={'center'} pt={"30px"}>
                        {renderCarousel()}
                        <ListCategory mt={3}/>
                    </Stack>
                </Container>
            </Box>
            <Box pt={4} pb={10} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <h2 className={'text-center text-primary fw-bold'}>THƯƠNG HIỆU UY TÍN - CHẤT LƯƠNG</h2>
                    <Stack direction={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"}>
                        {renderBrand()}
                    </Stack>
                </Container>
            </Box>
            <Box pt={4} pb={10}
                 style={{background: "linear-gradient(296deg, rgb(239, 123, 123) 27.56%, rgb(255, 179, 91) 85.53%)"}}>
                <Container>
                    <h2 className={'text-center text-white fw-bold'}>Sản phẩm bán chạy</h2>
                    <Stack direction={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"}>
                        <CarouselProduct products={babyBicycle}/>
                    </Stack>
                </Container>
            </Box>
            <Box pt={4} pb={10}
                 style={{background: "linear-gradient(296deg, rgb(67, 158, 239) 27.56%, rgb(39, 232, 246) 85.53%)"}}>
                <Container>
                    <h2 className={'text-center text-white fw-bold'}>SẢN PHẨM NỔI BẬT</h2>
                    <Stack direction={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"}>
                        <CarouselProduct products={babyBicycle}/>
                    </Stack>
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={babyBicycle}
                                       to={"#"}
                                       title={"XE ĐẠP TRẺ EM"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={sportBicycle}
                                       to={"#"}
                                       title={"XE ĐẠP THỂ THAO"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={topographicBicycle}
                                       to={"#"}
                                       title={"XE ĐẠP ĐỊA HÌNH"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={racingBicycle}
                                       to={"#"}
                                       title={"XE ĐẠP ĐUA"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={racingBicycle}
                                       to={"#"}
                                       title={"XE ĐẠP TOURING"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={touringBicycle}
                                       to={"#"}
                                       title={"XE ĐẠP GẤP"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={femaleBicycle}
                                       to={"#"}
                                       title={"XE ĐẠP NỮ"}
                    />
                </Container>
            </Box>
        </>
    );
}

const renderCarousel = () => {
    return <Carousel key={"Carousel_asdfsaf"} className={'w-100'}>
        {banner_images.map((image, index) => {
            return (<Carousel.Item  key={index} style={{
                height: "600px"
            }}>
                <Image src={image} rounded className={'h-100'} width={'100%'}/>
            </Carousel.Item>)
        })}
    </Carousel>
}

const renderBrand = () => {
    return brand_images.map((image, index) => {
        return <LogoBrand src={image}/>
    });
}


export default Home;


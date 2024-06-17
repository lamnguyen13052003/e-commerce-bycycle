import React, {useEffect} from 'react';
import {Box, Stack} from "@mui/material";
import {images as banner_images} from "../assets/images/carousels/images";
import {images as brand_images} from "../assets/images/brands/images";
import {Carousel, Container, Image} from "react-bootstrap";
import LogoBrand from "../components/logo-brand";
import ListCategory from "../components/list-category";
import CarouselProduct from "../components/carousel-product";
import ProductByCategory from "../components/product-by-category";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../configs/store";
import {getProductsByBestSale, getProductsByCategory} from "../slice/product.slice";

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
    const productsState = useSelector((state: RootState) => state.product)
    const dispatch = useAppDispatch()
    const {
        babyBicycle,
        touringBicycle,
        topographicBicycle,
        sportBicycle,
        foldBicycle,
        femaleBicycle,
        racingBicycle,
        newProduct,
        bestSale
    } = productsState

    useEffect(() => {
        const promise_zero = dispatch(getProductsByCategory(0))
        const promise_one = dispatch(getProductsByCategory(1))
        const promise_two = dispatch(getProductsByCategory(2))
        const promise_three = dispatch(getProductsByCategory(3))
        const promise_four = dispatch(getProductsByCategory(4))
        const promise_five = dispatch(getProductsByCategory(5))
        const promise_six = dispatch(getProductsByCategory(6))
        const promise_best_sale = dispatch(getProductsByBestSale(true))
        const promise_new = dispatch(getProductsByBestSale(false))
        return () => {
            promise_zero.abort();
            promise_one.abort();
            promise_two.abort();
            promise_three.abort();
            promise_four.abort();
            promise_five.abort();
            promise_six.abort();
            promise_best_sale.abort();
            promise_new.abort();
        };
    }, []);

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
                        <CarouselProduct products={bestSale}/>
                    </Stack>
                </Container>
            </Box>
            <Box pt={4} pb={10}
                 style={{background: "linear-gradient(296deg, rgb(67, 158, 239) 27.56%, rgb(39, 232, 246) 85.53%)"}}>
                <Container>
                    <h2 className={'text-center text-white fw-bold'}>SẢN PHẨM NỔI BẬT</h2>
                    <Stack direction={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"}>
                        <CarouselProduct products={newProduct}/>
                    </Stack>
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"babyBicycle"}
                                       products={babyBicycle.products}
                                       to={"/category/xe-dap-tre-em"}
                                       title={"XE ĐẠP TRẺ EM"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={sportBicycle.products}
                                       to={"/category/xe-dap-the-thao"}
                                       title={"XE ĐẠP THỂ THAO"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={topographicBicycle.products}
                                       to={"/category/xe-dap-dia-hinh"}
                                       title={"XE ĐẠP ĐỊA HÌNH"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={racingBicycle.products}
                                       to={"/category/xe-dap-dua"}
                                       title={"XE ĐẠP ĐUA"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={touringBicycle.products}
                                       to={"/category/xe-dap-touring"}
                                       title={"XE ĐẠP TOURING"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={foldBicycle.products}
                                       to={"/category/xe-dap-gap"}
                                       title={"XE ĐẠP GẤP"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={femaleBicycle.products}
                                       to={"/category/xe-dap-nu"}
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
            return (<Carousel.Item key={index} style={{
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


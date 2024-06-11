import React from 'react';
import {ProductProps} from "../components/product";
import {Box, Stack} from "@mui/material";
import {images as banner_images} from "../assets/images/carousels/images";
import {images as brand_images} from "../assets/images/brands/images";
import {Carousel, Image, Container} from "react-bootstrap";
import LogoBrand from "../components/logo-brand";
import ListCategory from "../components/list-category";
import CarouselProduct from "../components/carousel-product";
import ProductByCategory from "../components/product-by-category";



function Home() {
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
                        <CarouselProduct products={product_best_sales}/>
                    </Stack>
                </Container>
            </Box>
            <Box pt={4} pb={10}
                 style={{background: "linear-gradient(296deg, rgb(67, 158, 239) 27.56%, rgb(39, 232, 246) 85.53%)"}}>
                <Container>
                    <h2 className={'text-center text-white fw-bold'}>SẢN PHẨM NỔI BẬT</h2>
                    <Stack direction={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"}>
                        <CarouselProduct products={product_best_sales}/>
                    </Stack>
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={products}
                                       to={"#"}
                                       title={"XE ĐẠP TRẺ EM"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={products}
                                       to={"#"}
                                       title={"XE ĐẠP THỂ THAO"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={products}
                                       to={"#"}
                                       title={"XE ĐẠP ĐỊA HÌNH"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={products}
                                       to={"#"}
                                       title={"XE ĐẠP ĐUA"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={products}
                                       to={"#"}
                                       title={"XE ĐẠP TOURING"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={products}
                                       to={"#"}
                                       title={"XE ĐẠP GẤP"}
                    />
                </Container>
            </Box>
            <Box className={'pt-5 pb-5'} style={{background: "rgba(199, 228, 255, 0.208)"}}>
                <Container>
                    <ProductByCategory key={"a"}
                                       products={products}
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
            return (<Carousel.Item style={{
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

const products: ProductProps[] = [
    {
        sale: true,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,
    }
    , {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }
    , {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }
    , {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }
    , {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }
    , {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }
    , {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }
    , {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }
]

const product_best_sales: ProductProps[] = [
    {
        sale: true,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,
    }, {
        sale: false,
        new: true,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    }, {
        sale: false,
        discount: 3,
        image: {},
        name: 'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha',
        price: 3000000,

    },
]



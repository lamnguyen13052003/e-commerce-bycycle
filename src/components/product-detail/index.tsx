import React from 'react';
import ProductDetailCol from "../product-detail/ProductDetailCol";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StickyWidget from "./Widget";
import { ProductDetailBreadcrumbs } from "./ProductDetailBreadcrumbs";


const ProductDetailColItem = {
    category: "Xe Đạp Địa Hình",
    name: "Xe Đạp Địa Hình MTB Vicky Crazy VC800 26 Inch",
};



export function ProductDetail() {
    const BreadcrumbAtt = {
        category: ProductDetailColItem.category,
        title: ProductDetailColItem.name,
    };

    return (
        <Container style={{ marginTop: "30px" }}>
            <Row>
                <Col sm={12} style={{marginBottom: "30px"}}>
                    <ProductDetailBreadcrumbs productDetailColItem={BreadcrumbAtt} />
                </Col>
                <Col sm={9}>
                    <ProductDetailCol />
                </Col>
                <Col sm={3}>
                    <StickyWidget />
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetail;

import React from 'react';
import ProductDetailCol from "../product-detail/ProductDetailCol";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StickyWidget from "./Widget";


export function ProductDetail() {
    return(
        <>
            <Container style={{marginTop: "30px"}}>
                <Row>
                    <Col sm={9}><ProductDetailCol /></Col>
                    <Col sm={3}><StickyWidget /></Col>
                </Row>
            </Container>
        </>
    );
}

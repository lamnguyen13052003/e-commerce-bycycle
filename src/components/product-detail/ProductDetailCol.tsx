import React, { useState } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import * as pdc from "./product-detail-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColorSelector from "./ColorSelector";
import QuantityCell from "../cart/QuantityCell";
import {Button, Stack, TextField, Input} from "@mui/material";
import CarouselProduct from "../carousel-product";
import {product_best_sales} from "../product/DataProduct";
import {TechSpec} from "./product-detail-components";



const ProductDetailCol = () => {
    const productDetailColItem = {
        images: [
            {
                original: "src/assets/images/product-detail/xe_dap_dia_hinh_den_do.jpg",
                thumbnail: "src/assets/images/product-detail/xe_dap_dia_hinh_den_do.jpg",
            },
            {
                original: "src/assets/images/product-detail/xe_dap_dia_hinh_den_lam.jpg",
                thumbnail: "src/assets/images/product-detail/xe_dap_dia_hinh_den_lam.jpg",
            },
            {
                original: "src/assets/images/product-detail/xe_dap_dia_hinh_lam_luc.jpg",
                thumbnail: "src/assets/images/product-detail/xe_dap_dia_hinh_lam_luc.jpg",
            },
            {
                original: "src/assets/images/product-detail/xe_dap_dia_hinh_trang_do.jpg",
                thumbnail: "src/assets/images/product-detail/xe_dap_dia_hinh_trang_do.jpg",
            },
            {
                original: "src/assets/images/product-detail/xe_dap_dia_hinh_trang_lam.jpg",
                thumbnail: "src/assets/images/product-detail/xe_dap_dia_hinh_trang_lam.jpg",
            },
        ],
        id: 1,
        title: "Xe Đạp Địa Hình MTB Vicky Crazy VC800 26 Inch – Khung Thép | Phanh Đĩa Giá Rẻ | Khuyến mãi Hot",
        brand: "Vicky",
        category: "Xe Đạp Địa Hình",
        sku: "Vc800",
        price: 2530000,
        previousPrice: 3000000,
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
        idcolor: ["VC800-DD", "VC800-DX", "VC800-TD", "VC800-TX", "VC800-XV"],
        color: [
            { color1: "#000000", color2: "#000000", name: "Đen" },
            { color1: "#000000", color2: "#0000FF", name: "Đen Xanh" },
            { color1: "#FFFFFF", color2: "#FF0000", name: "Trắng Đỏ" },
            { color1: "#FFFFFF", color2: "#0000FF", name: "Trắng Xanh" },
            { color1: "#0000FF", color2: "#FFFF00", name: "Xanh Vàng" },
        ],
        videoTitle: "Video Review Xe Đạp Địa Hình MTB Vicky Crazy VC800 26 Inch",
        techSpec: [
            {}
        ],
        contentProduct: "", /* import in html */
    };

    const [selectedColor, setSelectedColor] = useState<string>(productDetailColItem.color[0].name);

    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <div>
                        <pdc.ShortDes>
                            <Row>
                                <Col sm={6}>
                                    <div>
                                        <ImageGallery
                                            showBullets={false}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            items={productDetailColItem.images}
                                        />
                                    </div>
                                </Col>
                                <Col className={"short-des"} sm={6} style={{ background: "#cfcfcf2b", borderRadius: "5px", padding: "10px 15px 15px 30px"}}>
                                    <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
                                        <h4 style={{fontWeight: "bold"}}>{productDetailColItem.title}</h4>
                                        <div style={{ background: "#4d90fe21", borderRadius: "5px", padding: "10px 14px 1px 10px"}}>
                                            <ul>
                                                <li>Xe Nhập Khẩu Chính Hãng</li>
                                                <li>Bảo Hành 12 Tháng</li>
                                            </ul>
                                        </div>
                                        <p className={"price"} style={{fontWeight: "bold", fontSize: "24px", display: "flex", gap: "20px"}}>
                                            <span style={{ textDecoration: 'line-through' }}>
                                                ${productDetailColItem.previousPrice}
                                            </span>
                                            <span style={{color: "red"}}> ${productDetailColItem.price} </span>
                                        </p>
                                        <img src="/src/assets/images/product-detail/ship.jpg" alt="Shipping"/>
                                        <div className={"product-detail-offer"}>
                                            <h3>ƯU ĐÃI ĐẶC BIỆT</h3>
                                            <ul>
                                                <li>
                                                    Khuyến mãi xe đạp trong tháng (<a href="#">Xem chi tiết</a>)
                                                </li>
                                                <li>
                                                    Quà tặng đến <span style={{ color: "red" }}>450.000 đồng</span>
                                                </li>
                                                <li>
                                                    Phiếu mua hàng trị giá đến <span style={{ color: "red" }}>2 triệu đồng</span>
                                                </li>
                                                <li>
                                                    Đạp xe về nhà tăng thêm <span style={{ color: "red" }}>50.000 đồng</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <span>Mã: {productDetailColItem.sku}</span>
                                        <div>
                                            <h4>Chọn màu sắc:</h4>
                                            <ColorSelector
                                                colors={productDetailColItem.color}
                                                selectedColor={selectedColor}
                                                onSelectColor={setSelectedColor}
                                            />
                                        </div>
                                        <hr />
                                        <div className={"add_to_cart"}>
                                            <div>
                                                <QuantityCell id={productDetailColItem.id} quantity={1} onAdd={() => {}} onSubtract={() => {}} />
                                                <Button variant="contained">Thêm vào giỏ hàng</Button>
                                            </div>
                                            <Button className={"buy-now"} variant="contained">
                                                Mua ngay
                                            </Button>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>Gọi đặt mua: 0999 999 999 | Chat với chúng em!
                                                </li>
                                                <li>Hãy nhập số điện thoại của anh chị vào đây ạ, chúng em sẽ gọi lại tư vấn ngay cho anh chị về sản phẩm này ạ!
                                                </li>
                                            </ul>
                                            <div className={"form-product"}>
                                                <Input placeholder="Số điện thoại" fullWidth="true"/>
                                                <Button variant="contained" href="#">Gửi</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </pdc.ShortDes>
                    </div>
                </Col>
                <Col sm={12} style={{display: "flex", flexDirection: "column", gap: "50px"}}>
                    <pdc.Toc>
                    </pdc.Toc>
                    <pdc.Des>
                        <div id="basic-des">
                            <h2>Mô Tả Cơ Bản</h2>
                            <ul>
                                <li>Mã sản phẩm: {productDetailColItem.sku}</li>
                                <li>Thương hiệu: {productDetailColItem.brand}</li>
                                <li>Màu sắc: {productDetailColItem.color.map(c => c.name).join(", ")}</li>
                                <li>Phân loại: {productDetailColItem.category}</li>
                            </ul>
                        </div>
                        <div id="tech-spec">
                            <h2>Thông số kỹ thuật</h2>
                            <TechSpec>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Khung</td>
                                        <td>Hợp kim thép</td>
                                    </tr>
                                    <tr>
                                        <td>Càng/phuộc xe</td>
                                        <td>Hợp kim thép, giảm xóc lò xo</td>
                                    </tr>
                                    <tr>
                                        <td>Ghi đông</td>
                                        <td>Hợp kim thép</td>
                                    </tr>
                                    <tr>
                                        <td>Pô tăng/cổ xe</td>
                                        <td>Hợp kim nhôm</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ thống Phanh (Thắng)</td>
                                        <td>Thắng đĩa cơ</td>
                                    </tr>
                                    <tr>
                                        <td>Tay đề</td>
                                        <td>N/a</td>
                                    </tr>
                                    <tr>
                                        <td>Tăng tốc trước (Gạt đĩa)</td>
                                        <td>N/a</td>
                                    </tr>
                                    <tr>
                                        <td>Tăng tốc sau (Gạt líp)</td>
                                        <td>N/a</td>
                                    </tr>
                                    <tr>
                                        <td>Đùi đĩa</td>
                                        <td>Hợp kim thép</td>
                                    </tr>
                                    <tr>
                                        <td>Dĩa</td>
                                        <td>1 tầng</td>
                                    </tr>
                                    <tr>
                                        <td>Líp sau</td>
                                        <td>NSXKCB</td>
                                    </tr>
                                    <tr>
                                        <td>Xích</td>
                                        <td>DTO</td>
                                    </tr>
                                    <tr>
                                        <td>Đùm xe</td>
                                        <td>Hợp kim thép, Bi côn</td>
                                    </tr>
                                    <tr>
                                        <td>Vành xe</td>
                                        <td>Hợp kim nhôm</td>
                                    </tr>
                                    <tr>
                                        <td>Lốp</td>
                                        <td>WANDA 26X2.125</td>
                                    </tr>
                                    <tr>
                                        <td>Yên</td>
                                        <td>VICKY</td>
                                    </tr>
                                    <tr>
                                        <td>Cọc/cốt yên</td>
                                        <td>Hợp kim thép Vicky</td>
                                    </tr>
                                    <tr>
                                        <td>Trọng lượng thùng</td>
                                        <td>136x19x77</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </TechSpec>
                        </div>
                        <div id="product-content">

                        </div>
                    </pdc.Des>
                    <pdc.Comment>
                        <div  id="form">
                            <h3>Đánh giá</h3>
                            <div>
                                <div style={{
                                    width: "100%",
                                    border: "2px solid #2372dc",
                                    borderRadius: "10px",
                                    padding: "30px"}}>
                                    <h3>Hãy là người đầu tiên đánh giá “Xe Đạp Địa Hình MTB Vicky Crazy VC800 26 Inch –
                                        Khung Thép | Phanh Đĩa Giá Rẻ | Khuyến mãi Hot” </h3>
                                    <TextField
                                        id="filled-multiline-static"
                                        label="Đánh giá của bạn"
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        fullWidth
                                    />
                                    <div style={{display: "flex", gap: "30px", width: "100%", marginTop: "50px"}}>
                                        <Input placeholder="Tên" fullWidth= "true" variant="filled"
                                        ></Input>
                                        <Input placeholder="Email" fullWidth="true" variant="filled"
                                        ></Input>
                                    </div>
                                    <Button style={{marginTop: "20px", width: "150px" , height: "45px"}} variant="contained" size="medium">Gửi</Button>
                                </div>
                            </div>
                        </div>
                    </pdc.Comment>
                    <pdc.RelatedProduct>
                        <h3>Sản phẩm liên quan</h3>
                        <Stack direction={"row"}  gap={3}>
                            <CarouselProduct products={product_best_sales}/>
                        </Stack>
                    </pdc.RelatedProduct>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailCol;

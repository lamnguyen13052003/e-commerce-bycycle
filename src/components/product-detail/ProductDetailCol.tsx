import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import * as pdc from './ProductDetailComponent';
import {TechSpec} from './ProductDetailComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorSelector from './ColorSelector';
import QuantityCell from '../cart/QuantityCell';
import {Button, Input, TextField} from '@mui/material';
import {formatCurrency} from "../../utils/Formatter";
import {ProductType} from "../../types/product.type";
import {useDispatch} from "react-redux";
import {addCartItem} from "../../slice/cart.slice";


const ProductDetailCol = (product: ProductType) => {
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState<string>(`${product.model[0].color},${product.model[0].color}`);
    const [quantity, setQuantity] = useState<number>(1);

    const handleSelectColor = (color1: string, color2: string) => {
        setSelectedColor(`${color1},${color2}`);
    };


    const getType = () => {
        const colors = selectedColor.split(",");
        return colors[0] === colors[1] ? colors[0] : colors.join("/");
    }

    return (
        <Container>
            <Row>
                <Col sm={12} style={{borderBottom: '2px solid #efefef'}}>
                    <div>
                        <pdc.ShortDes>
                            <Row>
                                <Col sm={6}>
                                    <div>
                                        <ImageGallery
                                            showBullets={false}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            items={product.model.map((model) => ({
                                                original: model.pathImageColor,
                                                thumbnail: model.pathImageColor,
                                            }))}
                                        />
                                    </div>
                                </Col>
                                <Col className="short-des" sm={6} style={{
                                    background: '#cfcfcf2b',
                                    borderRadius: '5px',
                                    padding: '10px 15px 15px 30px'
                                }}>
                                    <div style={{display: 'flex', gap: '20px', flexDirection: 'column'}}>
                                        <h4 style={{fontWeight: 'bold'}}>{product.name}</h4>
                                        <div style={{
                                            background: '#4d90fe21',
                                            borderRadius: '5px',
                                            padding: '10px 14px 1px 10px'
                                        }}>
                                            <ul>
                                                <li>Xe Nhập Khẩu Chính Hãng</li>
                                                <li>Bảo Hành {product.specifications.warranty}</li>
                                            </ul>
                                        </div>
                                        <p className="price"
                                           style={{fontWeight: 'bold', fontSize: '24px', display: 'flex', gap: '20px'}}>
                                            {product.discount ? (
                                                <>
                                                    <span style={{textDecoration: 'line-through'}}>
                                                        {formatCurrency(product.price)}
                                                     </span>
                                                    <span style={{color: 'red'}}>
                                                        {formatCurrency((100 - product.discount) * product.price / 100)}
                                                    </span>
                                                </>
                                            ) : (
                                                <span style={{color: 'red'}}>
                                                    {formatCurrency(product.price)}
                                                 </span>
                                            )}

                                        </p>
                                        <img src="/src/assets/images/product-detail/ship.jpg" alt="Shipping"/>
                                        <div className="product-detail-offer">
                                            <h3>ƯU ĐÃI ĐẶC BIỆT</h3>
                                            <ul>
                                                <li>Khuyến mãi xe đạp trong tháng (<a href="#">Xem chi tiết</a>)</li>
                                                <li>Quà tặng đến <span style={{color: 'red'}}>450.000 đồng</span></li>
                                                <li>Phiếu mua hàng trị giá đến <span
                                                    style={{color: 'red'}}>2 triệu đồng</span></li>
                                                <li>Đạp xe về nhà tăng thêm <span
                                                    style={{color: 'red'}}>50.000 đồng</span></li>
                                            </ul>
                                        </div>
                                        <span>Mã: {product.base_description.product_id}</span>
                                        <div>
                                            <h4>Chọn màu sắc:</h4>
                                            <ColorSelector
                                                colors={product.model.map(model => {
                                                    return {
                                                        color1: model.color,
                                                        color2: model.color,
                                                        name: model.color
                                                    };
                                                })}
                                                selectedColor={selectedColor}
                                                onSelectColor={handleSelectColor}
                                            />
                                        </div>
                                        <hr/>
                                        <div className="add_to_cart">
                                            <div>
                                                <QuantityCell id={product._id}
                                                              hasDispatch={false}
                                                              type={selectedColor}
                                                              quantity={quantity}
                                                              onChange={(quantity) => {
                                                                  setQuantity(quantity);
                                                              }}
                                                />
                                                <Button className="text-uppercase mb-3 add-cart" variant="contained"
                                                        color="info" onClick={() => {
                                                    dispatch(addCartItem({
                                                        id: product._id,
                                                        name: product.name,
                                                        url: product.model[0].pathImageColor,
                                                        price: product.discount ? (100 - product.discount) * product.price / 100 : product.price,
                                                        quantity: quantity,
                                                        type: selectedColor,
                                                    }))
                                                    setQuantity(1)
                                                }}>
                                                    Thêm vào giỏ hàng
                                                </Button>
                                            </div>
                                            <Button className="buy-now" variant="contained">
                                                Mua ngay
                                            </Button>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>Gọi đặt mua: 0855354919 | Chat với chúng em!</li>
                                                <li>Hãy nhập số điện thoại của anh chị vào đây ạ, chúng em sẽ gọi lại tư
                                                    vấn ngay cho anh chị về sản phẩm này ạ!
                                                </li>
                                            </ul>
                                            <div className="form-product">
                                                <Input placeholder="Số điện thoại" fullWidth={true}/>
                                                <Button variant="contained" href="#">
                                                    Gửi
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </pdc.ShortDes>
                    </div>
                </Col>
                <Col sm={12} style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
                    <pdc.Toc>
                        <div>
                            <p>Nội Dung Mục Lục</p>
                            <ul>
                                <li><a href="#basic-des">Mô Tả Cơ Bản</a></li>
                                <li><a href="#tech-spec">Bảng Thông Số Kỹ Thuật</a></li>
                                <li><a href="#product-content">Đặc Điểm Nổi Bật {product.name}</a></li>
                            </ul>
                        </div>
                    </pdc.Toc>
                    <pdc.Des>
                        <div id="basic-des">
                            <h2>Mô Tả Cơ Bản</h2>
                            <ul>
                                <li><span>Mã sản phẩm:</span> {product.base_description.product_id}</li>
                                <li><span>Thương hiệu:</span> {product.base_description.brand}</li>
                                <li><span>Màu sắc:</span> {product.model.map(model => model.color).join(', ')}</li>
                                <li><span>Kich cở:</span> {product.base_description.size}</li>
                                <li><span>Chất liệu:</span> {product.base_description.material}</li>
                            </ul>
                        </div>
                        <div id="tech-spec">
                            <h2>Thông số kỹ thuật</h2>
                            <TechSpec>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Tên</td>
                                        <td>Giá trị</td>
                                    </tr>
                                    <tr>
                                        <td>Kích thước khung</td>
                                        <td>{product.specifications.frameSize}</td>
                                    </tr>
                                    <tr>
                                        <td>Chất liệu khung</td>
                                        <td>{product.specifications.frameMaterial}</td>
                                    </tr>
                                    <tr>
                                        <td>Kích thước bánh xe</td>
                                        <td>{product.specifications.wheelSize}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ thống truyền lực</td>
                                        <td>{product.specifications.drivetrain}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ thống treo</td>
                                        <td>{product.specifications.ForkAndSuspension}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ thống phanh (thắng)</td>
                                        <td>{product.specifications.brakes}</td>
                                    </tr>
                                    <tr>
                                        <td>Yên xe</td>
                                        <td>{product.specifications.saddle}</td>
                                    </tr>
                                    <tr>
                                        <td>Trọng lượng</td>
                                        <td>{product.specifications.weight}</td>
                                    </tr>
                                    <tr>
                                        <td>Tay lái</td>
                                        <td>{product.specifications.handlebarsAndStem}</td>
                                    </tr>
                                    <tr>
                                        <td>Phụ kiện kèm theo</td>
                                        <td>{product.specifications.includedAccessories}</td>
                                    </tr>
                                    <tr>
                                        <td>Bảo hành</td>
                                        <td>{product.specifications.warranty}</td>
                                    </tr>
                                    <tr>
                                        <td>Mục đích sử dụng</td>
                                        <td>{product.specifications.targetUsing}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </TechSpec>
                        </div>
                        <div id="product-content"></div>
                    </pdc.Des>
                    <pdc.Comment className="mb-3">
                        <div id="form">
                            <h3>Đánh giá</h3>
                            <div>
                                <div style={{
                                    width: '100%',
                                    border: '2px solid #2372dc',
                                    borderRadius: '10px',
                                    padding: '30px'
                                }}>
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
                                    <div style={{display: 'flex', gap: '30px', width: '100%', marginTop: '50px'}}>
                                        <Input placeholder="Tên" fullWidth={true}/>
                                        <Input placeholder="Email" required={true} type="email" fullWidth={true}/>
                                    </div>
                                    <Button style={{marginTop: '20px', width: '150px', height: '45px'}}
                                            variant="contained" size="medium">
                                        Gửi
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </pdc.Comment>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailCol;


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
import {Avatar, Box, Button, Grid, Input, Stack, TextField} from '@mui/material';
import {formatCurrency} from "../../utils/Formatter";
import {ProductType} from "../../types/product.type";
import {addCartItem} from "../../slice/cart.slice";
import HoverRating from "../hover-rating";
import {green} from "@mui/material/colors";
import ReviewList from "../review-list";
import ResponsiveDialog from "../response-dialog/ResponsiveDialog";
import {Link} from "react-router-dom";
import {getUser} from "../../utils/sessionStorage";
import {ModelType} from "../../types/modelProduct.type";
import {addReview} from "../../slice/reviewProduct.slice";
import AddReviewRequest from "../../requests/addReview.request";
import {useAppDispatch} from "../../configs/store";


const ProductDetailCol = (product: ProductType) => {
    const user = getUser();
    const dispatch = useAppDispatch();
    const [modelSelected, setModelSelected] = useState<ModelType>(product.model[0]);
    const [quantity, setQuantity] = useState<number>(1);

    const handleSelectColor = (model: ModelType) => {
        setModelSelected(model);
    };

    const [openDialog, setOpenDialog] = useState(false);
    const [textReview, setTextReview] = useState<string>('');
    const [rating, setRating] = useState<number>(3);

    const handleValidReview = () => {
        return textReview === '';
    }

    const handleChangeTextReview = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextReview(event.target.value);
    }

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleAddReview = () => {
        if (handleValidReview() || !user || !user?._id ) return;
        dispatch(addReview({
            productId: product._id,
            user_id: user._id,
            rating: rating,
            comment: textReview,
        }));
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
                                                models={product.model.map(model => {
                                                    return model;
                                                })}
                                                selectedColor={modelSelected.color}
                                                onSelectColor={handleSelectColor}
                                            />
                                        </div>
                                        <hr/>
                                        <div className="add_to_cart">
                                            <div>
                                                <QuantityCell id={product._id}
                                                              hasDispatch={false}
                                                              type={modelSelected.color}
                                                              quantity={quantity}
                                                              max={modelSelected.quantity}
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
                                                        type: modelSelected.color,
                                                    }))
                                                    setQuantity(1)
                                                }}>
                                                    Thêm vào giỏ hàng
                                                </Button>
                                            </div>
                                            <Button className={"buy-now"} variant="contained">
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
                                            <div className={"form-product"}>
                                                <Input placeholder="Số điện thoại" fullWidth={true}/>
                                                <Button variant="contained" href="#">Gửi</Button>
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
                    {user && user._id ?
                        (<>
                            <pdc.Comment className="mb-3">
                                <div id="form">
                                    <h3>Đánh giá</h3>
                                    <div>
                                        <Box style={{
                                            width: '100%',
                                            border: '2px solid #2372dc',
                                            borderRadius: '10px',
                                            padding: '30px'
                                        }}>
                                            <ReviewList reviews={product.review} userId={user._id}/>
                                            {user._id &&
                                                <Grid container>
                                                    <Grid item xs={1}>
                                                        <Avatar alt={!user.fullName ? `` : user.fullName}
                                                                src={!user.urlAvatar ? `` : `${user.urlAvatar}`}
                                                                className={'m-auto'}
                                                                sx={{backgroundColor: green[500]}}></Avatar>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Stack direction={'column'} spacing={1}>
                                                            <Box
                                                                className={'fw-bold'}>{!user.fullName ? `Name` : user.fullName}</Box>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            }
                                            <HoverRating rating={rating}/>
                                            <Box
                                                component="form"
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    id="filled-multiline-static"
                                                    onChange={handleChangeTextReview}
                                                    label="Đánh giá của bạn"
                                                    multiline
                                                    rows={4}
                                                    variant="filled"
                                                    fullWidth
                                                    {...(handleValidReview() ? {
                                                        error: true,
                                                        helperText: "Vui lòng nhập đánh giá"
                                                    } : {})}
                                                />
                                            </Box>
                                            <Button style={{marginTop: '20px', width: '150px', height: '45px'}}
                                                    onClick={() => {
                                                        !user._id ? handleClickOpenDialog() : handleAddReview()
                                                    }}
                                                    variant="contained" size="medium">
                                                Gửi
                                            </Button>
                                            <ResponsiveDialog
                                                open={openDialog}
                                                handleClose={handleCloseDialog}
                                                title="Thông báo"
                                                content="Vui lòng đăng nhập trước khi bình luận."
                                                actions={
                                                    <>
                                                        <Button onClick={handleCloseDialog} color="secondary">
                                                            Hủy
                                                        </Button>
                                                        <Link to={'/login'}>
                                                            <Button color="primary" autoFocus>
                                                                Đồng ý
                                                            </Button>
                                                        </Link>
                                                    </>
                                                }
                                            />
                                        </Box>
                                    </div>
                                </div>
                            </pdc.Comment>
                        </>) :
                        (<></>)}

                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailCol;

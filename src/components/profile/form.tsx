import React, { useState, FocusEventHandler } from "react";
import moment, { Moment } from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { AvatarCol } from "./profile-components";

export const ProfileForm: React.FC = () => {
    const [birthday, setBirthday] = useState<string | Moment>("");

    return (
        <>
        <AvatarCol style={{padding: "20px" ,border: "2px solid #efefef", borderRadius: "25px"}} className="bg-white shadow-sm mb-4">
            <Card.Body>
                <h5 className="mb-4">Thông tin cá nhân</h5>
                <Form>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="firstName">
                                <Form.Label>Họ</Form.Label>
                                <Form.Control required type="text" placeholder="Họ của bạn" />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="lastName">
                                <Form.Label>Tên</Form.Label>
                                <Form.Control required type="text" placeholder="Tên của bạn" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="birthday">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control required type="date"/>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="gender">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Select defaultValue="0">
                                    <option value="0">Giới tính</option>
                                    <option value="1">Nữ</option>
                                    <option value="2">Name</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="name@company.com" />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control required type="number" placeholder="+12-345 678 910" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <h5 className="my-4">Địa chỉ</h5>
                    <Row>
                        <Col sm={9} className="mb-3">
                            <Form.Group controlId=  "address">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control required type="text" placeholder="Nhập địa chỉ nhà" />
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group controlId="addressNumber">
                                <Form.Label>Số nhà</Form.Label>
                                <Form.Control required type="number" placeholder="vd: 2/11" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className="mb-3">
                            <Form.Group controlId="city">
                                <Form.Label>Quận/ Huyện</Form.Label>
                                <Form.Control required type="text" placeholder="Quận/ Huyện" />
                            </Form.Group>
                        </Col>
                        <Col sm={4} className="mb-3">
                            <Form.Group className="mb-2" controlId="state">
                                <Form.Label>Chọn tỉnh/thành</Form.Label>
                                <Form.Select defaultValue="0">
                                    <option value="0">Select province</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                    <option value="Đà Nẵng">Đà Nẵng</option>
                                    <option value="Hải Phòng">Hải Phòng</option>
                                    <option value="Cần Thơ">Cần Thơ</option>
                                    <option value="An Giang">An Giang</option>
                                    <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                                    <option value="Bắc Giang">Bắc Giang</option>
                                    <option value="Bắc Kạn">Bắc Kạn</option>
                                    <option value="Bạc Liêu">Bạc Liêu</option>
                                    <option value="Bắc Ninh">Bắc Ninh</option>
                                    <option value="Bến Tre">Bến Tre</option>
                                    <option value="Bình Định">Bình Định</option>
                                    <option value="Bình Dương">Bình Dương</option>
                                    <option value="Bình Phước">Bình Phước</option>
                                    <option value="Bình Thuận">Bình Thuận</option>
                                    <option value="Cà Mau">Cà Mau</option>
                                    <option value="Cao Bằng">Cao Bằng</option>
                                    <option value="Đắk Lắk">Đắk Lắk</option>
                                    <option value="Đắk Nông">Đắk Nông</option>
                                    <option value="Điện Biên">Điện Biên</option>
                                    <option value="Đồng Nai">Đồng Nai</option>
                                    <option value="Đồng Tháp">Đồng Tháp</option>
                                    <option value="Gia Lai">Gia Lai</option>
                                    <option value="Hà Giang">Hà Giang</option>
                                    <option value="Hà Nam">Hà Nam</option>
                                    <option value="Hà Tĩnh">Hà Tĩnh</option>
                                    <option value="Hải Dương">Hải Dương</option>
                                    <option value="Hậu Giang">Hậu Giang</option>
                                    <option value="Hòa Bình">Hòa Bình</option>
                                    <option value="Hưng Yên">Hưng Yên</option>
                                    <option value="Khánh Hòa">Khánh Hòa</option>
                                    <option value="Kiên Giang">Kiên Giang</option>
                                    <option value="Kon Tum">Kon Tum</option>
                                    <option value="Lai Châu">Lai Châu</option>
                                    <option value="Lâm Đồng">Lâm Đồng</option>
                                    <option value="Lạng Sơn">Lạng Sơn</option>
                                    <option value="Lào Cai">Lào Cai</option>
                                    <option value="Long An">Long An</option>
                                    <option value="Nam Định">Nam Định</option>
                                    <option value="Nghệ An">Nghệ An</option>
                                    <option value="Ninh Bình">Ninh Bình</option>
                                    <option value="Ninh Thuận">Ninh Thuận</option>
                                    <option value="Phú Thọ">Phú Thọ</option>
                                    <option value="Phú Yên">Phú Yên</option>
                                    <option value="Quảng Bình">Quảng Bình</option>
                                    <option value="Quảng Nam">Quảng Nam</option>
                                    <option value="Quảng Ngãi">Quảng Ngãi</option>
                                    <option value="Quảng Ninh">Quảng Ninh</option>
                                    <option value="Quảng Trị">Quảng Trị</option>
                                    <option value="Sóc Trăng">Sóc Trăng</option>
                                    <option value="Sơn La">Sơn La</option>
                                    <option value="Tây Ninh">Tây Ninh</option>
                                    <option value="Thái Bình">Thái Bình</option>
                                    <option value="Thái Nguyên">Thái Nguyên</option>
                                    <option value="Thanh Hóa">Thanh Hóa</option>
                                    <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                                    <option value="Tiền Giang">Tiền Giang</option>
                                    <option value="Trà Vinh">Trà Vinh</option>
                                    <option value="Tuyên Quang">Tuyên Quang</option>
                                    <option value="Vĩnh Long">Vĩnh Long</option>
                                    <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                                    <option value="Yên Bái">Yên Bái</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group controlId="zip">
                                <Form.Label>Mã Bưu Điện</Form.Label>
                                <Form.Control required type="tel" placeholder="Mã bưu điện tỉnh thành" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Button variant="primary" type="submit">Lưu</Button>
                    </div>
                </Form>
            </Card.Body>
        </AvatarCol>
        </>
    );
};

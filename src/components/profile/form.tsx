import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, Form, Button, Col, Row } from 'react-bootstrap';

interface FormData {
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface ProfileFormProps {
    onSave: (data: FormData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSave }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        birthday: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        street: "",
        city: "",
        state: "",
        zip: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            birthday: "",
            gender: "",
            email: "",
            phone: "",
            address: "",
            street: "",
            city: "",
            state: "",
            zip: ""
        });
    };

    return (
        <Col style={{ padding: "20px", border: "2px solid #efefef", borderRadius: "25px" }} className="bg-white shadow-sm mb-4">
            <Card.Body>
                <h5 className="mb-4">Thông tin cá nhân</h5>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="firstName">
                                <Form.Label>Họ</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Họ của bạn"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="lastName">
                                <Form.Label>Tên</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Tên của bạn"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="birthday">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="gender">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Select
                                    required
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>Chọn giới tính</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Khác">Khác</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="phone">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    required
                                    type="tel"
                                    placeholder="+12-345 678 910"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <h5 className="my-4">Địa chỉ</h5>
                    <Row>
                        <Col sm={6} className="mb-3">
                            <Form.Group controlId="address">
                                <Form.Label>Số nhà</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nhập số nhà"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6} className="mb-3">
                            <Form.Group controlId="street">
                                <Form.Label>Tên đường</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nhập tên đường"
                                    value={formData.street}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className="mb-3">
                            <Form.Group controlId="city">
                                <Form.Label>Quận/ Huyện</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Quận/ Huyện"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4} className="mb-3">
                            <Form.Group controlId="state">
                                <Form.Label>Tỉnh/thành</Form.Label>
                                <Form.Select
                                    required
                                    value={formData.state}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>Chọn tỉnh/thành</option>
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
                                    {/* Add more options as needed */}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col sm={4} className="mb-3">
                            <Form.Group controlId="zip">
                                <Form.Label>Mã Bưu Điện</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Mã bưu điện"
                                    value={formData.zip}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3 d-flex justify-content-between">
                        <Button variant="primary" type="submit">Lưu</Button>
                        <Button variant="secondary" type="button" onClick={handleReset}>Đặt lại</Button>
                    </div>
                </Form>
            </Card.Body>
        </Col>
    );
};

export default ProfileForm;

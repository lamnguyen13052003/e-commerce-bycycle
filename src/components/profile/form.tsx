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

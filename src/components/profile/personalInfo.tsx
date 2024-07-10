import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Card, Col, Form, Modal, Row} from 'react-bootstrap';
import {Stack} from "@mui/material";
import {useForm} from "react-hook-form";
import {ObjectId} from "mongodb";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../configs/store";
import {User} from "../../types/user.type";

type changePasswordForm = {
    _id: ObjectId
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

function ProfileForm() {
    const auth = useSelector((state: RootState) => state.auth);
    const nav = useNavigate();
    useEffect(() => {
        if (!auth.user)
            nav("/login")
    }, [auth]);

    const {register, getValues, handleSubmit, formState: {errors}} = useForm<changePasswordForm>();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [profile, setProfile] = useState<User>({
        fullName: auth.user?.fullName,
        birthday: auth.user?.birthday,
        gender: auth.user?.gender,
        email: auth.user?.email,
        phone: auth.user?.phone,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {id, value} = e.target;
        setProfile({...profile, [id]: value});
    };

    const onSubmitChangePassword = (data: changePasswordForm) => {
        handleClose();
    }

    const getBirthday = () => {
        if (!profile.birthday) return ""
        const date = profile.birthday;
        const month = date.getMonth();
        const day = date.getDate();
        return `${date.getFullYear()}-${month.toString().length == 1 ? "0" + (month + 1) : month + 1}-${day.toString().length == 1 ? "0" + day : day}`;
    }

    return (
        <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
                <h5 className="mb-4">Thông tin cá nhân</h5>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <Row>
                        <Col md={12} className="mb-3">
                            <Form.Group controlId="firstName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control required type="text" placeholder="Họ và tên của bạn"
                                              value={profile.fullName}
                                              onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="birthday">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control required type="date"
                                              value={getBirthday()}
                                              onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="gender">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Select value={profile.gender} onChange={handleChange}>
                                    <option value="">Chọn giới tính</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Nam">Nam</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="text" placeholder="Email của bạn"
                                              value={profile.email}
                                              onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Số điện thọại</Form.Label>
                                <Form.Control required type="text" placeholder="Số điện thọại của bạn"
                                              value={profile.phone}
                                              onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Stack gap={2} direction={"row"}>
                        <Button variant="primary" type="submit">Lưu thay đổi</Button>
                        <Button type={"button"} onClick={handleShow}>Đổi mật khẩu</Button>
                    </Stack>
                </Form>
            </Card.Body>

            <Modal show={show}
                   onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
                   centered={true}
            >
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Đổi mật khẩu</Modal.Title>
                    </Modal.Header>
                    <Form.Control
                        type="hidden"
                        placeholder="Mật khẩu hiện tại"
                        {...register(
                            "_id",
                        )}
                        value={auth.user?._id?.toString()}
                    />
                    <Modal.Body>
                        <Form.Group controlId="currentPassword" className={"position-relative"}>
                            <Form.Label>Mật khẩu hiện tại</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Mật khẩu hiện tại"
                                {...register(
                                    "currentPassword",
                                    {
                                        required: "Vui lòng nhập mật khẩu hiện tại"
                                    }
                                )}
                                isInvalid={!!errors.currentPassword}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.currentPassword?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="newPassword" className={"position-relative"}>
                            <Form.Label>Mật khẩu mới</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Mật khẩu mới"
                                {...register(
                                    "newPassword",
                                    {
                                        required: "Vui lòng nhập mật khẩu mới"
                                    }
                                )}
                                isInvalid={!!errors.newPassword}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.newPassword?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="confirmPassword" className={"position-relative"}>
                            <Form.Label>Xác nhận mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Xác nhận mật khẩu"
                                {...register(
                                    "confirmPassword",
                                    {
                                        required: "Vui lòng nhập lại mật khẩu mới",
                                        validate: value => value === getValues().newPassword || "Mật khẩu không khớp"
                                    }
                                )}
                                isInvalid={!!errors.confirmPassword}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.confirmPassword?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button variant="primary" type={"submit"} onClick={handleSubmit(onSubmitChangePassword)}>
                            Lưu
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Card>
    );
};

export default ProfileForm;

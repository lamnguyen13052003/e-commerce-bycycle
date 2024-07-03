import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import bg from "../../public/background.jpeg"

type contactProps = {
    fullName: string
    email: string
    phoneNumber: string,
    content: string
}


function Contact() {
    const {register, handleSubmit, formState: {errors}} = useForm<contactProps>();
    const onSubmit = (data: contactProps) => {
        console.log(data)
    };

    return (
        <Container className={"my-4"}>
            <h3 className={"ms-1"}>Liên hệ với chúng tôi</h3>

            <Row className={"align-items-center m-0"}>
                <Col md={7}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="position-relative">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={"Nguyễn Văn A"}
                                    {...register("fullName", {
                                        required: 'Họ và tên không được để trống'
                                    })}
                                    isInvalid={!!errors.fullName}
                                />
                                <Form.Control.Feedback type="invalid" tooltip as={"div"}>
                                    {errors.fullName?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="position-relative">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder={"abc@gmail.com"}
                                    {...register("email", {
                                        required: 'Email không được để trống',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "email không hợp lệ!"
                                        }
                                    })}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="position-relative">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={"+8485535*****"}
                                    {...register("phoneNumber", {
                                        required: 'Số điện thoại không được để trống',
                                        pattern: {
                                            value: /^0[0-9]{9}$/,
                                            message: "Số điện thoại không hợp lệ!"
                                        }
                                    })}
                                    isInvalid={!!errors.phoneNumber}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.phoneNumber?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="position-relative">
                                <Form.Label>Nội dung</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Nội dung liên hệ tại đây"
                                    {...register("content", {
                                        required: 'Nội dung không được để trống'
                                    })}
                                    isInvalid={!!errors.content}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.content?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit" className={"bg-primary rounded rounded-2 text-white py-2 px-5"}>
                            Gửi yêu cầu liên hệ
                        </Button>
                    </Form>
                </Col>
                <Col md={5}>
                    <img  className={"w-100 rounded-3"} src={bg} alt={"back ground contact"}/>
                </Col>
            </Row>
        </Container>
    );
}


export default Contact;


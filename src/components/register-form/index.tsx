import React from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/signTitle.slice";
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterRequest} from "../../requests/register.request";
import axios from "axios";
import {toast} from "react-toastify";
import {login, userNameVerify} from "../../slice/auth.slice";

function Register() {
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Đăng ký tài khoản"}));
    const nav = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterRequest>();

    const registerHandle = async (data: RegisterRequest) => {
        return axios.request({
            url: "http://localhost:1305/api/register",
            method: "POST",
            data: data,
        })
    }

    const onSubmit: SubmitHandler<RegisterRequest> = (form) => {
        const promise = registerHandle(form)
        toast.promise(promise, {
            pending: "Promise is pending",
            success: {
                render({data}) {
                    dispatch(login(data.data.data))
                    return data.data.message
                },
                autoClose: 1000,
                onClose: () => {
                    dispatch(userNameVerify(form.username))
                    nav("/verify")
                },
            },
            error: {
                render: ({data}) => {
                    // @ts-ignore
                    const response = data.response.data
                    return `${response.message}`
                }
            }
        });
    }

    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"} action={"http://localhost:1305/api/register"}
              onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="outlined-basic"
                className={"w-100"}
                type={"text"}
                {...register(
                    "fullName",
                    {
                        required: "Tên người dùng không được để trống",
                    }
                )}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                label="Họ và tên" variant="outlined"/>
            <br/>
            <TextField
                {...register(
                    "username",
                    {
                        required: "Tên đăng nhập không được để trống",
                    }
                )}
                id="outlined-basic"
                className={"w-100"}
                type={"string"}
                error={!!errors.username}
                helperText={errors.username?.message}
                label="Tên đăng nhập" variant="outlined"/>
            <br/>
            <TextField
                {...register(
                    "password",
                    {
                        required: "Mật khẩu không được để trống",
                    }
                )}
                id="outlined-basic"
                className={"w-100"}
                type={"password"}
                label="Mật khẩu"
                error={!!errors.password}
                helperText={errors.password?.message}
                variant="outlined"/>
            <br/>
            <TextField
                {...register(
                    "confirmPassword",
                    {
                        required: "Mật khẩu nhật lại không được để trống",
                        validate: (value) => value === "password" || "Mật khẩu không khớp"
                    }
                )}
                id="outlined-basic"
                className={"w-100"}
                type={"Nhập lại mật khẩu"}
                label="Confirm password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                variant="outlined"/>
            <br/>
            <Button className={"w-25"}
                    type={"submit"}
                    variant="contained"
                    color="success">
                Đăng ký
            </Button>
            <Link to={"/login"}
                  className={"text-decoration-none mt-3"}>
                Đã có tài khoản?
            </Link>
        </form>
    );
}

export default Register;
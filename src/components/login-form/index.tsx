import React from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/signTitle.slice";
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form"
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {User} from "../../styles/type";
import {login, userNameVerify} from "../../slice/auth.slice";
import {LoginRequest} from "../../requests/login.request";

function Login() {
    document.title = "Đăng nhập tài khoản"
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Đăng nhập tài khoản"}))
    const nav = useNavigate();

    const loginHandle = async (data: LoginRequest) => {
        return axios.request({
            url: "http://localhost:1305/api/login",
            method: "POST",
            data: data,
        })
    }

    let user: User;

    const {register, handleSubmit, formState: {errors}} = useForm<LoginRequest>()
    const onSubmit: SubmitHandler<LoginRequest> = (form) => {
        const promise = loginHandle(form)
        toast.promise(promise, {
            pending: "Promise is pending",
            success: {
                render({data}) {
                    user = data.data.data;
                    return `Xin chào ${user.fullName}`
                },
                autoClose: 1000,
                onClose: () => {
                    dispatch(login(user))
                    nav("/")
                },
            },
            error: {
                render: ({data}) => {
                    // @ts-ignore
                    const response = data.response.data
                    const code = response.code;
                    if (code == 401) {
                        setTimeout(() => {
                            dispatch(userNameVerify(form.username))
                            nav("/verify")
                        }, 1000);
                    }
                    return `${response.message}`
                }
            }
        });
    }

    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"}
              action={"http://localhost:1305/api/login"}
              onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="outlined-basic"
                className={"w-100"}
                type={"text"}
                {...register(
                    "username",
                    {
                        required: "Tên đăng nhập không được để trống",
                    }
                )}
                error={!!errors.username}
                helperText={errors.username?.message}
                label="Tên đăng nhập"
                variant="outlined"/>
            <br/>
            <TextField
                id="outlined-basic"
                className={"w-100"}
                type={"password"}
                {...register(
                    "password",
                    {
                        required: "Mật khẩu không được để trống",
                    },
                )}
                label={"Mật khẩu"}
                error={!!errors.password}
                helperText={errors.password?.message}
                variant="outlined"/>
            <br/>
            <Button className={"w-25"} type={"submit"} variant="contained" color="success">Đăng
                nhập</Button>
            <Link to={"/forget-password"} className={"text-decoration-none mt-3"}>Quên mật khẩu?</Link>
        </form>
    );
}

export default Login;
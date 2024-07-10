import React from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/signTitle.slice";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

interface IFormForgetPassword {
    username: string
}

function ForgetPassword() {
    document.title = "Quên mật khẩu";
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Quên mật khẩu"}))
    const nav = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<IFormForgetPassword>();

    const onSubmit = (form: IFormForgetPassword) => {
        const promise = async () => {
            return axios.request({
                url: "http://localhost:1305/api/forget-password",
                method: "POST",
                data: form,
            })
        }

        toast.promise(promise, {
            pending: "Promise is pending",
            success: {
                render({data}) {
                    return data.data.message
                },
                autoClose: 1000,
                onClose: () => {
                    nav("/change-password")
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
              method={"POST"}
              onSubmit={handleSubmit(onSubmit)}
        >
            <TextField id="outlined-basic"
                       {...register("username", {
                           required: "Tên đăng nhập không được để trống"
                       })}
                       className={"w-100"} type={"text"} label="Tên đăng nhập"
                       error={!!errors.username}
                       helperText={errors.username?.message}
                       variant="outlined"/>
            <br/>
            <Button style={{
                width: "30%"
            }} type={"submit"} variant="contained" color="success">Tìm kiếm tài khoản</Button>
        </form>
    );
}

export default ForgetPassword;
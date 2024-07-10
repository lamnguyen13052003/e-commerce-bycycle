import React from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/signTitle.slice";
import {useForm} from "react-hook-form";
import {ChangePasswordRequest} from "../../requests/changePassword.request";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function ChangePassword() {
    document.title = "Đổi mật khẩu";
    const dispatch = useDispatch();
    const nav = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<ChangePasswordRequest>();

    const onSubmit = (form: ChangePasswordRequest) => {
        const promise = async () => {
            return axios.request({
                url: "http://localhost:1305/api/change-password",
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
                    nav("/login")
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

    dispatch(setTitle({title: "Đổi mật khẩu"}));
    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"} action={"/reset-password"}
              onSubmit={handleSubmit(onSubmit)}
        >
            <TextField id="outlined-basic" className={"w-100"} type={"password"}
                       label="Mật khẩu"
                       {...register("password",
                           {required: "Mật khẩu không được để trống"}
                       )}
                       error={!!errors.password}
                       helperText={errors.password?.message}
                       variant="outlined"/>
            <br/>
            <TextField id="outlined-basic" className={"w-100"}
                       type={"password"}
                       {...register("confirmPassword",
                           {
                               required: "Mật khẩu không được để trống",
                               validate: (value) => value === "password" || "Mật khẩu không khớp"
                           }
                       )}
                       error={!!errors.confirmPassword}
                       helperText={errors.confirmPassword?.message}
                       label="Nhập lại mật khẩu"
                       variant="outlined"/>
            <br/>
            <Button className={"w-25"} type={"submit"} variant="contained" color="success">Xác nhận</Button>
        </form>
    );
}

export default ChangePassword;
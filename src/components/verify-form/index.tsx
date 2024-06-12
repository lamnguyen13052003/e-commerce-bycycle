import React from 'react';
import {Button, Stack, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setTitle} from "../../slice/signTitle.slice";
import {useForm} from "react-hook-form";
import {VerifyRequest} from "../../requests/verify.request";
import {LoginRequest} from "../../requests/login.request";
import axios from "axios";
import {toast} from "react-toastify";
import {login, verify} from "../../slice/auth.slice";
import {useNavigate} from "react-router-dom";

interface inputCode {
    "field_1": number,
    "field_2": number,
    "field_3": number,
    "field_4": number,
    "field_5": number,
    "field_6": number,
}

function Verify() {
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Xác thực tài khoản"}));
    const auth = useSelector((state: any) => state.auth)
    const nav = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<inputCode>();

    const verifyHandle = async (data: VerifyRequest) => {
        return axios.request({
            url: "http://localhost:1305/api/verify",
            method: "POST",
            data: data,
        })
    }

    const renderInput = () => {
        const input: any[] = []
        for (let i = 0; i < 6; i++) {
            const name = `field_${i + 1}`

            input.push(
                <TextField
                    id="outlined-basic"
                    type={"text"}
                    label="*"
                    style={{
                        width: "50px",
                    }}
                    // @ts-ignore
                    {...register(name,
                        {required: "Vui lòng nhập mã xác thực"})
                    }
                    // @ts-ignore
                    error={!!errors[name]}
                    // @ts-ignore
                    helperText={errors[name]?.message}
                    autoComplete={"off"}
                    variant="outlined"/>);
        }

        return input
    }

    const onSubmit = (inputCode: inputCode) => {
        const verifyRequest: VerifyRequest = {
            username: auth.usernameVerify,
            verifyCode: Object.values(inputCode).join("")
        }

        const promise = verifyHandle(verifyRequest)
        toast.promise(promise, {
            pending: "Promise is pending",
            success: {
                render({data}) {
                    return data.data.message
                },
                autoClose: 1000,
                onClose: () => {
                    dispatch(verify())
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

    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"}
              onSubmit={handleSubmit(onSubmit)}
        >
            <TextField hidden={true} name={"email"} id="outlined-basic" type={"email"}/>
            <Stack direction={"row"} gap={1}>
                {renderInput()}
            </Stack>
            <br/>
            <Button className={"w-25"} type={"submit"} variant="contained" color="success">Xác
                thực</Button>
        </form>
    );
}

export default Verify;
import React from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/SignTitleSlice";

function ForgetPassword() {
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Quên mật khẩu"}))

    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"} action={"/forget-password"}
        >
            <TextField required={true} id="outlined-basic" className={"w-100"} type={"email"} label="Email"
                       variant="outlined"/>
            <br/>
            <Button style={{
                width: "30%"
            }} type={"submit"} variant="contained" color="success">Tìm kiếm tài khoản</Button>
        </form>
    );
}

export default ForgetPassword;
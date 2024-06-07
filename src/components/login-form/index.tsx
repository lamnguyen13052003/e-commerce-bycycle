import React from 'react';
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/SignTitleSlice";
import {Link} from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Đăng nhập tài khoản"}))
    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"} action={"/login"}
        >
            <TextField required={true} name={"email"} id="outlined-basic" className={"w-100"} type={"email"}
                       label="Email" variant="outlined"/>
            <br/>
            <TextField required={true} name={"password"} id="outlined-basic" className={"w-100"} type={"password"}
                       label="Password"
                       variant="outlined"/>
            <Box className={"w-100"}>
                <FormControlLabel label="Remember me" control={
                    <Checkbox color="success"/>
                }/>
            </Box>
            <Button className={"w-25"} type={"submit"} variant="contained" color="success">Đăng nhập</Button>
            <Link to={"/forget-password"} className={"text-decoration-none mt-3"}>Quên mật khẩu?</Link>
        </form>
    );
}

export default Login;
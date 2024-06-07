import React from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/SignTitleSlice";
import {Link} from "react-router-dom";

function Register() {
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Đăng ký tài khoản"}));
    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"} action={"/register"}
        >
            <TextField required={true} name={"email"} id="outlined-basic" className={"w-100"} type={"email"}
                       label="Email" variant="outlined"/>
            <br/>
            <TextField required={true} name={"password"} id="outlined-basic" className={"w-100"} type={"password"}
                       label="Password"
                       variant="outlined"/>
            <br/>
            <TextField required={true} name={"re-password"} id="outlined-basic" className={"w-100"} type={"password"}
                       label="Confirm password"
                       variant="outlined"/>
            <br/>
            <Button className={"w-25"} type={"submit"} variant="contained" color="success">Đăng ký</Button>
            <Link to={"/login"} className={"text-decoration-none mt-3"}>Đã có tài khoản?</Link>
        </form>
    );
}

export default Register;
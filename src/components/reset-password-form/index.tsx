import React from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/SignTitleSlice";
import {Link} from "react-router-dom";

function ResetPassword() {
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Mật khẩu mới"}));
    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"} action={"/reset-password"}
        >
            <TextField required={true} name={"password"} id="outlined-basic" className={"w-100"} type={"password"}
                       label="Password"
                       variant="outlined"/>
            <br/>
            <TextField required={true} name={"re-password"} id="outlined-basic" className={"w-100"} type={"password"}
                       label="Confirm password"
                       variant="outlined"/>
            <br/>
            <Button className={"w-25"} type={"submit"} variant="contained" color="success">Xác nhận</Button>
        </form>
    );
}

export default ResetPassword;
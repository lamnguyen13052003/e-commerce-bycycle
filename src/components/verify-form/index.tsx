import React, {useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setTitle} from "../../slice/SignTitleSlice";

interface focusState {
    1: boolean,
    2: boolean,
    3: boolean,
    4: boolean,
    5: boolean,
    6: boolean,
}

function Verify() {
    const dispatch = useDispatch();
    dispatch(setTitle({title: "Xác thực tài khoản"}));
    const [status, setState] = useState<focusState>({
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
    })

    const nexFocus = (index: keyof focusState) => {
        setState(prevState => {
            const newState = {...prevState};
            newState[index] = false;
            if (index < 6) {
                const nextIndex = (1 + parseInt(index.toString())) as keyof focusState;
                newState[nextIndex] = true;
            }
            console.log(newState)
            return newState;
        })
    }

    const prevFocus = (index: keyof focusState) => {
        setState(prevState => {
            const newState = {...prevState};
            newState[index] = false;
            if (index > 1) {
                const nextIndex = (parseInt(index.toString()) - 1) as keyof focusState;
                newState[nextIndex] = true;
            }
            return newState;
        })
    }

    const keyDownHandler = (e: React.KeyboardEvent, index: keyof focusState) => {
        let keyCode = e.keyCode;
        if (keyCode >= 60 && keyCode <= 90) {
            // if (e.target. > 1)
            //     e.preventDefault();
            nexFocus(index)
        }
        if (keyCode == 8)
            prevFocus(index)
    }

    return (
        <form className={"p-3 d-flex flex-column w-100 align-items-center"}
              method={"POST"} action={"/reset-password"}
        >
            <TextField hidden={true} name={"email"} id="outlined-basic" type={"email"}/>
            <Stack direction={"row"} gap={1}>
                <TextField name={"1"} id="outlined-basic" type={"text"}
                           label="*"
                           style={{
                               width: "50px",
                           }}
                           onKeyDown={(e) => keyDownHandler(e, 1)}
                           focused={status["1"]}
                           variant="outlined"/>
                <TextField name={"2"} id="outlined-basic" type={"text"}
                           label="*"
                           style={{
                               width: "50px",
                           }}
                           onKeyDown={(e) => keyDownHandler(e, 2)}
                           focused={status["2"]}
                           variant="outlined"/>
                <TextField name={"3"} id="outlined-basic" type={"text"}
                           label="*"
                           style={{
                               width: "50px",
                           }}
                           focused={status["3"]}
                           onKeyDown={(e) => keyDownHandler(e, 3)}
                           variant="outlined"/>
                <TextField name={"4"} id="outlined-basic" type={"text"}
                           label="*"
                           style={{
                               width: "50px",
                           }}
                           focused={status["4"]}
                           onKeyDown={(e) => keyDownHandler(e, 4)}
                           variant="outlined"/>
                <TextField name={"5"} id="outlined-basic" type={"text"}
                           label="*"
                           style={{
                               width: "50px",
                           }}
                           focused={status["5"]}
                           onKeyDown={(e) => keyDownHandler(e, 5)}
                           variant="outlined"/>
                <TextField name={"6"} id="outlined-basic" type={"text"}
                           label="*"
                           style={{
                               width: "50px",
                           }}
                           onKeyDown={(e) => keyDownHandler(e, 6)}
                           focused={status["6"]}
                           variant="outlined"/>
            </Stack>
            <br/>
            <Button className={"w-25"} type={"submit"} variant="contained" color="success">Xác
                thực</Button>
        </form>
    );
}

export default Verify;
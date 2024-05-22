import React from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import {Search} from "@mui/icons-material";
import {Avatar, Badge, Box, Button, Divider} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './scss/Header.module.css';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import Menu from "../menu";


function Header() {
    return (
        <>
            <Box className={`container py-2 d-flex gap-5 align-items-center justify-content-around`}>
                <Box>
                    <Link to={"/"} className={`${styles.clear_a}`}>
                        <Box className={`justify-content-center d-flex flex-column align-items-center`}>
                            <Avatar alt="Logo" src={logo} sx={{
                                width: 50,
                                height: 50,
                            }}/>
                            <h4>XE ĐẠP KIMI</h4>
                        </Box>
                    </Link>
                    <Menu/>
                </Box>
                <InputGroup className="w-50">
                    <Form.Control id={"search-bar"} type="text" placeholder={""}
                                  className={`${styles.input_focus} ${styles.input}`}/>
                    <label className={"input-group-text"} htmlFor={"search-bar"} style={{
                        borderRadius: "0 50px 50px 0",
                    }}><Search/></label>
                </InputGroup>
                <Button sx={{
                    border: '1px green solid',
                    px: "20px",
                    py: "15px"
                }}>
                    <span>Giỏ hàng</span>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon color="info"/>
                    </Badge>
                </Button>
            </Box>
            <Divider sx={{bgcolor: 'black', height: 2}}/>
        </>
    );
}

export default Header;
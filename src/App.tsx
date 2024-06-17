import React, {useEffect} from 'react';
import './styles/App.css';
import {Route, Routes} from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Sign from "./pages/Sign";
import Login from "./components/login-form";
import Register from "./components/register-form";
import ForgetPassword from "./components/forget-password-form";
import ChangePassword from "./components/reset-password-form";
import Verify from "./components/verify-form";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route element={<Sign/>}>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/forget-password"} element={<ForgetPassword/>}/>
                    <Route path={"/change-password"} element={<ChangePassword/>}/>
                    <Route path={"/verify"} element={<Verify/>}/>
                </Route>
                <Route path={"/category/:category/page=:page"} element={<Products />}/>
            </Route>
        </Routes>
    );
}

export default App;

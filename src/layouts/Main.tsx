import React from 'react';
import Header from "../components/header";
import {Outlet} from "react-router";
import Footer from "../components/footer";
import {ToastContainer} from "react-toastify";

function Main() {
    return (
        <>
            <ToastContainer/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Main;
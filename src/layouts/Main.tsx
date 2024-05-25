import React from 'react';
import Header from "../components/header";
import {Outlet} from "react-router";
import Footer from "../components/footer";

function Main() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Main;
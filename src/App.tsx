import React from 'react';
import './styles/App.css';
import {Route, Routes} from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";
import Cart from "./pages/Cart";
import Products from "./pages/Products";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/xe-dap-dua"} element={<Products/>} />
            </Route>
        </Routes>
    );
}

export default App;

import React from 'react';
import './styles/App.css';
import {Route, Routes} from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";
import Cart from "./pages/Cart";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
            </Route>
        </Routes>
    );
}

export default App;

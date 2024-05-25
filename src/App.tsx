import React from 'react';
import './styles/App.css';
import {Route, Routes} from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;

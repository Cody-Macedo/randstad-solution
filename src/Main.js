import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "./App";
import Test from "./Test";
import Home from "./Home";
import AppMobile from "./app/AppMobile";
import Terminal from "./terminal-screen/Terminal";

const Main = () => {
    return (
        <Routes>
            <Route path="test" element={<Test/>}/>
            <Route path="app" element={<AppMobile/>}/>
            <Route path="terminal" element={<Terminal/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
};

export default Main;

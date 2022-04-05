import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "./App";
import Test from "./Test";
import Home from "./Home";

const Main = () => {
    return (
        <Routes>
            <Route path="test" element={<Test/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
};

export default Main;

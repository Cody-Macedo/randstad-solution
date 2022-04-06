import React from 'react';
import Card from "./Card";
import {Route, Routes} from "react-router-dom";
import HomeApp from "./HomeApp";
import Test from "../Test";

const MainApp = () => {
    return (
        <Routes>
            <Route path="app/home" element={<HomeApp />}/>
            <Route path="homeapp" element={<Test />}/>
        </Routes>
    );
};

export default MainApp;

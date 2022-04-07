import React from 'react';
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";
import MainApp from "./MainApp";
import {Route, Routes} from "react-router-dom";
import Test from "../Test";
import Terminal from "../terminal-screen/Terminal";
import Home from "../Home";

const AppMobile = () => {
    return (
        <div className="all-app">
            <MainApp/>
            <BottomNav/>
        </div>
    );
};

export default AppMobile;

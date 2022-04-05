import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/variables.css";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/tailwind.css";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/orbit-randstad.css";
import Footer from "./Footer";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

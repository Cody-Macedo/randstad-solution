import './App.scss';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Main from "./Main";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/variables.css";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/tailwind.css";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/orbit-randstad.css";


function App() {
    return (
        <BrowserRouter>

            <Main/>

        </BrowserRouter>
    );
}

export default App;

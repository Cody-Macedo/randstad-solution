import React from 'react';
import Card from "./Card";
import {Route, Routes} from "react-router-dom";
import HomeApp from "./HomeApp";
import Test from "../Test";
import OfferApp from "./OfferApp";
import OfferSelected from "./OfferSelected";
import OfferSuggestion from "./OfferSuggestion";

const MainApp = () => {
    return (
        <Routes>
            <Route path="offer" element={<OfferApp />}/>
            <Route path="offer_selected" element={<OfferSelected />}/>
            <Route path="offer_suggestion" element={<OfferSuggestion />}/>
            <Route path="/" element={<HomeApp />}/>
        </Routes>
    );
};

export default MainApp;

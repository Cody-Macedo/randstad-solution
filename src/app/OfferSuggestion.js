import React from 'react';
import TopBarOffer from "./TopBarOffer";
import TopBarOption from "./TopBarOption";
import Card from "./Card";
import CardSuggestion from "./CardSuggestion";

const OfferSuggestion = () => {
    return (
        <div>
            <TopBarOption/>
            <div className="container">
                <CardSuggestion/>
                <CardSuggestion/>

            </div>

        </div>
    );
};

export default OfferSuggestion;

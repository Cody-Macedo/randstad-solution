import React from 'react';
import TopBarOffer from "./TopBarOffer";
import TopBarOption from "./TopBarOption";
import Card from "./Card";
import CardSuggestion from "./CardSuggestion";
import CardSuggestionShort from "./CardSuggestionShort";
import compatible85 from "../assets/svg/compatible85.svg"
import nalia from "../assets/svg/suggestion/nalia.svg"
import luko from "../assets/svg/suggestion/luko.svg"
import care from "../assets/svg/suggestion/900care.svg"
import TopBarOptionPostuler from "./TopBarOptionPostuler";

const OfferSuggestion = () => {
    return (
        <div>
            <TopBarOption/>
            <div className="container">
                <CardSuggestion/>
                <CardSuggestionShort compatibility={compatible85} img={luko}/>
                <CardSuggestionShort compatibility={compatible85} img={nalia}/>
                <CardSuggestionShort compatibility={compatible85} img={care}/>
                <CardSuggestionShort compatibility={compatible85} img={nalia}/>

            </div>

        </div>
    );
};

export default OfferSuggestion;

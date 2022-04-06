import React from 'react';
import TopBarOffer from "./TopBarOffer";
import CardPresentation from "./CardPresentation";

const OfferSelected = () => {
    return (
        <div>
            <TopBarOffer/>
            <div className="container">
                <div className="section-presentation">
                    <CardPresentation/>
                    <CardPresentation/>
                    <CardPresentation/>
                    <CardPresentation/>
                </div>
            </div>
        </div>
    );
};

export default OfferSelected;

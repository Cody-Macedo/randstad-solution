import React from 'react';
import TopBarOffer from "./TopBarOffer";
import CardPresentation from "./CardPresentation";
import TopBarOptionPostuler from "./TopBarOptionPostuler";

const OfferSelected = () => {
    return (
        <div>
            <TopBarOffer/>
            <div className="container">
                <div className="section-presentation">
                    <CardPresentation/>
                </div>
            </div>
        </div>
    );
};

export default OfferSelected;

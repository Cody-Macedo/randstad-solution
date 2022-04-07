import React from 'react';
import {Link} from "react-router-dom";
import bgImg from "../assets/img/preview_offer.png"

const Card = () => {
    return (
        <Link to="/app/offer_selected">
            <div className="card-suggestion">
                <h4> Card Title</h4>
                <div className="card-content">
                    <img src={bgImg}/>
                </div>
            </div>
        </Link>
    );
};

export default Card;

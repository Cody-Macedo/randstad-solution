import React from 'react';
import {Link} from "react-router-dom";
import bgImg from "../assets/img/preview_offer.png"
import yuka from "../assets/svg/suggestion/yuka.svg"
import compatible from "../assets/svg/compatible95.svg"
import linkHeart from "../assets/svg/link-heart.svg"

const Card = () => {
    return (
        <Link to="/app/offer_selected">
            <div className="card-suggestion">
                <div className="card-header">
                    <img src={bgImg} alt="bg"/>
                    <img className="top-img" src={yuka} alt="bg"/>
                </div>
                <div className="action-card">
                    <img src={compatible} alt="bg"/>
                    <img src={linkHeart} alt="bg"/>
                </div>
                <h4> UX/UI Designer </h4>
                <p> Yuka | CDI | Paris (75009), remote </p>
                <p> friendly | 35 000 - 40 000€/an </p>
                <p> Publiée il y a 7 heures </p>

            </div>
        </Link>
    );
};

export default Card;

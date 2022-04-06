import React from 'react';
import {Link} from "react-router-dom";

const Card = () => {
    return (
        <Link to="/app/offer_selected">
            <div className="card">
                <h4> Card Title</h4>
                <div className="card-content">
                    eee
                </div>
            </div>
        </Link>
    );
};

export default Card;

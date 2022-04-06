import React from 'react';
import octopus from "../assets/svg/ely/ely-octopus.svg";
import bell from "../assets/svg/default/bell-white.svg";
import infoimg from "../assets/img/topimage-offer.png";

const TopBarOffer = () => {
    return (
        <div className="topbar-offer">
            <div className="topbar">
                <img src={octopus} alt="octopus" width="50" height="50"/>
                <img className="notification" src={bell} alt="bell" width="22" height="22"/>
            </div>
            <div className="topbar-info">
                <img src={infoimg} alt="topinfo" width="50" height="50"/>
                <h2>Random Task</h2>
                <h4>motion designer</h4>
                <div className="bottom-info">
                    <p> Multimédia </p>
                    <p> Paris </p>
                    <p> Interim </p>
                </div>
            </div>
        </div>
    );
};

export default TopBarOffer;

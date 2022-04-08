import React from 'react';
import octopus from "../assets/svg/ely/ely-octopus.svg";
import bell from "../assets/svg/default/bell-white.svg";
import infoimg from "../assets/img/topimage-offer.png";
import nalia from "../assets/svg/suggestion/nalia.svg"
import TopBarOptionPostuler from "./TopBarOptionPostuler";

const TopBarOffer = () => {
    return (
        <div className="topbar-offer">
            <div className="topbar">
                <img src={octopus} alt="octopus" width="50" height="50"/>
                <img className="notification" src={bell} alt="bell" width="22" height="22"/>
            </div>
            <div className="topbar-info">
                <img src={nalia} alt="topinfo" width="50" height="50"/>
                <h2>Nalia</h2>
                <h4>UX/UI Designer</h4>
                <div className="bottom-info">
                    <p> Multimédia </p>
                    <p> Paris </p>
                    <p> Interim </p>
                </div>
            </div>
            <TopBarOptionPostuler/>
        </div>
    );
};

export default TopBarOffer;

import React from 'react';
import octopus from "../assets/svg/ely/ely-octopus.svg";
import bell from "../assets/svg/default/bell.svg";

const TopBar = () => {
    return (
        <div className="topbar">
            <img src={octopus} alt="octopus"/>
            <h1>Bonjour Reem!</h1>
            <img className="notification" src={bell} alt="bell" width="22" height="22"/>
        </div>
    );
};

export default TopBar;

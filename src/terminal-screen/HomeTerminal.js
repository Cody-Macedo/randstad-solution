import React from 'react';
import allAvataer from '../assets/svg/ely/all-avatar.svg'
import logo from '../assets/svg/logo-randstad.svg'

const HomeTerminal = ({handleNextStep}) => {

    return (
        <div className="home-terminal" onClick={() => handleNextStep()}>
            <img src={logo} alt="logo" width="168"/>
            <img src={allAvataer} alt="allavatar" width="300"/>
            <h2> phrase d'accroche Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</h2>
        </div>
    );
};

export default HomeTerminal;

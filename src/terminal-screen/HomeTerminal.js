import React from 'react';
import allAvataer from '../assets/svg/ely/all-avatar.svg'
import logo from '../assets/svg/logo.svg'

const HomeTerminal = ({handleNextStep}) => {

    return (
        <div className="home-terminal" onClick={() => handleNextStep()}>
            <div className="logo-top"><img src={logo} alt="logo" width="168"/> <span>ely</span></div>
            <img src={allAvataer} alt="allavatar" width="340"/>
            <h2> phrase d'accroche Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit.</h2>
        </div>
    );
};

export default HomeTerminal;

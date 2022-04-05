import React from 'react';
import {Link} from "react-router-dom";
import logo from "./assets/svg/logo.svg"
import Navigation from "./Navigation";


// <div>
//     <Link to="/"><img src={logo}/></Link>
//     <Link to="/test">Test</Link>
// </div>

const Header = () => {
    return (

        <header className="header bg-variant-brand-primary">
            <div className="platform-placeholder platform-placeholder--navigation text--alternative">

                <Navigation/>

            </div>
            <div className="wrapper flex items-center relative overflow-hidden">
                <div className="header__text-container content-block">
                    <div className="col-span-6">
                        <h1 className="content-block__title mb-xs">leave your details</h1>
                    </div>
                    <div className="col-span-6 col-start-2">
                        <h2 className="content-block__title">and we'll get right back</h2>
                    </div>
                    <div className="l:col-span-6 col-span-7">
                        <p className="content-block__description">Randstad knows the importance of recruiting talent
                            across specialist categories as well as the strengths afforded by stability and
                            structure.</p>
                        <a href="#" className="button">contact us</a>
                    </div>
                </div>
                <div className="header__media-container">
                    {/*<img src="human-forward/assets/image/components/headers/HandMoney/yellow-hand-header.png" alt="">*/}
                </div>
            </div>
        </header>

);
};

export default Header;

import React from 'react';
import search from "../assets/svg/default/search.svg"
import home from "../assets/svg/default/home.svg"
import account from "../assets/svg/default/account-circle.svg"
import briefcase from "../assets/svg/default/briefcase.svg"
import ButtonBottomNav from "./ButtonBottomNav";
import {Link} from "react-router-dom";

const BottomNav = () => {
    const handleSelect = (id) => {

    }
    return (
        <div className="bottom-nav">
            <Link to="/app">  <ButtonBottomNav img={home} title={"accueil"}/></Link>


            <Link to="/app/offer"> <ButtonBottomNav img={search} title={"offre"}/></Link>
            <ButtonBottomNav img={account} title={"carrière"}/>
            <ButtonBottomNav img={briefcase} title={"profil"}/>
        </div>
    );
};

export default BottomNav;

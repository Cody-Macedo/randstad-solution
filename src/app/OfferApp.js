import React from 'react';
import Card from "./Card";
import chevronRight from "../assets/svg/default/chevron-right.svg"
import Section from "./Section";
import TopBar from "./TopBar";

const HomeApp = () => {
    return (
        <div>
            <div className="container">
                <TopBar/>
                <div className="main-app">
                    <Card/>
                    <Card/>
                    <Section/>
                    <Section/>
                    <Section/>
                </div>
            </div>
        </div>
    );
};

export default HomeApp;

import React from 'react';
import Card from "./Card";
import TopBar from "./TopBar";

const HomeApp = () => {
    return (
        <div>
            <div className="container">
                <TopBar/>
                <div className="main-app">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default HomeApp;

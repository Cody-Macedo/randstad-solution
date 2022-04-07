import React from 'react';
import CardButton from "./CardButton";
import firstStep from '../assets/svg/first-step.svg'

const FirstStep = ({handleNextStep, handlePreviousStep}) => {
    return (
        <div className="container step">
            <img src={firstStep} alt="First step"/>
            <h2>Quel genre de contrat recherche-tu?</h2>
            <div className="container-choice">
                <CardButton handleNextStep={handleNextStep}/>
                <CardButton handleNextStep={handleNextStep}/>
                <CardButton handleNextStep={handleNextStep}/>
                <CardButton handleNextStep={handleNextStep}/>
            </div>
            <p onClick={() => handlePreviousStep()}>précédent</p>

        </div>
    );
};

export default FirstStep;

import React from 'react';
import lastStep from "../assets/svg/last-step.svg";
import qrcode from "../assets/svg/qrcode.svg";
import octupusSmile from "../assets/svg/ely/ely-octopus-smile.svg";

const LastStep = ({handleNextStep,handlePreviousStep}) => {
    return (
        <div>
            <div>
                <div className="container step">
                    <img className="center-image" src={lastStep} alt="last step"/>
                    <h2>Télécharge Randstad Ely puis scan ce QR Code pour découvrir ta sélection personnalisée !</h2>
                    <div className="container-choice">
                        <img className="center-image" src={qrcode} alt="qrcode" width="300"/>
                    </div>
                    <div className="bubble-info card">
                        <p>Retrouve moi vite!</p>
                        <img className="bubble-illustration" src={octupusSmile} alt="octopus" />
                    </div>
                    <span onClick={() => handlePreviousStep()}>précédent</span>
                </div>
            </div>
        </div>
    );
};

export default LastStep;

import React from 'react';
import avatar from '../assets/svg/ely/ely-octopus.svg'

const CardButton = ({handleNextStep, jobType, imgPath}) => {
    console.log(imgPath);
    return (
        <div className="card-button" onClick={() => handleNextStep()}>
            <img src={imgPath} width={400} />
            <p> {jobType} </p>
        </div>
    );
};

export default CardButton;

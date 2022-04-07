import React from 'react';

const CardButton = ({handleNextStep}) => {
    return (
        <div className="card-button" onClick={() => handleNextStep()}>
            test
        </div>
    );
};

export default CardButton;

import React from 'react';

const FourthStep = ({handleNextStep,handlePreviousStep}) => {
    return (
        <div>
            fourth
            <button onClick={() => handleNextStep()}> next</button>
            <button onClick={() => handlePreviousStep()}> previous</button>
        </div>
    );
};

export default FourthStep;

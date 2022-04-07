import React from 'react';

const ThirdStep = ({handleNextStep,handlePreviousStep}) => {
    return (
        <div>
            third
            <button onClick={() => handleNextStep()}> next</button>
            <button onClick={() => handlePreviousStep()}> previous</button>
        </div>
    );
};

export default ThirdStep;

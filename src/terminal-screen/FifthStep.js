import React from 'react';

const FifthStep = ({handleNextStep,handlePreviousStep}) => {
    return (
        <div>
            fifth
            <button onClick={() => handleNextStep()}> next</button>
            <button onClick={() => handlePreviousStep()}> previous</button>
        </div>
    );
};

export default FifthStep;

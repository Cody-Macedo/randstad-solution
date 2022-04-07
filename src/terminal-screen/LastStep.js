import React from 'react';

const LastStep = ({handleNextStep,handlePreviousStep}) => {
    return (
        <div>
            <p> last step </p>
            <button onClick={() => handleNextStep()}> next</button>
            <button onClick={() => handlePreviousStep()}> previous</button>
        </div>
    );
};

export default LastStep;

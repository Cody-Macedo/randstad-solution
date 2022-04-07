import React, {useEffect, useState} from 'react';
import Question from "./Question";
import HomeTerminal from "./HomeTerminal";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import LastStep from "./LastStep";

const Terminal = () => {

    let [step, setStep] = useState(1)
    const nextStep = () => {
        // step = step + 1
        console.log(step)
        if (step > 7) {
            setStep(1)
        } else {
            setStep(step + 1)
        }
    }

    const previousStep = () => {
        console.log(step)
        if (step < 1) {
            setStep(1)
        } else {
            setStep(step - 1)
        }
    }

    function SwitchCase() {
        switch (step) {
            case 1:
                return <HomeTerminal handleNextStep={nextStep}/>
            case 2:
                return <FirstStep handleNextStep={nextStep} handlePreviousStep={previousStep}/>
            case 3:
                return <SecondStep handleNextStep={nextStep} handlePreviousStep={previousStep}/>
            case 4:
                return <ThirdStep handleNextStep={nextStep} handlePreviousStep={previousStep}/>
            case 5:
                return <FourthStep handleNextStep={nextStep} handlePreviousStep={previousStep}/>
            case 6:
                return <FifthStep handleNextStep={nextStep} handlePreviousStep={previousStep}/>
            case 7:
                return <LastStep handleNextStep={nextStep} handlePreviousStep={previousStep}/>
            default:
                return <HomeTerminal handleNextStep={nextStep}/>
        }
    }

    return (
        <div className="terminal">
            <SwitchCase/>
        </div>
    );
};

export default Terminal;

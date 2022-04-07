import React, {useEffect, useState} from 'react';
import Question from "./Question";
import secondStep from "../assets/svg/second-step.svg";
import octopusSkew from "../assets/svg/ely/ely-octopus-skew.svg";
import CardButton from "./CardButton";

const SecondStep = ({handleNextStep, handlePreviousStep}) => {

    const [jobValues, setJobValues] = useState([])

    useEffect(() => {

        const fetchTodos = async () => {
            const res = await fetch('http://localhost:3004/job_value')
            const data = await res.json()

            // console.log(data)
            setJobValues(data)
        }

        fetchTodos()

    }, [])

    const handleAnswer = (txt) => {
        console.log(txt);
    }


    return (
        // <div>
        //     <div className="block">
        //         <div className="block__wrapper wrapper">
        //             <div className="block__content">
        //                 <div className="form-group form-group--selection-control">
        //                     {questions.map((question) => <Question key={question.id} answerDone={handleAnswer} title={question.title}
        //                                                            answers={question.answers}/>)}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //
        // </div>
        <div className="container step">
            <img className="center-image" src={secondStep} alt="First step"/>
            <h2>Quelles devraient être les valeurs de ta prochaine entreprise ?</h2>
            <div className="container-choice grid-3">
                {jobValues.map((jobValue) => <CardButton key={jobValue.id} handleNextStep={handleNextStep}
                                                         jobType={jobValue.title} imgPath={jobValue.img}/>)}
            </div>
            <div className="bubble-info card">
                <p>Il me tient à coeur de te proposer un environnement dans lequel tu pourras t’épanouir </p>
                <img className="bubble-illustration" src={octopusSkew} alt="octopus"/>
            </div>
            <span onClick={() => handlePreviousStep()}>précédent</span>
        </div>
    );
};

export default SecondStep;

import React, {useEffect, useState} from 'react';
import CardButton from "./CardButton";
import firstStep from '../assets/svg/first-step.svg'
import Question from "./Question";

const FirstStep = ({handleNextStep, handlePreviousStep}) => {

    const [jobTypes, setJobTypes] = useState([])

    useEffect(() => {

        const fetchTodos = async () => {
            const res = await fetch('http://localhost:3004/job_type')
            const data = await res.json()
            console.log(data)
            setJobTypes(data)
        }

        fetchTodos()

    }, [])

    return (
        <div className="container step">
            <img className="center-image" src={firstStep} alt="First step"/>
            <h2>Quel genre de contrat recherche-tu?</h2>
            <div className="container-choice grid-2">
                {jobTypes.map((jobType) => <CardButton key={jobType.id} handleNextStep={handleNextStep}
                                                       jobType={jobType.title} imgPath={jobType.img}/>)}
            </div>
            <span onClick={() => handlePreviousStep()}>précédent</span>
        </div>
    );
};

export default FirstStep;

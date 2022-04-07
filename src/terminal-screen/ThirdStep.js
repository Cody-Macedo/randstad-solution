import React, {useEffect, useState} from 'react';
import thirdStep from "../assets/svg/third-step.svg";
import CardButton from "./CardButton";
import octopusSkew from "../assets/svg/ely/ely-octopus-skew.svg";

const ThirdStep = ({handleNextStep,handlePreviousStep}) => {

    const [jobRythmes, setJobRythmes] = useState([])

    useEffect(() => {

        const fetchTodos = async () => {
            const res = await fetch('http://localhost:3004/job_rythme')
            const data = await res.json()

            // console.log(data)
            setJobRythmes(data)
        }

        fetchTodos()

    }, [])

    const handleAnswer = (txt) => {
        console.log(txt);
    }

    return (
        <div>
            <div className="container step">
                <img className="center-image" src={thirdStep} alt="First step"/>
                <h2>Et ton rythme de travail dans tout ça ?</h2>
                <div className="container-choice grid-3">
                    {jobRythmes.map((jobRythme) => <CardButton key={jobRythme.id} handleNextStep={handleNextStep}
                                                             jobType={jobRythme.title} imgPath={jobRythme.img}/>)}
                </div>
                <div className="bubble-info card">
                    <p>Il me tient à coeur de te proposer un environnement dans lequel tu pourras t’épanouir </p>
                    <img className="bubble-illustration" src={octopusSkew} alt="octopus"/>
                </div>
                <span onClick={() => handlePreviousStep()}>précédent</span>
            </div>
        </div>
    );
};

export default ThirdStep;

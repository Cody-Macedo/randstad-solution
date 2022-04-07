import React, {useEffect, useState} from 'react';
import fourthStep from "../assets/svg/fourth-step.svg";
import CardButton from "./CardButton";
import octopusSkew from "../assets/svg/ely/ely-octopus-skew.svg";
import nbPerson from "../assets/svg/nb_person.svg";
import {Slider} from "@mui/material";

const FourthStep = ({handleNextStep, handlePreviousStep}) => {

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

    const marks = [
        {
            value: 0,
            label: '1-5',
        },
        {
            value: 125,
            label: '10-20',
        },
        {
            value: 250,
            label: '50-100',
        },
        {
            value: 500,
            label: '+500',
        },
    ];

    return (
        <div>
            <div>
                <div className="container step">
                    <img className="center-image" src={fourthStep} alt="fourth step"/>
                    <h2>Quelle est ta taille d’entreprise idéale ?</h2>
                    <div className="slider-section">
                        <img className="center-image" src={nbPerson} alt="fourth step" width={400}/>

                        <Slider
                            className="slider"
                            aria-label="Number"
                            defaultValue={0}
                            step={125}
                            marks={marks}
                            min={0}
                            max={500}
                        />
                    </div>

                    <div className="bubble-info card fourth-step">
                        <p>L'union fait la force !</p>
                        <img className="bubble-illustration" src={octopusSkew} alt="octopus"/>
                    </div>
                    <span onClick={() => handlePreviousStep()}>précédent</span>
                    <button className="btn-blue" onClick={() => handleNextStep()}>Suivant</button>
                </div>
            </div>
        </div>
    );
};

export default FourthStep;

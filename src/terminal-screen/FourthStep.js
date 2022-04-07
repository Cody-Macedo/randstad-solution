import React, {useEffect, useState} from 'react';
import fourthStep from "../assets/svg/fourth-step.svg";
import CardButton from "./CardButton";
import octopusSkew from "../assets/svg/ely/ely-octopus-skew.svg";
import {Slider} from "@mui/material";

const FourthStep = ({handleNextStep,handlePreviousStep}) => {

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
                    <h2>Et ton rythme de travail dans tout ça ?</h2>

                    <Slider
                        className="slider"
                        aria-label="Number"
                        defaultValue={0}
                        step={125}
                        marks={marks}
                        min={0}
                        max={500}
                    />

                    <div className="bubble-info card        ">
                        <p>Il me tient à coeur de te proposer un environnement dans lequel tu pourras t’épanouir </p>
                        <img className="bubble-illustration" src={octopusSkew} alt="octopus"/>
                    </div>
                    <span onClick={() => handlePreviousStep()}>précédent</span>
                </div>
            </div>
        </div>
    );
};

export default FourthStep;

import React, {useEffect} from 'react';
import Answer from "./Answer";

const Question = ({title, answers, answerDone}) => {


    return (
        <div className="question">
            <div className="form-group__label">{title}</div>
            <div className="form-group__input">
                <label htmlFor="input-1" className="selection-control selection-control--checkbox">
                    {answers.map((answer) => <Answer answerDone={answerDone} key={answer.id} libelle={answer.libelle}/>)}

                </label>
            </div>
        </div>
    );
};

export default Question;

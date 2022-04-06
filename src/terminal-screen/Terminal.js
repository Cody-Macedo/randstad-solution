import React, {useEffect, useState} from 'react';
import Question from "./Question";

const Terminal = () => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {

        const fetchTodos = async () => {
            const res = await fetch('http://localhost:3004/questions')
            const data = await res.json()
            // console.log(data)
            setQuestions(data)
        }

        fetchTodos()

    }, [])

    const handleAnswer = (txt) => {
        console.log(txt);
    }

    return (
        <div className="terminal">
            <div className="block">
                <div className="block__wrapper wrapper">
                    <div className="block__content">
                        <div className="form-group form-group--selection-control">
                            {questions.map((question) => <Question key={question.id} answerDone={handleAnswer} title={question.title}
                                                                   answers={question.answers}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;

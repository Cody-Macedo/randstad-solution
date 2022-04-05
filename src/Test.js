import React, {useState} from 'react';
import Calendar from "react-calendar";

const Test = () => {
    const [value, setValue] = useState(new Date());

    return (
        <div>
            <h1> test page react router</h1>
            <Calendar onChange={setValue} value={value} />
        </div>
    );
};

export default Test;

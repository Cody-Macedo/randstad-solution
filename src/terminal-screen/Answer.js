import React, {useEffect} from 'react';
import chevronDown from "../assets/svg/default/chevron-down.svg";

const Answer = ({libelle, answerDone}) => {

    return (
        <div>
            {libelle}
            <p>--</p>

            <button className="button button--m button--icon button--filled" onClick={() => {answerDone(libelle)}}>
                <span className="button__text">go</span>
                <span className="icon" aria-hidden="true">
										<img src={chevronDown} alt="chevron-down"/>

                </span>
            </button>
            {/*
                                            <span className="selection-control__input">
                                        <input id="input-1" type="checkbox"/>
                                        <span className="icon selection-control__control" aria-hidden="true">
                                            <svg viewBox="0 0 16 16">
                                                <polyline points="2.1,8.5 6.2,12.4 13.9,5.1"/>
                                            </svg>
                                        </span>
                                    </span>
                                                        <span className="selection-control__label">I want to receive news in my inbox</span>

        */}
        </div>
    );
};

export default Answer;

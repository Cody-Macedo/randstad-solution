import React from 'react';

const ButtonBottomNav = ({img, title, onClick}) => {
    return (
        <div onClick={() => {console.log({title})}}>
            <div className="button-nav">
                <img src={img} alt="Search" width="25" height="25" />
                <p>{title}</p>
            </div>
        </div>
    );
};

export default ButtonBottomNav;

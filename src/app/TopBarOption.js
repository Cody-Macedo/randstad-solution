import React from 'react';
import {Link} from "react-router-dom";

const TopBarOption = () => {
    return (
        <div className="topbar-option">
            <Link className="selected-option" to="/app"> suggestion pour vous</Link>
            <Link to="/app"> offres</Link>
            <Link to="/app"> entreprise</Link>
        </div>
    );
};

export default TopBarOption;

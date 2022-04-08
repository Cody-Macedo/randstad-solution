import React from 'react';
import {Link} from "react-router-dom";

const TopBarOption = () => {
    return (
        <div className="topbar-option-postuler">
            <Link className="selected-option" to="/app"> description</Link>
            <Link to="/app"> équipe </Link>
            <Link to="/app"> mission</Link>
            <Link to="/app"> postuler</Link>
        </div>
    );
};

export default TopBarOption;
